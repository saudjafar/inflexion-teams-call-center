import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

// Import your images
import image1 from '../../assets/imgs/hero-slider1.png';
import image2 from '../../assets/imgs/hero-slider2.png';
import image3 from '../../assets/imgs/hero-slider3.png';
import image4 from '../../assets/imgs/hero-slider4.png';
import image5 from '../../assets/imgs/hero-slider5.png';

const IMAGES = [image1, image2, image3, image4, image5];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const HeroSlider = () => {
  const [cards, setCards] = React.useState(IMAGES);
  const [isDragging, setIsDragging] = React.useState(false);
  const intervalRef = useRef(null);

  const moveToEnd = (from) => {
    setCards((prevCards) => move(prevCards, from, prevCards.length - 1));
  };

  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        moveToEnd(0);
      }
    }, 2500); // Rotate every 2500ms
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate(); // Clean up interval on unmount
  }, [isDragging]);

  const handleDragEnd = (index, info) => {
    if (info.offset.x > 150 || info.offset.x < -150) {
      moveToEnd(index);
    }
    setIsDragging(false);
    startAutoRotate(); // Resume auto-rotate after drag ends
  };

  const handleDragStart = () => {
    stopAutoRotate();
    setIsDragging(true);
  };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((image, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={image}
              style={{
                ...cardStyle,
                cursor: canDrag ? "grab" : "auto",
                background: `url(${image})`,
                objectFit: 'cover'
              }}
              animate={{
                left: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
                transition: {
                  left: { duration: 0.75, ease: "easeInOut" },
                  scale: { duration: 0.75, ease: "easeInOut" },
                }
              }}
              drag={canDrag ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={(event, info) => handleDragEnd(index, info)}
            >
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // height: "100vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "28rem",
  height: "42rem"
};

const cardStyle = {
  position: "absolute",
  width: "28rem",
  height: "42rem",
  borderRadius: "2rem",
  transformOrigin: "center right",
  listStyle: "none",
  overflow: "hidden" // Ensure the img fits within the card's rounded corners
};



export default HeroSlider;
