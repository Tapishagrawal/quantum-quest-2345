import {styled} from "styled-components"
import { Userdetail } from "./Userdetail";
import { Gamedetails } from "./Gamedetails";

export const Admin = () => {
  


  return (
    <div>
   <DIV >
   <button className='bg-indigo-600 px-3 rounded-md text-sm'>User Details</button>
  <button className='bg-indigo-600 px-3 rounded-md text-sm'>Game Details</button>
  <button className='bg-indigo-600 px-3 rounded-md text-sm'>Logout</button>
   </DIV>

   <div>
    <Userdetail/>
    {/* <Gamedetails/> */}
   </div>

    </div>
  )
}

const DIV = styled.div`
display:flex;
justify-content:space-between;
height:30px;
`;
