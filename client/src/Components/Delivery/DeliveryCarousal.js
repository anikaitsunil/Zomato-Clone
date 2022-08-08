import React from "react";
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal =() => {
    return(
        <>
        <h1 className="text-xl font-semibold my-3">Eat What Makes You Happy!</h1>
        <div className="flex flex-wrap justify-between">
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
        </div>
        </>
    );
};

export default DeliveryCarousal