import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

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
      <div className="flex flex-col mx-8 my-4">
        <AnimatedText text="Etlyn is comming soon!" />
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-around"
          animate={{ x, rotate }}
          transition={{ type: "spring" }}
        >
          <div className="w-4 h-4 rounded-full bg-white my-[0.5px]"></div>
          <div className="w-4 h-4 rounded-full bg-white my-[0.5px]"></div>
        </motion.div>
      </div>
    </>
  );
};
