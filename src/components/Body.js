import RestaurantCard from "./ResturantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer-UI.js";

// useState Hook is used to create state variables- bcoz it maintains the state of the component

/*  
Normally ion JS we use variables like this:-
let list = [];
list = [1,2,3];

OR,

const list = [];
list.push("Devendra");

Now in React what we have is:- useState Hook which is used to create state variables. 
It returns an array with 2 elements, first is the variable and second is the function to update the variable.
example:- 
const listOfResturants = useState([]);  === let list = [];
But, we have to update it at the end of the day right.so, we pass 2nd element as a function to update the variable.

const [listOPfResturants, setListOfResturants] = useState([]);  === let list = [];
setListOfResturants([1,2,3]);  === list = [1,2,3];
*/

// whenever state variable is updated/changes, the component is re-renderedthe component and the updated value is displayed on the screen.

// React make our DOM manipulation so fast and efficient by using virtual DOM. This is the reason why most of the react application so much fast.

// Body Component
const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);
  // useEffect Hook is used to perform side effects in the component. It takes 2 arguments,
  // first is the function to be executed and second is the dependency array.
  // If the dependency array is empty, the function will be executed only once when the component is mounted.

  // Side effects -> are operations that interact with the outside world, such as fetching data, manually changing the DOM, setting up subscriptions, or configuring timers.


  // API call to get the list of restaurants
  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfResturants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleTopRatedClick = () => {
    const filteredList = listOfResturants.filter(
      (restaurant) => (restaurant?.info?.avgRating || 0) > 4
    );
    setFilteredRestaurants(filteredList);
  };
  /* conditional rendering:- if we are having conditions for our rendering we called it as conditional rendering. 
   In this case we are checking if the listOfResturants is empty or not. 
   If it is empty then we are rendering the Shimmer component else we are rendering the list of restaurants.
  
  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }
  */

  return listOfResturants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search restaurants..."
            className="search-input"
            onChange={(anyEvent) => {
              const searchText = anyEvent.target.value.toLowerCase();
              const filtered = listOfResturants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(filtered);
            }}
          />
        </div>
        <button className="filter-btn" onClick={handleTopRatedClick}>
          ⭐ Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {/* I have to map the restaurantList and pass the resturantData to the RestaurantCard component  for reusable card display*/}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            resturantData={restaurant?.info || restaurant}
            key={restaurant?.info?.id || restaurant?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
