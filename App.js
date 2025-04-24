import React from "react";
import ReactDOM from "react-dom/client";

// Header Section Container
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="App Logo"
        />
      </div>
      <div className="header-menu">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
// props is an object
//{resName, cuisins,rating,delivery} => Passing props this way is a destructuring on a fly
const RestoCard = (props) => {
  const {resName} = props;
  
  return (
    <div className="res-card">
        <img
        className="res-logo"
        alt="res-logo" 
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resName.info.cloudinaryImageId}`} />
      <h3>{resName.info.name}</h3>
      <p>{resName.info.cuisines.join(", ")}</p>
      <p>{resName.info.avgRating} stars</p>
      <p>{resName.info.sla.slaString}</p>
    </div>
  );
};

const resList = [{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "21001",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/b6e612e2-c1e1-4673-bed7-6b542e8cf095_21001.jpg",
    "locality": "F.C. Road",
    "areaName": "Shivajinagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas",
      "Burger"
    ],
    "avgRating": 4.2,
    "parentId": "721",
    "avgRatingString": "4.2",
    "totalRatingsString": "12K+",
    "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 2.1,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "2.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-04-24 02:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "4.8K+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-0f9c5046-c549-4464-af0b-bbdd271a3bf3"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/pune/pizza-hut-f-c-road-shivajinagar-rest21001",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "506982",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/3691ba43-0620-449e-8608-515bcbe69622_506982.jpg",
    "locality": "Narayan Peth",
    "areaName": "Shaniwar Peth",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "630",
    "avgRatingString": "4.6",
    "totalRatingsString": "2.3K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-04-24 00:45:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "bolt/bolt%206.png",
          "description": "bolt!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "bolt!",
                "imageId": "bolt/bolt%206.png"
              }
            },
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹199"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-0f9c5046-c549-4464-af0b-bbdd271a3bf3"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/pune/mcdonalds-narayan-peth-shaniwar-peth-rest506982",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "691729",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Fortaleza",
    "areaName": "Kalyani Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "61955",
    "avgRatingString": "4.2",
    "totalRatingsString": "2.2K+",
    "sla": {
      "deliveryTime": 65,
      "lastMileTravel": 8.2,
      "serviceability": "SERVICEABLE",
      "slaString": "65-70 mins",
      "lastMileTravelString": "8.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-04-24 00:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹129"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-0f9c5046-c549-4464-af0b-bbdd271a3bf3"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/pune/chinese-wok-fortaleza-kalyani-nagar-rest691729",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "935435",
      "name": "Burger Singh(Big Punjabi Burgers)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/65e14d32-3bbe-4920-b404-ea40849f9eee_935435 (1).jpg",
      "locality": "Baner",
      "areaName": "Baner",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Burgers"
      ],
      "avgRating": 4.3,
      "parentId": "375065",
      "avgRatingString": "4.3",
      "totalRatingsString": "695",
      "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-04-24 03:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹47"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-42dfcf51-58a8-4310-8623-b4850d9ab805"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/pune/burger-singh-big-punjabi-burgers-baner-rest935435",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "769017",
      "name": "Huber And Holly",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d5fc91af-7f58-43b3-824c-669908fc96ee_769017.jpg",
      "locality": "Kothrud",
      "areaName": "Law College Road",
      "costForTwo": "₹500 for two",
      "cuisines": [
          "Ice Cream",
          "pizza",
          "dessert",
          "Cakes"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "6433",
      "avgRatingString": "4.8",
      "totalRatingsString": "307",
      "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-04-24 00:50:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "newg.png",
                  "description": "Gourmet"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹200 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-42dfcf51-58a8-4310-8623-b4850d9ab805"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/pune/huber-and-holly-kothrud-law-college-road-rest769017",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "5624",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/9dfcdbda-20e7-4e4a-9755-573b500fc81f_5624.JPG",
      "locality": "F.C. Road",
      "areaName": "Prabhat Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "19K+",
      "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-04-24 04:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "1.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-42dfcf51-58a8-4310-8623-b4850d9ab805"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/pune/subway-f-c-road-prabhat-road-rest5624",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "42581",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/bf37a4b1-5c01-46f4-8043-f8cc87a733ab_42581.jpg",
      "locality": "The Pavillion Mall",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "Burgers",
          "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "13K+",
      "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-04-24 02:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Burger.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-42dfcf51-58a8-4310-8623-b4850d9ab805"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "62231",
      "name": "Vrudheshwar Pure Veg",
      "cloudinaryImageId": "ukz2vhhwniawkccgddn0",
      "locality": "Shivaji Nagar",
      "areaName": "Shivaji Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "North Indian",
          "Chinese",
          "Beverages",
          "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "224593",
      "avgRatingString": "4.3",
      "totalRatingsString": "2.2K+",
      "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-04-24 03:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "4.4",
              "ratingCount": "134"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-42dfcf51-58a8-4310-8623-b4850d9ab805"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/pune/vrudheshwar-pure-veg-shivaji-nagar-rest62231",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},]
// Body Section
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestoCard resName={resList[0]}/>
        <RestoCard resName={resList[1]}/>
        <RestoCard resName={resList[2]}/>
        <RestoCard resName={resList[3]}/>
        <RestoCard resName={resList[4]}/>
        <RestoCard resName={resList[5]}/>
        <RestoCard resName={resList[6]}/>
        <RestoCard resName={resList[7]}/>
      </div>
    </div>
  );
};

// App Container
const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body /> 
      </div>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);