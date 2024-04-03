import React from "react";

const StarScale = ({ rating }:any) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="starsContainer">
      {range.map((rangeElem, index) => (
        <img
          key={index}
          src={
            rating >= rangeElem
              ? "/img/star-active.png"
              : "/img/star-inactive.png"
          }
          alt={`Star ${rangeElem}`}
        />
      ))}
    </div>
  );
};

export default StarScale;
