# React Learning

import React from "react";
import ReactDOM from "react-dom/client";

/*
Core React
createElement -> three things -> element, props/object, children
*/

/*
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");




const usingJsx = <h1>Using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(usingJsx); 

*/

/* food ordering app using swiggy API Quick Pack

** Planning**
* Header component
    - Logo
    - Nav items
    - Cart
* Body component
    - Search bar
    - Restaurant container
    - Restaurant card
        - Image
        - Name
        - Rating
        - Cuisines
        - Delivery time
        - Price
* Footer component
        - Copyright
        - Links
        - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


// Restaurant List
const restaurantList = [
    ... this file is in mockfile/ enum file/ constants file
  ];

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
            //? here -> key is used to identify the restaurantData uniquely,(means-> unique key property is required for each of the item should be uniquly represented), and avoid the re-rendering of the component
            //? here -> mappedRestaurantData is used to access the restaurantData from the restaurantList
            //? here -> mappedRestaurantData.info.id is used to access the id of the restaurant
            //? whenever we are looping on any list we have to give a key property to the component, and we have to give unique id to the each of the item in the list
            // ? whenever we are using map function we have to give a key property to the component why bcoz, in flow-chart.md page we can see the flow of the component.
            //! IMPORTANT:- some people give index as key also but it is not a good practice because if we add or remove any item from the list, the index will change and it will re-render the component and it will cause the performance issues.
            /* example:-
            restaurantList.map((mappedRestaurantData, index) => <RestaurantCard resturantData={mappedRestaurantData} key={index} />)
            */
        }
      </div>
    </div>
  );
};
        // we can also pass the restaurant data like this for single restaurant (non reusable way):-
        //   resturanatName="Barbeque Nation"
        //   restaurantRating="3.7"
        //   returantCuisines="North Indian, South Indian, Chinese"
        //   restaurantAddress="ABIDS"



//! If we have to write any JS in between JSX, we have to use {}.

// This is a inline style in React, But we should avoid using it.
const cardStyle = {
  backgroundColor: "#f0f0f0",
};

//? Props -> Properties of the component, we can pass data/arguments to the component.
/*
syntax:-
<Component name="Any value we have to pass to the component" />
<Component name={Any value we have to pass to the component} />
<Component name={<div>Any JSX element we have to pass to the component</div>} />
<Component name={<Component name="Any value we have to pass to the component" />} />
<Component name={<Component name={Any value we have to pass to the component} />} />
*/

//! I have to build this restaurant card component in a way that it is reusable and can be used in the Body component
const RestaurantCard = (props) => {
  const { resturantData} = props;

  //! I have to destructure the resturantData like this : (for better readability and performance)
   //? here -> || {} is used to handle the case when the resturantData is not available
  //? and -> ?. is used to access the info property of the resturantData if it is available otherwise it will return undefined
  const { name, avgRating, cuisines, locality, areaName, costForTwo} = resturantData?.info || {}; 
 

  /* one more way to destructure the props
    const {resturanatName, restaurantRating, returantCuisines, restaurantAddress} = props; 
    OR,
    const RestaurantCard = ( {resturanatName, restaurantRating, returantCuisines, restaurantAddress}) =>
    
    
    */
  return (
    <div className="restaurant-card" style={cardStyle}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
            resturantData.info.cloudinaryImageId}
      />
      
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4> {/* This join(", ") used to join the cuisines with a comma */}
      <h4>{locality}, {areaName}</h4>
      <h4>{costForTwo}</h4>

    {/* and here pass like this :- <h3>{resturanatName}</h3> */}
      {/* <h3>{resturanatName}</h3>
      <h4>{restaurantRating} stars</h4>
      <h4>{returantCuisines}</h4>
      <h4>{restaurantAddress}</h4> */}
    </div>
  );
};
// Footer Component
// const Footer = () => {
//     return (
//         <div className='footer'>
//             <h3>Footer</h3>
//         </div>
//     )
// }
// Main Component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


# Two types of export
- Default Export/Import

export default Component;
import Component from "./path"; 

- Named Export/Import

export const component;
import {component } from "./Path";
