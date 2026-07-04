import RestaurantCard from "./ResturantCard.js";
import restaurantList from "../../utils/mockData.js";
// Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        {/* <input type="text" placeholder='Search for a restaurant' /> */}
      </div>
      <div className="restaurant-container">
        {/* I have to map the restaurantList and pass the resturantData to the RestaurantCard component  for reusable card display*/}
        {
            restaurantList.map((mappedRestaurantData) => <RestaurantCard resturantData={mappedRestaurantData} key={mappedRestaurantData.info.id} />)
        }
      </div>
    </div>
  );
};

export default Body;