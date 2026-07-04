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

/* food ordering app using swiggy API

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
    {
      info: {
        id: "7203",
        name: "Taj Mahal-Abids",
        cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
        locality: "Abids",
        areaName: "Abids",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "North Indian", "Biryani", "Snacks"],
        avgRating: 4.5,
        veg: true,
        parentId: "924",
        avgRatingString: "4.5",
        totalRatingsString: "68K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description:
                "Serves only 100% vegetarian food, with no non-veg items.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Serves only 100% vegetarian food, with no non-veg items.",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "19K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/taj-mahal-abids-abids-rest7203",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "27739",
        name: "Cafe Niloufer Classic",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/20/756a4815-2e45-4a50-b91b-27f2d503d9ce_27739.jpg",
        locality: "Oshiwara",
        areaName: "Khairatabad",
        costForTwo: "₹150 for two",
        cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
        avgRating: 4.7,
        parentId: "466854",
        avgRatingString: "4.7",
        totalRatingsString: "150K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId:
                "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
              description: "Top-rated for Coffee & Tea, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Coffee & Tea, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹29",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/cafe-niloufer-classic-oshiwara-khairatabad-rest27739",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "6498",
        name: "Hotel Sandarshini",
        cloudinaryImageId: "9f5783b9975a73ec001560327065a01c",
        locality: "Masab Tank",
        areaName: "Masab Tank",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "South Indian", "Juices", "North Indian"],
        avgRating: 4.5,
        veg: true,
        parentId: "476",
        avgRatingString: "4.5",
        totalRatingsString: "106K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description:
                "Serves only 100% vegetarian food, with no non-veg items.",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Serves only 100% vegetarian food, with no non-veg items.",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "2.3K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/hotel-sandarshini-masab-tank-rest6498",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "662646",
        name: "Starbucks Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/4/f11bf9d3-2030-4587-9fff-b98b3af79c04_662646.JPG",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.4,
        parentId: "195515",
        avgRatingString: "4.4",
        totalRatingsString: "1.1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
              description: "Top-rated for Coffee & Tea, based on user votes.",
            },
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
              description: "Top-rated vegetarian cafes, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Coffee & Tea, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated vegetarian cafes, based on user votes.",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹169",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "376",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/starbucks-coffee-banjara-hills-rest662646",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "262087",
        name: "Imperial Multicuisine Restaurant",
        cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
        locality: "Banjara Hills",
        areaName: "Redhills",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
        avgRating: 4.2,
        parentId: "543714",
        avgRatingString: "4.2",
        totalRatingsString: "28K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹19",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "622362",
        name: "Labonel Fine Baking",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/13/1d41b9d8-71a8-4d0f-b94d-3cf5d8169daf_622362.jpg",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹1200 for two",
        cuisines: ["Desserts", "Bakery"],
        avgRating: 4.7,
        parentId: "370499",
        avgRatingString: "4.7",
        totalRatingsString: "812",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹499",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "1.0K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/labonel-fine-baking-banjara-hills-rest622362",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9296",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/193228fa-d5fe-4ba9-ab36-8f7d8c52e6b6_9296.jpg",
        locality: "Humayun Nagar",
        areaName: "Mehdipatnam",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.1,
        parentId: "2",
        avgRatingString: "4.1",
        totalRatingsString: "29K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 00:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/subway-humayun-nagar-mehdipatnam-rest9296",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23734",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/e8242dd7-1fc9-4d39-bdc4-44fc72fa7ed8_23734.JPG",
        locality: "Mehdipatnam",
        areaName: "Humayun Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "54K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 04:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
              description: "Top-rated for Burger, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
              description: "Top-rated for Corporate, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Top-rated for Burger, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Corporate, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹89",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/mcdonalds-mehdipatnam-humayun-nagar-rest23734",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "657474",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
        locality: "R5 Chambers",
        areaName: "Mehdipatnam",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.2,
        parentId: "166",
        avgRatingString: "4.2",
        totalRatingsString: "14K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
              description: "Top-rated for Burger, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Top-rated for Burger, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "74979",
        name: "Ohri's Cake Nation",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/7/93d7101e-0a6a-4212-9619-fb11551857a0_74979.jpg",
        locality: "Basheerbagh",
        areaName: "Basheerbagh",
        costForTwo: "₹450 for two",
        cuisines: ["Bakery", "Desserts", "Beverages"],
        avgRating: 4.4,
        veg: true,
        parentId: "233127",
        avgRatingString: "4.4",
        totalRatingsString: "5.7K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 00:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description:
                "Serves only 100% vegetarian food, with no non-veg items.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Serves only 100% vegetarian food, with no non-veg items.",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "8.6K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/ohris-cake-nation-basheerbagh-rest74979",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "263841",
        name: "Veg Meals By LunchBox",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/15/ba7ea1f7-3a65-4dc8-b583-9c60aebd1d0d_263841.JPG",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹200 for two",
        cuisines: [
          "Thalis",
          "North Indian",
          "Biryani",
          "South Indian",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "21938",
        avgRatingString: "4.3",
        totalRatingsString: "540",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description:
                "Serves only 100% vegetarian food, with no non-veg items.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Serves only 100% vegetarian food, with no non-veg items.",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/veg-meals-by-lunchbox-beside-little-flower-primary-school-abids-rest263841",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "639526",
        name: "Dum Safar Biryani",
        cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
        locality: "City Plaza",
        areaName: "ABIDS",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Hyderabadi", "Kebabs", "North Indian", "barbeque"],
        avgRating: 3.6,
        parentId: "351013",
        avgRatingString: "3.6",
        totalRatingsString: "669",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-city-plaza-abids-rest639526",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "34028",
        name: "Vellanki Foods",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/10/09466b9b-05de-4df7-8ecc-990096b35374_34028.jpg",
        locality: "Ameerpet 'X' Road",
        areaName: "Ameerpet",
        costForTwo: "₹600 for two",
        cuisines: ["Sweets", "Desserts"],
        avgRating: 4.7,
        parentId: "3768",
        avgRatingString: "4.7",
        totalRatingsString: "35K+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 7.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "7.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 21:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/vellanki-foods-x-road-ameerpet-rest34028",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "575164",
        name: "Veg Darbar by Behrouz Biryani",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/65f8dfaa-053d-4892-b21c-b41138c5d320_575164.JPG",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹700 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4,
        veg: true,
        parentId: "344904",
        avgRatingString: "4.0",
        totalRatingsString: "92",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description:
                "Serves only 100% vegetarian food, with no non-veg items.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Serves only 100% vegetarian food, with no non-veg items.",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/veg-darbar-by-behrouz-biryani-beside-little-flower-primary-school-abids-rest575164",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "853135",
        name: "Go Zero Ice Creams & Desserts",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/24/ab797910-dcd5-4cb0-9e69-23acb74f2ea2_853135.JPG",
        locality: "Nampally",
        areaName: "Abids",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
        avgRating: 4,
        veg: true,
        parentId: "343689",
        avgRatingString: "4.0",
        totalRatingsString: "495",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/go-zero-ice-creams-and-desserts-nampally-abids-rest853135",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "547809",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/d66c5683-2c07-46f4-a0e4-488965b4166e_547809.JPG",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "5.5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
              description: "Top-rated for Gourmet, based on user votes.",
            },
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Top-rated for Gourmet, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹35",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "322",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "566424",
        name: "Faasos Signature Wraps & Rolls",
        cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹350 for two",
        cuisines: [
          "Wraps",
          "rolls",
          "Fast Food",
          "Burger",
          "shawarma",
          "Rice Bowls",
        ],
        avgRating: 4.3,
        parentId: "340366",
        avgRatingString: "4.3",
        totalRatingsString: "151",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
              description: "Top-rated for Rolls, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Top-rated for Rolls, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/faasos-signature-wraps-and-rolls-beside-little-flower-primary-school-abids-rest566424",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "395279",
        name: "McDonald's Gourmet Burger Collection",
        cloudinaryImageId: "zqjiuzjclswtjkxrmvvn",
        locality: "Humayun Nagar",
        areaName: "Mehdipatnam",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        parentId: "10761",
        avgRatingString: "4.4",
        totalRatingsString: "774",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-05 04:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/mcdonalds-gourmet-burger-collection-humayun-nagar-mehdipatnam-rest395279",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "801390",
        name: "Makhani Darbar: Curries, Breads & Beyond",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/c39503e4-319d-4f40-b5f2-2ba1d0a3aa11_801390.JPG",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹500 for two",
        cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
        avgRating: 4.1,
        parentId: "478595",
        avgRatingString: "4.1",
        totalRatingsString: "78",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/makhani-darbar-curries-breads-and-beyond-beside-little-flower-primary-school-abids-rest801390",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "2535",
        name: "Agra Sweets Banjara",
        cloudinaryImageId: "ydsyhgg51xaxsrjbaxdv",
        locality: "Masab Tank",
        areaName: "Masab Tank",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Beverages"],
        avgRating: 4.5,
        veg: true,
        parentId: "34",
        avgRatingString: "4.5",
        totalRatingsString: "99K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-07-04 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "1.6K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-85cd08c7-2388-4f0e-9613-080199a1dadc",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-masab-tank-rest2535",
        type: "WEBLINK",
      },
    },
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
