import React, { useEffect, useState } from 'react'
import { filterListData } from '../api/filterListData'
import { GameCard } from '../components/GameCard'
import { useSelector, useDispatch } from "react-redux"
import { editGame, getGame } from '../redux/Game/action'
import { useSearchParams } from 'react-router-dom'
import { addInWishListPost, removeFromWishList } from '../redux/LibraryPost/action'
import { addInBagPost, removeFromBag } from '../redux/BagRedux/action'

export const Categories = () => {
  const [filters, setFilters] = useState(filterListData)
  const { games } = useSelector(store => store.gamesReducer);
  const { token } = useSelector(store => store.authReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("category") || "")
  const dispatch = useDispatch()
  const handleFilterGames = (category) => {
    let newFiltersData = filters.map(filter => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter
    })
    setFilters(newFiltersData);
    setCategory(category)
  }
  const handleAddInWishList = (id, library, wishListData) => {
    dispatch(addInWishListPost(wishListData, token))
    dispatch(editGame(id, { library }));
  }

  const handleRemoveFromWishlist = (id,library) =>{
    dispatch(removeFromWishList(id,token))
    dispatch(editGame(id, library ));
  }
  
  const handleAddInBag = (id, bag, bagData) => {
    dispatch(addInBagPost(bagData, token))
    dispatch(editGame(id, { bag }));
  }
  
  const handleRemoveFrombag = (id,bag) =>{
    dispatch(removeFromBag(id,token))
    dispatch(editGame(id, bag ));
  }

  useEffect(() => {
    setSearchParams({ category })
    const paramObj = {
      category
    }
    dispatch(getGame({ params: paramObj }))
  }, [category]);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
          <ul className='md:flex md:flex-wrap md:gap-4 my-4'>
            {
              filters.map(filter => (
                <li key={filter._id} onClick={() => handleFilterGames(filter.name)} className={`${filter.active ? "bg-[#1b2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]" : ""} rounded py-1 px-3 cursor-pointer hover:shadow-[-1px_-2px_10px_rgba(33,22,104,0.56),5px_5px_10px_rgba(24,23,76,0.57)] transition duration-300`}>{filter.name === "" ? "All" : filter.name}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <input type="text" placeholder='Search' className='rounded-sm py-1 px-2 outline-none focus:outline-indigo-500 bg-[#1b2635]' />
        </div>
      </div>

      <div className='flex flex-wrap justify-center sm:justify-around lg:justify-around mt-10'>
        {games.length > 0 && games?.map(game => (
          <GameCard key={game._id} {...game} handleAddInWishList={handleAddInWishList} handleRemoveFromWishlist={handleRemoveFromWishlist} handleAddInBag={handleAddInBag} handleRemoveFrombag={handleRemoveFrombag} />
        ))}
      </div>
    </div>
  )
}
