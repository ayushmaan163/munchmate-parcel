import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  RESTAURANT_TYPE_KEY,
} from "./config";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();

    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;

    setRestaurant(restaurantData);
  }

  return (
    <>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </>
  );
};

export default RestaurantMenu;
