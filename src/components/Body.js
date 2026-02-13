import Card from "./Card";
import { resList } from "../utils/resList";
import {CDN_URL} from "../utils/constants"
import { useState } from "react";


const Body=()=>{
    const [list,setList] = useState(resList)

    function filterTopRated(){
        let newList =list.filter((res)=>res.info.avgRating>4.5)
        console.log(newList);
        setList(newList)
    }
    return(
        <div className="body">
            <div className="search">
                <input type="text" className="input" placeholder="Search" />
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