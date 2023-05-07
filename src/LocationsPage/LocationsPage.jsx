import React from "react";

import Nav from "../Shared/Nav";
import LocationCards from "./LocationCards";
import Footer from "../Shared/Footer";


const LocaitonsPage = () => {
    return (
        <div className="mt-[96px] md:mt-[131px]">
            <Nav />
            <LocationCards />
            <Footer cta={true} />
        </div>
    )
}

export default LocaitonsPage