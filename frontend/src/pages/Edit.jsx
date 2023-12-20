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
  const [rating, setRating] = useState("");

  console.log(games);

  useEffect(() => {
    const {id,price,title,discount,image,description,category,level} = games.length>0 && games.find(el => el._id == id);
    setPrice(price);
    setDiscount(discount);
    setTitle(title);
    setImage(image);
    setDescription(description);
    setCategory(category);
    setLevel(level);
    setRating(rating);
  }, [])

  const handleEdit=()=>{
    const data={
        title,
        image,
     price,
     discount,
     description,
     category,
     level,
     rating
    }
    dispatch(editGame(id,data))
     }

  return (
    <DIV>
      <h1>Update Game {id}</h1>
      <input type='text' placeholder='Title' value={title} className="w-80 bg-white shadow rounded"
        onChange={(e) => setTitle(e.target.value)} />

        <input type='text' placeholder='Image' value={image} className="w-80 bg-white shadow rounded"
        onChange={(e) => setImage(e.target.value)} />

        <input type='text' placeholder='Description' value={description} className="w-80 bg-white shadow rounded"
        onChange={(e) => setDescription(e.target.value)} />

      <input type='number' placeholder='Price' value={price} className="w-80 bg-white shadow rounded"
        onChange={(e) => setPrice(+e.target.value)} />

        <input type='number' placeholder='Discount' value={discount} className="w-80 bg-white shadow rounded"
        onChange={(e) => setDiscount(+e.target.value)} />

      {/* <input type='text' placeholder='level' value={level} className="w-80 bg-white shadow rounded"
        onChange={(e) => setLevel(e.target.value)} /> */}
        <select name="level" value={level} onChange={(e) => setLevel(e.target.value)} className="w-80 bg-white shadow rounded">
      <option value="">Select level</option>
      <option value="Entry">Entry</option>
      <option value="Median">Median</option>
      <option value="High">High</option>
      </select>

      {/* <input type='text' placeholder='category' value={category} className="w-80 bg-white shadow rounded"
        onChange={(e) => setCategory(e.target.value)} /> */}
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-80 bg-white shadow rounded">
     <option value="">Select Category</option>
      <option value="MOBA">MOBA</option>
      <option value="Racing">Racing</option>
      <option value="Fighting">Fighting</option>
      <option value="Battle">Battle</option>
      <option value="RPG">RPG</option>
     </select>
      
     <input type='number' placeholder='Rating' value={rating} className="w-80 bg-white shadow rounded"
        onChange={(e) => setRating(+e.target.value)} />

      <button onClick={handleEdit} className='bg-indigo-600 px-3 rounded-md text-sm'>Update Game</button>

    </DIV>
  )
}

const DIV = styled.div`

width: 450px;
margin: auto;
padding: 40px;
padding-bottom:20px;
border: 1px solid gray;
display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;

input,select{
  height:35px;
  width:100%;
  color:black;
  padding:5px;
  font-size:larger;
}

option{
  color:black;
}

button{
  width:50%;
  height:35px;
  border:none;
  cursor:pointer;
  
}
`;