import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editGame } from '../redux/Game/action';

export const Edit = () => {
    const dispatch=useDispatch();
  const { id } = useParams();
  const games = useSelector((store) => store.gamesReducer.games)
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    const {price,title,discount,image,gender,description,category,level} = games.find(el => el.id === +id);
    setPrice(price);
    setDiscount(discount);
    setTitle(title);
    setImage(image);
    setDescription(description);
    setCategory(category);
    setLevel(level);
  }, [])

  const handleEdit=()=>{
    const data={
        title,
        image,
     price,
     discount,
     description,
     category,
     level
    }
    dispatch(editGame(id,data))
     }

  return (
    <div>
      <h1>{id}</h1>
      <input type='number' placeholder='price' value={price}
        onChange={(e) => setPrice(+e.target.value)} />
        <input type='number' placeholder='discount' value={discount}
        onChange={(e) => setDiscount(+e.target.value)} />
      <input type='text' placeholder='title' value={title}
        onChange={(e) => setTitle(e.target.value)} />
        <input type='text' placeholder='image' value={image}
        onChange={(e) => setImage(e.target.value)} />
      <input type='text' placeholder='description' value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <input type='text' placeholder='category' value={category}
        onChange={(e) => setCategory(e.target.value)} />
      <input type='text' placeholder='level' value={level}
        onChange={(e) => setLevel(e.target.value)} />
      <button onClick={handleEdit}>Update Game</button>

    </div>
  )
}
