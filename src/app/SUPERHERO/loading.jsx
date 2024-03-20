import React from "react";

export default function loading() {
  return (
    <div>
      <div className="position-fixed top-0 end-0 bottom-0 start-0 bg-black d-flex justify-content-center align-items-center ">
        <span className="loader "></span>
      </div>
    </div>
  );
}
