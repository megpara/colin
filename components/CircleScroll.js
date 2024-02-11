import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

export const CircleIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      {!isComplete && (
        <svg
          className="fixed bottom-[10px] left-[30px] w-[80px] h-[80px] z-10 title"
          viewBox="0 0 60 60"
        >
          <motion.path
            fill="#00000070"
            strokeWidth="2"
            stroke="#ffffff"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.text
            fill="white"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
          <text
            x="11"
            y="29"
            className="text-[10px] tracking-wide fill-white font-extrabold"
          >
            Scroll
          </text>
        </svg>
      )}
      {isComplete && (
        <button
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="fixed text-white text-xl hover:text-2xl duration-300 bottom-0 left-[50%] w-[40px] ml-[-20px] bottom-[40px] text-center"
        >
          ↑
        </button>
      )}
    </>
  );
};