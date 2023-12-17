import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editGame } from '../redux/Game/action';
import {styled} from "styled-components"

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
    const {price,title,discount,image,description,category,level} = games.find(el => el.id === +id);
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
    <DIV>
      <h1>Update Game {id}</h1>
      <input type='text' placeholder='title' value={title} className="w-80 bg-white shadow rounded"
        onChange={(e) => setTitle(e.target.value)} />

        <input type='text' placeholder='image' value={image} className="w-80 bg-white shadow rounded"
        onChange={(e) => setImage(e.target.value)} />

        <input type='text' placeholder='description' value={description} className="w-80 bg-white shadow rounded"
        onChange={(e) => setDescription(e.target.value)} />

      <input type='number' placeholder='price' value={price} className="w-80 bg-white shadow rounded"
        onChange={(e) => setPrice(+e.target.value)} />

        <input type='number' placeholder='discount' value={discount} className="w-80 bg-white shadow rounded"
        onChange={(e) => setDiscount(+e.target.value)} />

      <input type='text' placeholder='level' value={level} className="w-80 bg-white shadow rounded"
        onChange={(e) => setLevel(e.target.value)} />

      <input type='text' placeholder='category' value={category} className="w-80 bg-white shadow rounded"
        onChange={(e) => setCategory(e.target.value)} />
      
      <button onClick={handleEdit} className='bg-indigo-600 px-3 rounded-md text-sm'>Update Game</button>

    </DIV>
  )
}

const DIV = styled.div`

width: 450px;
margin: auto;
padding: 40px;
border: 1px solid gray;
display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;

input,select{
  height:35px;
  width:100%;
  color:black;
  padding:5px;
  font-size:larger;
}

button{
  width:50%;
  height:35px;
  border:none;
  cursor:pointer;
  
}
`;