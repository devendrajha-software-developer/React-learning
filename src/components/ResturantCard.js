import { CDN_URL } from "../../utils/constants.js";

// Resturant Component
//! I have to build this restaurant card component in a way that it is reusable and can be used in the Body component
const cardStyle = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
    const { resturantData} = props;
  
    //! I have to destructure the resturantData like this : (for better readability and performance)
     //? here -> || {} is used to handle the case when the resturantData is not available
    //? and -> ?. is used to access the info property of the resturantData if it is available otherwise it will return undefined
    const { name, avgRating, cuisines, locality, areaName, costForTwo} = resturantData?.info || {}; 
    return (
      <div className="restaurant-card" style={cardStyle}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + 
              resturantData.info.cloudinaryImageId}
        />
        
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{cuisines.join(", ")}</h4> {/* This join(", ") used to join the cuisines with a comma */}
        <h4>{locality}, {areaName}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;