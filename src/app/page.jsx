"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Main from "../section/Main/Main";
import Works from "../section/Works/Works.jsx";
import Testimonials from "../section/Testimonials/Testimonials.jsx";
import About from "../section/About/About.jsx";
import FAQ from "../section/FAQ/FAQ.jsx";
import Contact from "../section/Contact/Contact.jsx";
import PopUp from "../section/PopUp/PopUp.jsx";
import { useVisitTracking } from "../hooks/useVisitTracking";

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  useVisitTracking()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div className="bg-white flex flex-col md:flex-row w-auto relative ">

      {/* <Header /> */}

      <div className="w-full max-w-[1920px] z-[5] md:z-[10] mx-auto">
        <Main setIsOpen={setIsOpen} />
        <Works />
        <Testimonials />
        <About setIsOpen={setIsOpen} />
        <FAQ />
        <Contact />
      </div>

      {/* PopUp */}
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
    </div>
  );
}

export default Page;
