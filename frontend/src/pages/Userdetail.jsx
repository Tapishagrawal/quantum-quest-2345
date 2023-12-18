import  { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getUser} from "../redux/User/action";
import { useSearchParams } from "react-router-dom";

export const Userdetail = () => {
    const dispatch=useDispatch();
const users = useSelector(store => store.usersReducer.users);
const [searchParams]=useSearchParams();

const paramObj = {
  params:{
     limit:10,
     //page
  },
};

useEffect(()=>{
  dispatch(getUser(paramObj));
}, [searchParams])
  return (
    <div>
   
      <table className="table-fixed border-separate border-spacing-2 border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">Username</th>
      <th className="border border-slate-300 ...">Email</th>
    </tr>
  </thead>
  <tbody>
  <tr >
      <td className="border border-slate-300 ...">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className="border border-slate-300 ...">Malcolm Lockyer</td>
    </tr>
  {users?.map((el,i)=>{
        (
          <tr key={i}>
      <td>{el.username}</td>
      <td>{el.password}</td>
    </tr>
        )
      })}
    
    </tbody>
</table>
     
   </div>
  )
}
