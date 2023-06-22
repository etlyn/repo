import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(!isAnimating);
      if (x < 200) {
        setX(x + 30);
        setRotate(rotate + 20);
      } else {
        setX(-200);
        setRotate(rotate + 0);
      }
      console.log(x);
    }, 1000);
  }, [x]);

  return (
    <>
      <div className="flex mx-8 my-4">
        <motion.div
          className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-around"
          animate={{ x, rotate }}
          transition={{ type: "spring" }}
        >
          <div className="w-6 h-6 rounded-full bg-white my-1"></div>
          <div className="w-6 h-6 rounded-full bg-white my-1"></div>
        </motion.div>
      </div>
    </>
  );
};
