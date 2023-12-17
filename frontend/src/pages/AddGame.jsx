import { useState } from 'react'
import {styled} from "styled-components"
import {useDispatch} from "react-redux"
import { addGame } from '../redux/Game/action';

const initialState={
  title:"",
  image:"",
  discription:"",
  level:"",
  price:0,
  category:"",
  discount:0,
};

export const AddGame = () => {
  const [data,setData]=useState(initialState);
const dispatch=useDispatch();
const handleChange=(e)=>{
const {name,value}=e.target;
setData(prev=>{
  return {...prev, [name]: name==="price" ? +value : value};
})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(data);
  dispatch(addGame(data));
  setData(initialState);
}
  return (
    <DIV>
    <form onSubmit={handleSubmit}>
      <h3>Add New Game</h3>
      <input type="text" placeholder="Title" className="w-80 bg-white shadow rounded"
      name="title"
      value={data.title}
      onChange={handleChange}/>
      <input type="text" placeholder="Image" className="w-80 bg-white shadow rounded"
      name="image"
      value={data.image}
      onChange={handleChange}/>
      <input type="text" placeholder="Description" className="w-80 bg-white shadow rounded"
      name="description"
      value={data.description}
      onChange={handleChange}/>
      <input type="number" placeholder="Price" className="w-80 bg-white shadow rounded"
      name="price"
      value={data.price}
      onChange={handleChange}/>
      <input type="number" placeholder="Discount" className="w-80 bg-white shadow rounded"
      name="discount"
      value={data.discount}
      onChange={handleChange}/>

      <select name="level" value={data.level} onChange={handleChange} className="w-80 bg-white shadow rounded">
      <option value="">Select level</option>
      <option value="entry">Entry</option>
      <option value="median">Median</option>
      <option value="high">High</option>
      </select>

     <select name="category" value={data.category} onChange={handleChange} className="w-80 bg-white shadow rounded">
     <option value="">Select Category</option>
      <option value="moba">MOBA</option>
      <option value="racing">Racing</option>
      <option value="fighting">Fighting</option>
      <option value="battle">Battle</option>
      <option value="rpg">RPG</option>
     </select>

     <button type="submit" className='bg-indigo-600 px-3 rounded-md text-sm'>Add Game</button>

    </form> 
    </DIV>
  )
}


const DIV = styled.div`

width: 450px;
margin: auto;
border: 1px solid gray;
padding: 40px;

form{
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;
}

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