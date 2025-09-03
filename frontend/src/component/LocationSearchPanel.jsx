import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = () => {
  {
    /* location array input for location */
  }

  const locations = [
    "334c alpha 1",
    "alpha 2",
    "alpha 3",
    "alpha 4",
    "near mishra house",
  ];
  return (
    <div>
      {/* this is just a sample data */}
      {locations.map(function (elem, idx) {
        return  <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl   items-center justify-start my-2 ">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-16 rounded-full">
              {" "}
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        
      })}
    </div>
  );
};

export default LocationSearchPanel;
