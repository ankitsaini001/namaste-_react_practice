import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../Utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_MENU + id);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);

    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const {
        name,
        cuisines,
        costForTwoMessage,
        totalRatingsString,
    } = resInfo.cards[2].card.card.info;

    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <p>
                {totalRatingsString} • {costForTwoMessage}
            </p>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <h2 className="menu-title">Recommanded</h2>
            <div className="menu-grid">
                {itemCards?.map((item, index) => {
                    const info = item.card.info;
                    return (
                        <div className="menu-card" key={index}>
                            <h4 className="item-name">{info.name}</h4>
                            <p className="item-price">₹{(info.price || info.defaultPrice || 0) / 100}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
