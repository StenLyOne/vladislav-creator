"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PopUp from "../../section/PopUp/PopUp";

const PopupContext = createContext(null);

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <PopupContext.Provider value={setIsOpen}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-full h-screen inset-0 bg-[rgba(255,255,255,1)] md:bg-[rgba(0,0,0,0.75)] z-[10] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PopUp close={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const setIsOpen = useContext(PopupContext);
  if (!setIsOpen) throw new Error("usePopup must be used inside PopupProvider");

  return {
    openPopup: () => setIsOpen(true),
    closePopup: () => setIsOpen(false),
  };
}
