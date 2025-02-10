import React from "react";
import demoVideo from "../images/demo.mp4"; // Rename to avoid conflicts

const LiveDemo = () => {
  return (
    <>
    <h1 className="text-center text-muted mt-3" style={{fontFamily:"initial"}}>LiveDemo</h1>
    <div className="d-flex justify-content-center align-items-center vh-600">
     
      <video
        className="rounded img-fluid"
        style={{ width: "350px", height: "350px" }}
        src={demoVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
    </>
  );
};

export default LiveDemo;
