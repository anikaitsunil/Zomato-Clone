import React from "react";
import { useParams } from "react-router";
import Delivery from "./Delivery";

const Master = () => {
    const { type } = useParams();

    return (<>
    <div className="m-4">
    {type==="delivery" && <Delivery />}
    </div>
    </>);
};

export default Master;