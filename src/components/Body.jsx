import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchList, setSearchRestro] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    };
  
    const handleTopRatedClick = () => {
      const filteredList = listOfRestaurants.filter(
        (res) => parseFloat(res.info.avgRating) > 4
      );
      setFilteredRestaurants(filteredList);
    };
  
    const handleSearchClick = () => {
      const filtered = listOfRestaurants.filter((restro) =>
        restro.info.name.toLowerCase().includes(searchList.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    };
  
    return filteredRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants..."
            value={searchList}
            onChange={(e) => setSearchRestro(e.target.value)}
          />
          <button type="button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
  
        <div className="filter-search">
          <button className="filter-btn" onClick={handleTopRatedClick}>
            Top Rated Restaurants
          </button>
        </div>
  
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <RestoCard key={restaurant.info.id} resName={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;