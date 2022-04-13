import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    zindex: 10,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    zindex: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="flex z-10 items-center mb-20 py-2 pr-4 pl-3 text-blue-700 border-b 
      md:items-center md:py-0 md:my-0 border-gray-100 overflow-auto
      hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 
      md:border-0 md:p-0 
      dark:text-white
      dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700
      md:dark:hover:bg-transparent md:dark:hover:text-white "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={`/${item}`} className="w-[200px] h-[20px] flex-1">
        <a href={`#${item}`}>{item}</a>
      </Link>

      {/* <div className={styles.icon_placeholder} style={style} />
      <div className={styles.text_placeholder} style={style} /> */}
    </motion.li>
  );
};
