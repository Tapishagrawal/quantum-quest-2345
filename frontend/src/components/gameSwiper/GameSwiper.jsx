import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"
import "./gameSwiper.css"
import data from "../../api/gameSlider.json"
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

export const GameSwiper = () => {
    const [grameSwiperData, setGrameSwiperData] = useState([]);
    const [active, setActive] = useState(false);

    const handleToggleVideo = () => {
        setActive(prev => !prev)
    }

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await Promise.all(
                data.map(async (game) => {
                    const { default: image } = await import(/* @vite-ignore */ `../../assets/games/${game.img}`);
                    return { ...game, image };
                })
            );

            setGrameSwiperData(loadedImages);
        };

        loadImages();
    }, []);
    return (
        <div className='-z-0'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 35,
                    stretch: 200,
                    depth: 250,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className='w-[90%] pb-7'
            >
                {
                    grameSwiperData.map((game) => (
                        <SwiperSlide key={game._id} className='max-[640px]:w-full w-[420px] h-[220px]'>
                            <div className='gameSlider relative w-full h-full bg-center bg-cover p-7 overflow-hidden after:absolute after:content-[""] after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black/50 after:rounded-2xl'>
                                <img src={game.image} alt="Game Image" className='absolute left-0 top-0 w-full h-full object-cover object-center rounded-2xl' />
                                <div className={`video ${active ? "active" : ""}`}>
                                    <iframe
                                    className='bg-black/95'
                                        width="1280"
                                        height="720"
                                        // src={game.trailer}
                                        title={game.title}
                                        allow='accelerometer clipbord-write; excrypted-media; gyroscope; picture-in-picture;'
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                                <div className='absolute bottom-2 w-[60%] z-10 sm:left-[initial]'>
                                    <h2 className='font-rubik text-xl sm:text-[2.5rem] font-bold leading-none'>{game.title}</h2>
                                    <p className='text-zinc-200 text-sm leading-none my-2'>{game.description}</p>
                                    <div className='buttons inline-flex items-center gap-5 '>
                                        <button className='py-2 px-5 bg-indigo-700 rounded-lg'>Order Now</button>
                                        <button onClick={handleToggleVideo} className={`playBtn ${active ? "active" : ""}`}>
                                            <div className={`pause hidden text-xl bg-[#ffffff33] backdrop-blur-lg rounded-full p-2`}>
                                                <FaPause />
                                            </div>
                                            <div className={`play text-xl bg-[#ffffff33] backdrop-blur-lg rounded-full p-2`}>
                                                <FaPlay />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
