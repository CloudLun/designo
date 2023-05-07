import React, { useState } from "react";

import LocationsCard from "./LocationsCard";

import canadaMap_tablet from "../assets/locations/tablet/image-map-canada.png";
import canadaMap_desktop from "../assets/locations/desktop/image-map-canada.png";
import australiaMap_tablet from "../assets/locations/tablet/image-map-australia.png";
import australiaMap_desktop from "../assets/locations/desktop/image-map-australia.png";
import unitedkingdomMap_tablet from "../assets/locations/tablet/image-map-uk.png";
import unitedkingdomMap_desktop from "../assets/locations/desktop/image-map-united-kingdom.png";

const data = [
  {
    img_desktop:canadaMap_desktop,
    img_tablet:canadaMap_tablet,
    country: "Canada",
    side:'right',
    office: "Designo Central Office",
    address: "3886 Wellington Street",
    addressTwo: "Toronto, Ontario M9C 3J5",
    phone: "P : +1 253-863-8967",
    mail: "M : contact@designo.co",
  },
  {
    img_desktop:australiaMap_desktop,
    img_tablet:australiaMap_tablet,
    country: "Australia",
    side:"left",
    office: "Designo AU Office",
    address: "19 Balonne Street",
    addressTwo: "New South Wales 2443",
    phone: "P : (02) 6720 9092",
    mail: "M : contact@designo.au",
  },
  {
    img_desktop:unitedkingdomMap_desktop,
    img_tablet:unitedkingdomMap_tablet,
    country: "United Kingdom",
    side: "right",
    office: "Designo UK Office",
    address: "13  Colorado Way",
    addressTwo: "Rhyd-y-fro SA8 9GA",
    phone: "P : 078 3115 1400",
    mail: "M : contact@designo.uk",
  },
];

const LocationCards = () => {
  return (
    <div className="md:flex md:flex-col md:gap-[120px] lg:gap-[32px]">
      {data.map((d, i) => {
        return (
            <LocationsCard
            key={i}
            country={d.country}
            side ={d.side}
            office={d.office}
            address={d.address}
            addressTwo={d.addressTwo}
            phone={d.phone}
            mail={d.mail}
            img_desktop={d.img_desktop}
            img_tablet={d.img_tablet}
          />
        )

      })}
    </div>
  );
};

export default LocationCards;
