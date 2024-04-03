import React, { useState } from "react";

const Carousel = ({ filteredData }:any) => {
  const dataphoto = filteredData?.pictures || [];
  //   console.log(dataphoto);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % dataphoto.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? dataphoto.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carouselContainer">
      <img className="carouselImg" src={dataphoto[currentPhotoIndex]} alt="" />

      {dataphoto.length > 1 && (
        <>
          <button id="btnLeft" className="carouselBtnImg" onClick={prevPhoto}>
            <img src="/img/Vector.png" alt="" />
          </button>

          <button id="btnRight" className="carouselBtnImg" onClick={nextPhoto}>
            <img src="/img/Vector.png" alt="" />
          </button>
          <div className="indexNumber">{`${currentPhotoIndex + 1}/${
            dataphoto.length
          }`}</div>
        </>
      )}
    </div>
  );
};

export default Carousel;
