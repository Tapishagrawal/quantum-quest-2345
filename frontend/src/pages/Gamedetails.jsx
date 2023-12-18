import  { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteGame, getGame} from "../redux/Game/action";
import { Link } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";
export const Gamedetails = () => {
    const dispatch=useDispatch();
    const games = useSelector((store) => store.gamesReducer.games);
    //const [searchParams]=useSearchParams();
    
    // const paramObj = {
    //   params:{
    //      limit:10,
    //      //page
    //   },
    // };
    
    // useEffect(()=>{
    //   dispatch(getGame(paramObj));
    // }, [searchParams]);

    useEffect(()=>{
         //dispatch(getGame());
         getGame(dispatch);
       }, [])

       const handleRemoveGame = (id) => {
        dispatch(deleteGame(id));
      };

console.log(games);
      return (
        <div >
       
          <table style={{width:"100%", margin:"15px"}} className="table-fixed border-separate border-spacing-4 border border-slate-400 ...">
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
      {games.length>0 && games.map((el)=>{
            return(
              <tr key={el.id} className="border border-slate-300 ...">
          <td>{el.title}</td>
          <td>{el.category}</td>
          <td>{el.level}</td>
          <td>
          <button className='bg-indigo-600 px-3 rounded-md text-sm'><Link to={`/editgame/${el._id}`}>Update</Link></button>
          </td>
          <td>
          <button className='bg-indigo-600 px-3 rounded-md text-sm' 
          onClick={()=>handleRemoveGame(el._id)}>Delete</button>
          </td>
        </tr>
            )
              
            
          })}
        
        </tbody>
    </table>
         
       </div>
      )
}
