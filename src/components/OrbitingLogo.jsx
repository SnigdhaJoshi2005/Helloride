import React from 'react';
import logoo from "../assets/logoo.png";
import parcelBike from "../assets/parcelBike.png";
import bikewithPassenger from "../assets/bikewithPassenger.png";
import withcar from "../assets/withcar.png";
import Bike2 from "../assets/Bike2.png";

const OrbitingLogo = () => {
  return (
   <div className="orbiting-logo">

  {/* Center Logo */}
  <div className="orbiting-logo-center">
    <img src={logoo} alt="HR Logo" />
  </div>

  {/* First Orbit */}
  <div className="orbit-ring orbit-ring-outer animate-spin-very-slow">

    <div className="orbit-item orbit-item-top">
      <div className="animate-unspin-very-slow">
        <img src={parcelBike} alt="" />
      </div>
    </div>

    <div className="orbit-item orbit-item-right">
      <div className="animate-unspin-very-slow">
        <img src={withcar} alt="" />
      </div>
    </div>

    <div className="orbit-item orbit-item-bottom">
      <div className="animate-unspin-very-slow">
        <img src={bikewithPassenger} alt="" />
      </div>
    </div>

    <div className="orbit-item orbit-item-left">
      <div className="animate-unspin-very-slow">
        <img src={Bike2} alt="" />
      </div>
    </div>
  </div>

  {/* Second Orbit */}
  <div className="orbit-ring orbit-ring-inner animate-spin-reverse ">

    <div className="orbit-item orbit-item-top">
      <div className="animate-unspin-slow">
        <img src={Bike2} alt="" />
      </div>
    </div>

    <div className="orbit-item orbit-item-bottom">
      <div className="animate-unspin-slow">
        <img src={parcelBike} alt="" />
      </div>
    </div>

  </div>

</div>
  );
};

export default OrbitingLogo;
