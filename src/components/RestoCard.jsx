import { CDN_URL } from "../Utils/constants";
// Restaurant Card
// props is an object
//{resName, cuisins,rating,delivery} => Passing props this way is a destructuring on a fly
//const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestoCard = ({ resName }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resName?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-content">
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div className="rating-time">
          <span>{avgRating} ⭐</span> • <span>{sla.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestoCard;