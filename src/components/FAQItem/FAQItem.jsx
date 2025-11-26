import { motion } from "framer-motion";
import arrowIcon from "/assets/img/arrow2.svg";
import { useState, useEffect } from "react";

const FAQItem = ({ id, question, answer, isOpen, setOpen }) => {
  const toggleFAQ = () => {
    setOpen(isOpen === id ? null : id);
  };
  const [activ, setActiv] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full justify-between py-[20px] items-center"
      onClick={toggleFAQ}
      onMouseEnter={() => setActiv(id)}
      onMouseLeave={() => setActiv(null)}
    >
      <div>
        <div className="flex w-full justify-between w-full items-center">
          {!isMobile ? (
            <div>
              <p className="color-black">0{id}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between w-full">
            <h4 className="ml-[0px] md:ml-[120px] w-[80%]">{question}</h4>
            <button className="relative w-[26px] h-[26px] rounded-full flex items-start justify-center overflow-hidden">
              <motion.span
                className={`relative transform transition-all duration-300 ${isOpen === id
                    ? "top-[-100%]" // Если вопрос открыт, кнопка остается активной
                    : activ === id && !isMobile
                      ? "top-[-100%]" // Если навели мышку, тоже активная
                      : "top-[0%]" // В остальных случаях - стандартное положение
                  }`}
              >
                <span className="w-[26px] h-[26px] bg-stroke flex rounded-full items-center justify-center">
                  <img src={arrowIcon} alt="" className="rotate-180" />
                </span>
                <span className="w-[26px] h-[26px] bg-blue flex rounded-full items-center justify-center">
                  <img
                    src={arrowIcon}
                    alt=""
                    className={`transform transition-all ${isOpen === id ? "rotate-0" : "rotate-180"
                      }`}
                  />
                </span>
              </motion.span>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="overflow-hidden md:ml-[0px] md:ml-[133.5px] max-w-[85%] md:max-w-[75%]"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen === id ? "auto" : 0,
          opacity: isOpen === id ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="color-grey mt-[14px]">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQItem;
