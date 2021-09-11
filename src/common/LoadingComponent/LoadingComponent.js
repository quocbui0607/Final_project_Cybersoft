import React from "react";
import "./LoadingComponent.css";

export default function LoadingComponent() {
  return <div className='w-100 h-100 d-flex justify-content-center position-absolute align-items-center loading-container'>
    <div className="loader"></div>
  </div>;
}
