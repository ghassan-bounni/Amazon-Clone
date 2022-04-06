import { images } from "../src/images";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  //a function to auto change the image every 3 seconds
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);
  });

  return (
    <>
      <img
        className="carousel"
        src={images[currentImage].image}
        alt="carousel_image"
      />
    </>
  );
};

export default Carousel;
