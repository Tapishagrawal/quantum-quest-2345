import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SingleGameCard } from '../components/SingleGameCard';

export const SingleGame = () => {
    const {id}=useParams();
    const [data,setData]=useState({});
    const games = useSelector((store) => store.gamesReducer.games);
    
    useEffect(()=>{
  const game=games.find(el => el.id == id);
  setData(game);
    },[])
  
  return (
    <div>
      <h2>Game-id: {id}</h2>
      {/* <SingleGameCard {...data}/> */}
      <div>
        <img src={data.img}/>
        <h1>{data.title}</h1>
        <p>lorem20</p>
      </div>
    </div>
  )
}

