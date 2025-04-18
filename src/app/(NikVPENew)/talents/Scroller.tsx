"use client";
import { motion, useAnimate, useMotionValue } from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

type Props = {};

export default function Scroller({}: Props) {
  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    const target = -bounds.width;
    const amount = 5;
    animate(x, [0, target], {
      duration: amount * 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });
    console.log(bounds);
  }, [animate, x, bounds]);

  return (
    <motion.div className="scroller" ref={scope} style={{ x: x }}>
      <div className="scroll" ref={ref}>
        s<div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
      </div>
      <div className="scroll">
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
      </div>
      <div className="scroll">
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
        <div className="media"></div>
      </div>
    </motion.div>
  );
}
