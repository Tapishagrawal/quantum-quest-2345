import  { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getUser} from "../redux/User/action";
//import { useSearchParams } from "react-router-dom";

export const Userdetail = () => {
    const dispatch=useDispatch();
const users = useSelector(store => store.usersReducer.users);
//const [searchParams]=useSearchParams();

// const paramObj = {
//   params:{
//      limit:10,
//      //page
//   },
// };

useEffect(()=>{
  getUser(dispatch);
}, [])

console.log(users);
  return (
    <div>
   
      <table style={{width:"100%", margin:"15px"}} className="table-fixed border-separate border-spacing-4 border border-slate-400 ...">
  <thead>
    <tr >
    <th className="border border-slate-300 ...">S. No.</th>
      <th className="border border-slate-300 ...">Username</th>
      <th className="border border-slate-300 ...">Email</th>
    </tr>
  </thead>
  <tbody>
  {users.length>0 && users.map((el,i)=>{
    return(
          <tr style={{textAlign:"center"}} key={el.id} className="border border-slate-300 ...">
          <td>{i+1}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
    </tr>
        )
      })}
    
    </tbody>
</table>
     
   </div>
  )
}
