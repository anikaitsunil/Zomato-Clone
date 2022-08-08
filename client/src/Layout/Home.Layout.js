import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import FoodTab from "../Components/FoodTab";

//Components
import Navbar from "../Components/Navbar";

//redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { useEffect } from "react";

const HomeLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getRestaurant());
    },[])
    return <>
    <div className="container mx-auto lg:px-20">
        <Navbar />
        {props.children}
    </div>
    <FoodTab />
    </>
};

export default HomeLayout;