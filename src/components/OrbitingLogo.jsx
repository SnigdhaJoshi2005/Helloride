import React from 'react';
import logoo from "../assets/logoo.png";
import parcelBike from "../assets/parcelBike.png";
import bikewithPassenger from "../assets/bikewithPassenger.png";
import withcar from "../assets/withcar.png";
import Bike2 from "../assets/Bike2.png";

const OrbitingLogo = () => {
  return (
    <div className="orbiting-logo">
      <div className="orbiting-logo-center">
        <img src={logoo} alt="HR Logo" />
      </div>

      <div className="orbit-ring orbit-ring-outer animate-spin-very-slow w-100%">
        <div className="orbit-item orbit-item-top">
          <div className="animate-unspin-very-slow">
            <img src={parcelBike} alt="Bike" />
          </div>
        </div>

        <div className="orbit-item orbit-item-right">
          <div className="animate-unspin-very-slow">
            <img src={withcar} alt="Bike" />
          </div>
        </div>

        <div className="orbit-item orbit-item-bottom">
          <div className="animate-unspin-very-slow">
            <img src={bikewithPassenger} alt="Bike" />
          </div>
        </div>

        <div className="orbit-item orbit-item-left">
          <div className="animate-unspin-very-slow">
            <img src={Bike2} alt="Bike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitingLogo;
