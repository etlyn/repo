import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IAnimatedText {
  text: string;
  textStyle?: Record<string, string | boolean | number>;
  containerStyle?: any;
  textClassName?: string;
  containerClassName?: string;
}

export const AnimatedText = ({
  text,
  textStyle,
  containerStyle,
  textClassName,
  containerClassName,
}: IAnimatedText) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 300,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={containerStyle}
      className={containerClassName}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={textStyle}
          className={textClassName}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
