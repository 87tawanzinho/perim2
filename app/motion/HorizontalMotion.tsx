"use client";
import React, { Children } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function HorizontalMotion({
  classname,
  children,
}: {
  classname: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`container ${classname}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default HorizontalMotion;
