import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addInWishListPost, getWishListData, removeFromWishList } from '../redux/LibraryPost/action';
import { GameCard } from '../components/GameCard';
import { editGame } from '../redux/Game/action';
import { addInBagPost, removeFromBag } from '../redux/BagRedux/action';
import { ShopBagItem } from '../components/ShopBagItem';

export const Bag = () => {
    const { bagData } = useSelector(store => store.bagReducer)
    const { token } = useSelector(store => store.authReducer)
    const dispatch = useDispatch()


    const handleAddInWishList = (id, library, wishListData) => {
        dispatch(addInWishListPost(wishListData, token))
        dispatch(editGame(id, { library }));
    }

    const handleRemoveFromWishlist = (id, library) => {
        dispatch(removeFromWishList(id, token))
        dispatch(editGame(id, library));
    }

    const handleAddInBag = (id, bag, bagData) => {
        dispatch(addInBagPost(bagData, token))
        dispatch(editGame(id, { bag }));
    }

    const handleRemoveFrombag = (id, bag) => {
        dispatch(removeFromBag(id, token))
        dispatch(editGame(id, bag));
    }

    useEffect(() => {
        dispatch(getWishListData(token))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-semibold'>My Bag</h1>
            {
                bagData.length <= 0 ?
                    <h2 className='text-xl mt-2 text-slate-300'>Your Library is empty</h2>
                    :
                    <div className='mt-12'>
                        <div className='relative overflow-x-auto sm:rounded-lg shadow-[-1px_-2px_10px_rgba(255,255,255,0.3),5px_5px_15px_rgb(16,6,54,0.60)]'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#3b3465] dark:text-gray-400'>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">No.</th>
                                        <th scope="col" className="px-6 py-3">Preview</th>
                                        <th scope="col" className="px-6 py-3">Game</th>
                                        <th scope="col" className="px-6 py-3">Price</th>
                                        <th scope="col" className="px-6 py-3">Discount</th>
                                        <th scope="col" className="px-6 py-3">Payment</th>
                                        <th scope="col" className="px-6 py-3"><span class="sr-only">Remove</span></th>
                                    </tr>
                                </thead>
                                <tbody className='mt-10'>
                                    {bagData.length > 0 && bagData?.map((game, index) => (
                                        <ShopBagItem key={game._id} index={index} {...game} handleAddInBag={handleAddInBag} handleRemoveFrombag={handleRemoveFrombag} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}
