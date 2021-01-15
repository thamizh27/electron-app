import React from "react";
import image from "../../img/spinner.gif";
function Spinner() {
  return (
    <div className="spinner">
      <img src={image} alt="Loading" />
    </div>
  );
}

export default Spinner;
