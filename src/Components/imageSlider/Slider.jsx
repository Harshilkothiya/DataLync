import React, { useState, useEffect } from "react";
import "./Slider.css";
import image1 from "../../assets/one.png";
import image2 from "../../assets/two.jpeg";
import image3 from "../../assets/three.png";
import image4 from "../../assets/four.jpg";
import image5 from "../../assets/five.png";
import image6 from "../../assets/six.jpg";
import image7 from "../../assets/seven.png";
import image8 from "../../assets/eight.png";
import image9 from "../../assets/nine.jpeg";
import image10 from "../../assets/ten.png";
import image11 from "../../assets/elevan.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

function Slider() {
  const [Startindex, setStartindex] = useState(0);

  const nextslide = () => {
    setStartindex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextslide, 3000); // Change slide every 3 seconds
     return () => clearInterval(interval);
  }, []);

  const visible = [];
  for (let i = 0; i < 6; i++) {
    const index = (Startindex + i) % images.length;
    visible.push(images[index]);
  }

  return (
    <>
      <div className="slidercontainer">
        <div className="trak"
        >
          {visible.map((image, index) => (
            <div key={index} className="item">  
              <img src={image} alt={`image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
