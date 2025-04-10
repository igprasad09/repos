import { useLocation } from "react-router-dom";
import Edit from "./Edit"
import { useEffect, useState } from "react";
import axios from 'axios';
import Repos from "./Repos";

function Home() {
    const location = useLocation();
    const { username } = location.state || {};
    const [UserName, SetUserName] = useState(username);
    const [data, setData] = useState();

    
    useEffect(()=>{
         async function feach_data(){
             const res = await axios.get(`https://api.github.com/users/${UserName}/repos`);
             setData(res.data);
         }
         feach_data();
    },[UserName])


    //functions
    function edit_username(user:string){
            SetUserName(user)       
    }

  return (

  <div className="absolute top-0 z-[-2] w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <h1 className="text-center text-3xl font-semibold font-mono mt-3">@{UserName}</h1>
       <span className="ml-5 mt-5">
        <Edit fun={edit_username} user={username} />
       </span>
       <div className="ml-10">
   
       <Repos res={data || []} />

       </div>
  </div>
  )
}

export default Home
