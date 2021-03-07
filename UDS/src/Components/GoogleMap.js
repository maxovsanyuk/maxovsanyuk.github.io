import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "235px",
        flex: 1,
        minWidth: "300px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQAxwZrSzKnN6VV40oIWWN_1KbSxiZpxE" }}
        defaultCenter={{
          lat: 50.406685700000004,
          lng: 30.508363799999998,
        }}
        defaultZoom={11}
      >
        <img
          src={require("../images/marker.png")}
          alt="marker"
          width={40}
          height={40}
          lat={50.406685700000004}
          lng={30.508363799999998}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
