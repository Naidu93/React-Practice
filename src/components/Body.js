import Card from "./Card";
import { resList } from "../utils/resList";
import {CDN_URL, MAIN_URL} from "../utils/constants"
import { useState, useEffect } from "react";


const Body=()=>{
    const [list,setList] = useState([]);
    const [filteredList,setFilteredList] = useState([])
    const [inputValue,setSearchValue] = useState("");
    

    useEffect(()=>{
        fetchApiData();
       
    },[])
    
    async function fetchApiData (){
        // console.log("useEffect Called")
        let json = await fetch(MAIN_URL);
        let data = await json.json();
        // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setList(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }


console.log(list);

    function searchInput(){
        // console.log("submit is triggered");
        const newList = filteredList.filter((res)=>res?.info?.name.toLowerCase().includes(inputValue.toLowerCase()))
        setList(newList)

        
    }
    function getChange(e){
        // console.log(e.target.value);
        setSearchValue(e.target.value)
        
    }

    function filterTopRated(){
        let newList =list.filter((res)=>res.info.avgRating>4.5)
        // console.log(newList);
        setList(newList)
    }
    return(
        <div className="body">
            <div className="search">
                <input type="text" value={inputValue} onChange={(e)=>getChange(e)} className="input" placeholder="Search"  />
                <button className="search-btn" onClick={()=>searchInput()} >Search</button>
                <button className="filter-btn" onClick={()=>filterTopRated()}>Top Rated</button>
            </div>
            <div className="card-container">
                {list.map((restaurant,index)=>{
                    return(
                        <Card 
                            key={restaurant?.info?.id} 
                            resName ={restaurant?.info?.name}
                            image={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                            rating={restaurant.info.avgRating}
                            deliveryTime={restaurant.info.sla.slaString}
                            cuisines={restaurant.info.cuisines.join(",").substring(0,18)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;