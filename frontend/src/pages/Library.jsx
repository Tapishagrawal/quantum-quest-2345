import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addInWishListPost, getWishListData, removeFromWishList } from '../redux/LibraryPost/action';
import { GameCard } from '../components/GameCard';
import { editGame } from '../redux/Game/action';
import { addInBagPost, removeFromBag } from '../redux/BagRedux/action';
export const Library = () => {
  const { wishListData } = useSelector(store => store.wishListReducer)
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
      <div className={`flex flex-wrap ${wishListData.length > 0 ? "justify-center sm:justify-around lg:justify-around" : "justify-start"} mt-10`}>
        {wishListData.length > 0 ? wishListData?.map(game => (
          <GameCard key={game._id} {...game} handleAddInWishList={handleAddInWishList} handleRemoveFromWishlist={handleRemoveFromWishlist} handleAddInBag={handleAddInBag} handleRemoveFrombag={handleRemoveFrombag} />
        )) :
          <div>
            <h1 className='text-4xl font-semibold'>My Library</h1>
            <h2 className='text-xl mt-2 text-slate-300'>Your Library is empty</h2>
          </div>}
      </div>
    </div>
  )


}
