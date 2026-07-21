"use client";

import { motion } from "framer-motion";

export default function WorksCardMotion({ children, className }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
