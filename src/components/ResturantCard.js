import { CDN_URL } from "../../utils/constants.js";

// Resturant Component
//! I have to build this restaurant card component in a way that it is reusable and can be used in the Body component
const cardStyle = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resturantData } = props;

  const {
    name,
    avgRating,
    cuisines = [],
    locality,
    areaName,
    costForTwo,
    cloudinaryImageId,
    sla
  } = resturantData || {};

  return (
    <div className="restaurant-card" style={cardStyle}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {locality}, {areaName}
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

  export default RestaurantCard;