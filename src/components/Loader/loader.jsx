import React from "react";
import "./spinner.css";
import { Puff, ThreeCircles } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <ThreeCircles
        height="80"
        width="80"
        radius={1}
        color="white"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
