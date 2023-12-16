import React from 'react'
import React, { useState } from 'react'
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
      <h3>Add Game</h3>
      <input type="text" placeholder="Title" 
      name="title"
      value={data.title}
      onChange={handleChange}/>
      <input type="text" placeholder="Image" 
      name="image"
      value={data.image}
      onChange={handleChange}/>
      <input type="text" placeholder="Description" 
      name="description"
      value={data.description}
      onChange={handleChange}/>
      <input type="number" placeholder="Price" 
      name="price"
      value={data.price}
      onChange={handleChange}/>
      <input type="number" placeholder="Discount" 
      name="discount"
      value={data.discount}
      onChange={handleChange}/>

      <select name="level" value={data.level} onChange={handleChange}>
      <option value="">Select level</option>
      <option value="entry">Entry</option>
      <option value="median">Median</option>
      <option value="high">High</option>
      </select>

     <select name="category" value={data.category} onChange={handleChange}>
     <option value="">Select Category</option>
      <option value="moba">MOBA</option>
      <option value="racing">Racing</option>
      <option value="fighting">Fighting</option>
      <option value="battle">Battle</option>
      <option value="rpg">RPG</option>
     </select>

     <button type="submit">Add Game</button>

    </form> 
    </DIV>
  )
}


const DIV = styled.div`

width: 400px;
margin: auto;
border: 1px solid gray;
padding: 40px;

form{
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
}

input,select{
  height:40px;
  width:100%;
  font-size:larger;
}

button{
  width:50%;
  height:35px;
  border:none;
  cursor:pointer;
}
`;