import  { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGame} from "../redux/Game/action";
import { useSearchParams } from "react-router-dom";
export const Gamedetails = () => {
    const dispatch=useDispatch();
    const games = useSelector((store) => store.gamesReducer.games)
    const [searchParams]=useSearchParams();
    
    const paramObj = {
      params:{
         limit:10,
         //page
      },
    };
    
    useEffect(()=>{
      dispatch(getGame(paramObj));
    }, [searchParams])
      return (
        <div>
       
          <table className="table-fixed border-separate border-spacing-2 border border-slate-400 ...">
      <thead>
        <tr>
          <th className="border border-slate-300 ...">Title</th>
          <th className="border border-slate-300 ...">Category</th>
          <th className="border border-slate-300 ...">Level</th>
          <th className="border border-slate-300 ...">Update</th>
          <th className="border border-slate-300 ...">Delete</th>
        </tr>
      </thead>
      <tbody>
      {games?.map((el,i)=>{
            (
              <tr key={i}>
          <td>{el.title}</td>
          <td>{el.category}</td>
          <td>{el.level}</td>
          <td>
          <button className='bg-indigo-600 px-3 rounded-md text-sm'>Update</button>
          </td>
          <td>
          <button className='bg-indigo-600 px-3 rounded-md text-sm'>Delete</button>
          </td>
        </tr>
            )
          })}
        
        </tbody>
    </table>
         
       </div>
      )
}
