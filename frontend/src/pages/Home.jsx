import React, { useEffect, useState } from 'react'
import { GameSwiper } from '../components/gameSwiper/GameSwiper';
import { GameCard } from '../components/GameCard';
import { Link } from "react-router-dom";
import data from "../api/gameSlider.json"
import { FaArrowRightLong } from "react-icons/fa6";

export const Home = () => {
    const [grameSwiperData, setGrameSwiperData] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await Promise.all(
                data.map(async (game) => {
                    const { default: image } = await import(/* @vite-ignore */ `../assets/games/${game.img}`);
                    return { ...game, image };
                })
            );

            setGrameSwiperData(loadedImages);
        };

        loadImages();
    }, []);

    return (
        <div>
            <GameSwiper />
            <div className='flex items-center justify-between mt-5'>
                <h1 className='text-xs sm:text-2xl font-semibold'>GAMES ON PROMOTION</h1>
                <Link to="/categories" className='group text-xs sm:text-lg flex items-center'>View More Games <span className='max-[333px]:group-hover:-translate-x-4 max-[333px]:-translate-x-5 group-hover:translate-x-2 translate-x-1 transition duration-500'><FaArrowRightLong /></span></Link>
            </div>
            <div className='flex flex-wrap justify-center sm:justify-around lg:justify-between mt-10'>
                {
                    grameSwiperData.map((item, i) => (
                        i < 8 &&
                        <GameCard key={item._id} {...item} />
                    ))
                }
            </div>
        </div>
    );
};