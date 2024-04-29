import { useEffect, useState } from "react";

export const TextAnimation = () => {
  const [textToShow, setTextToShow] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = "oftware Developer";

    const interval = setInterval(() => {
      if (isAdding) {
        if (currentIndex <= text.length) {
          setTextToShow(text.slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (currentIndex > 0) {
          setTextToShow(text.slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsAdding(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isAdding, currentIndex]);

  return textToShow;
};

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
