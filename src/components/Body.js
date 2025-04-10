import ResComponent from "./ResComponent";
import restaurants from "../utils/mockData";
import { useState,useEffect } from "react";
const Body=()=>{
    //local state variable
     const [listOfRestaurents,setListOfRestaurents]=useState([])
     useEffect(()=>{
       fetchdata();
     },[])
    const fetchdata=async()=>{
        const data=await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP")
        const json=await data.json()
        console.log('fetch data',json.data.widgets); 
        setListOfRestaurents(json.data.widgets)
    };
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <div>
        <button className="filter_rating" onClick={()=>{
            const listOfRestaurent=listOfRestaurents.filter((res)=> res.priority > 2)     
            setListOfRestaurents(listOfRestaurent)                    
        }}>filter rating </button>
        </div>
        <div className="res-container">
        {listOfRestaurents.map((restaurent)=>(
            <ResComponent key={restaurent.id} restaurants={restaurent} />
        ))}
        </div> 
    </div>
    )
}


export default Body ;