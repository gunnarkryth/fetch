import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = import.meta.glob("../../public/images/*");
      const imagePaths = [];

      for (const path in images) {
        const module = await images[path]();
        imagePaths.push(module.default);
      }
      setImageArray(imagePaths);
    };
    loadImages();
  }, []);

  return (
    <section>
      {imageArray.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} />
      ))}
    </section>
  );
};

export default ImageGallery;
