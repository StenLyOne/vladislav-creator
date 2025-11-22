import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../components/Button/Button";
import video from "../../assets/video/video.mp4";

const About = ({ setIsOpen }) => {
  const sectionRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [hobbies, setHobbies] = useState(1);
  const images = {
    1: "src/assets/img/Sketching.png",
    2: "src/assets/img/Travel.png",
    3: "src/assets/img/Chess.png",
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight); // 📌 Для телефонов

    // Запускаем обновление высоты сразу после монтирования
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile ? ["start end", "end start"] : ["start end", "end end"],
  });

  const yTransformH2 = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.4] : [0, 0.3],

    isMobile ? ["50vw", "-100vw"] : ["50vw", "-100vw"]
  );

  const yTransformPc = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.4] : [0, 0.2],
    isMobile ? ["50vw", "-100vw"] : ["50vw", "-40vw"]
  );
  const xTransformPc = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["0vw", "-100vw"]
  );

  const xTransform = useTransform(scrollYProgress, [0, 1], ["50%", "-85%"]);

  const xTransformVladImg = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ["70vw", "0vw"]
  );

  const opacityVladImg = useTransform(
    scrollYProgress,
    isMobile ? [0.17, 0.21] : [0.3, 0.4],
    [0, 1]
  );

  const opacityVladImg2 = useTransform(
    scrollYProgress,
    isMobile ? [0.18, 0.22] : [0.3, 0.4],
    [0, 1]
  );

  const opacityIndicators1 = useTransform(
    scrollYProgress,
    isMobile ? [0.31, 0.35] : [0.43, 0.47],
    [0, 1]
  );
  const opacityIndicators2 = useTransform(
    scrollYProgress,
    isMobile ? [0.32, 0.36] : [0.44, 0.48],
    [0, 1]
  );
  const opacityIndicators3 = useTransform(
    scrollYProgress,
    isMobile ? [0.33, 0.37] : [0.45, 0.49],
    [0, 1]
  );
  const opacityIndicators4 = useTransform(
    scrollYProgress,
    isMobile ? [0.34, 0.38] : [0.46, 0.5],
    [0, 1]
  );

  const opacityBlock1 = useTransform(
    scrollYProgress,
    isMobile ? [0.41, 0.45] : [0.55, 0.6],
    [0, 1]
  );

  const xTransformBlock1 = useTransform(
    scrollYProgress,
    isMobile ? [0.42, 0.46] : [0.52, 0.57],
    ["100vw", "0vw"]
  );
  const xTransformBlock2 = useTransform(
    scrollYProgress,
    isMobile ? [0.43, 0.47] : [0.53, 0.58],
    ["100vw", "0vw"]
  );
  const xTransformBlock3 = useTransform(
    scrollYProgress,
    isMobile ? [0.44, 0.48] : [0.54, 0.59],
    ["100vw", "0vw"]
  );

  const colorBlock1 = useTransform(
    scrollYProgress,
    isMobile ? [0.44, 0.48] : [0.56, 0.59], // Большее расстояние
    ["#7988A3", "#1E2EB8"]
  );
  const colorBlock2 = useTransform(
    scrollYProgress,
    isMobile ? [0.46, 0.49] : [0.57, 0.6], // Плавнее изменение
    ["#7988A3", "#1E2EB8"]
  );
  const colorBlock3 = useTransform(
    scrollYProgress,
    isMobile ? [0.48, 0.5] : [0.58, 0.61], // Ещё плавнее
    ["#7988A3", "#1E2EB8"]
  );

  const opacityHobbisImg = useTransform(
    scrollYProgress,
    isMobile ? [0.54, 0.59] : [0.65, 0.71],
    ["0", "1"]
  );
  const xTransformHobbisBlock1 = useTransform(
    scrollYProgress,
    isMobile ? [0.55, 0.6] : [0.65, 0.69],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformHobbisBlock2 = useTransform(
    scrollYProgress,
    isMobile ? [0.56, 0.61] : [0.66, 0.7],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformHobbisBlock3 = useTransform(
    scrollYProgress,
    isMobile ? [0.58, 0.62] : [0.67, 0.71],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformHobbisBlock4 = useTransform(
    scrollYProgress,
    isMobile ? [0.59, 0.63] : [0.68, 0.72],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );

  const xOpacityBlockH3 = useTransform(
    scrollYProgress,
    isMobile ? [0.64, 0.68] : [0.8, 0.85],
    ["0", "1"]
  );

  const xTransformBlock4 = useTransform(
    scrollYProgress,
    isMobile ? [0.65, 0.69] : [0.78, 0.82],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformBlock5 = useTransform(
    scrollYProgress,
    isMobile ? [0.66, 0.7] : [0.79, 0.83],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformBlock6 = useTransform(
    scrollYProgress,
    isMobile ? [0.67, 0.71] : [0.8, 0.84],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );
  const xTransformBlock7 = useTransform(
    scrollYProgress,
    isMobile ? [0.68, 0.72] : [0.81, 0.85],
    isMobile ? ["100vw", "0vw"] : ["50vw", "0vw"]
  );

  const opacityBlock4 = useTransform(
    scrollYProgress,
    isMobile ? [0.67, 0.71] : [0.8, 0.84],
    [0, 1]
  );
  const opacityBlock5 = useTransform(
    scrollYProgress,
    isMobile ? [0.68, 0.72] : [0.81, 0.85],
    [0, 1]
  );
  const opacityBlock6 = useTransform(
    scrollYProgress,
    isMobile ? [0.69, 0.73] : [0.82, 0.86],
    [0, 1]
  );
  const opacityBlock7 = useTransform(
    scrollYProgress,
    isMobile ? [0.7, 0.74] : [0.83, 0.87],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className={`relative w-full rounded-[10px] ${
        isMobile ? "min-h-[300vh]" : "min-h-[1000vh]"
      }`}
      id="about"
    >
      <div className="md:sticky top-0 md:h-[100vh] w-auto overflow-hidden ">
        <motion.div
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center flex-col space-y-[30px]"
          style={{ y: yTransformH2 }}
        >
          <h2 className="uppercase text-center whitespace-nowrap">
            start to <br />
            work now
          </h2>
          <div onClick={() => setIsOpen(true)}>
            <Button>Contact us</Button>
          </div>
        </motion.div>
        <motion.div
          className="md:absolute h-[200%] md:h-auto w-full mt-[100px] md:mt-[0px] md:top-[120%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[10]"
          style={
            isMobile
              ? { y: yTransformPc }
              : { y: yTransformPc, x: xTransformPc }
          }
        >
          <img src="src\assets\img\pc.png" alt="" />
        </motion.div>
        <motion.div
          className="relative md:px-[0px] flex flex-col md:flex-row inline-flex h-[150%] md:h-full justify-start items-start md:items-center bg-bg min-w-full z-[11]"
          style={isMobile ? "" : { x: xTransform }}
        >
          <div className="relative w-[100vw] h-full px-[16px] md:pt-[0px] pt-[40px] md:px-[0px] flex flex-col md:flex-row justify-end items-center z-10">
            <motion.div
              className="text-center md:translate-x-1/5 space-y-[15px] z-[1]"
              style={{ opacity: opacityVladImg }}
            >
              <p className="color-blue">Hi there!</p>
              {!isMobile ? (
                <h2 className="uppercase">
                  I&apos;m Vladislav, and <br />
                  here&apos;s my story
                </h2>
              ) : (
                <h3 className="uppercase">
                  I&apos;m Vladislav, and <br />
                  here&apos;s my story
                </h3>
              )}
            </motion.div>
            <motion.div
              className="py-[20px] md:w-[40vw] w-full h-[530px] md:h-full flex justify-center"
              style={
                isMobile
                  ? { opacity: opacityVladImg2 }
                  : { x: xTransformVladImg }
              }
            >
              {/* <img
                className="w-full h-full object-cover rounded-[10px]"
                src="src/assets/img/i2.png"
                alt=""
              /> */}
              <div className="w-full h-full object-cover rounded-[10px]">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[10px]"
                ></video>
              </div>
            </motion.div>
          </div>
          <div className="space-y-[40px] md:space-y-[80px] px-[16px] my-[100px] md:my-[0px] md:mx-[400px] ">
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators1 }}
            >
              <h2>5+</h2>
              <p>Years in web design & development</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators2 }}
            >
              <h2>100+</h2>
              <p>Projects successfully delivered</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators3 }}
            >
              <h2>10+</h2>
              <p>Industries covered</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators4 }}
            >
              <h2>$500K+</h2>
              <p>Revenue generated for clients</p>
            </motion.div>
          </div>
          <div
            className="flex flex-col justify-center items-start px-[16px] md:px-[0px] md:items-center z-0 w-[100vw]"
            // style={{ x: xTransformBlock2 }}
          >
            <div className="text-start space-y-[40px] md:space-y-[60px]">
              <motion.div
                className="space-y-[14px]"
                style={{ opacity: opacityBlock1 }}
              >
                <h3 className="uppercase color-black">Me + My Process</h3>
                <p>
                  I work independently, but every project is built on a solid
                  foundation of
                  <br className="hidden min-[380px]:block" />
                  strategy, design, and technology to create impactful
                  solutions.
                </p>
              </motion.div>
              <div className="space-y-[20px]">
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock1, color: colorBlock1 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock1 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">01</p>
                    <p className="">
                      I craft digital experiences that are visually striking and
                      highly functional.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock2, color: colorBlock2 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock2 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">02</p>
                    <p className="">
                      Every project is built with a deep focus on user
                      experience and business goals.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock3, color: colorBlock3 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock3 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">03</p>
                    <p className="">
                      I design, develop, and refine websites that don’t just
                      look good – they work.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center px-[16px] my-[120px] md:my-[0px] md:px-[0px] items-start md:items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock3 }}
          >
            <div className="space-y-[30px]">
              <div className="w-full md:w-[430px] h-[460px] md:h-[480px] ">
                <motion.img
                  key={hobbies}
                  className="w-[430px] w-full max-h-[480px] h-full object-cover"
                  src={images[hobbies]}
                  alt=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ opacity: opacityHobbisImg }}
                />
              </div>
              <div className="space-y-[10px]">
                <motion.div
                  className="relative"
                  style={{ x: xTransformHobbisBlock1 }}
                >
                  <h3 className="uppercase ">Me + hobbies</h3>
                  <p className="color-blue absolute right-[0%] md:right-[7%] top-[-50%] md:top-[0px] font-12 right-[0%]">
                    (Hover over the bullets)
                  </p>
                </motion.div>
                <div className="space-y-[5px]">
                  <motion.div
                    className="flex items-start gap-[8px] cursor-pointer"
                    style={{ x: xTransformHobbisBlock2 }}
                  >
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(1)}
                    >
                      Street art & sketching
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-[8px] cursor-pointer"
                    style={{ x: xTransformHobbisBlock3 }}
                  >
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(3)}
                    >
                      Chess & strategy games
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-[8px] cursor-pointer"
                    style={{ x: xTransformHobbisBlock4 }}
                  >
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(2)}
                    >
                      Traveling & finding inspiration
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center px-[16px] md:px-[0px] items-start md:items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock4 }}
          >
            <div className="space-y-[30px]">
              <div className="space-y-[50px]">
                <div className="relative">
                  <motion.h3
                    className="uppercase"
                    style={{ opacity: xOpacityBlockH3 }}
                  >
                    Me + my principles
                  </motion.h3>
                </div>
                <div className="block md:flex space-x-[80px] space-y-[20px] md:space-y-[0px]">
                  <div className="space-y-[20px] md:space-y-[40px]">
                    <motion.div
                      className="space-y-[10px] max-w-[280px]"
                      style={{ x: xTransformBlock4, opacity: opacityBlock4 }}
                    >
                      <h4 className="color-blue">01. User-First Design</h4>
                      <p className="color-grey">
                        Every project starts with the user in mind, creating
                        smooth and intuitive experiences.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] max-w-[280px]"
                      style={{ x: xTransformBlock5, opacity: opacityBlock5 }}
                    >
                      <h4 className="color-blue">
                        02. Business-Driven Approach
                      </h4>
                      <p className="color-grey">
                        Design that aligns with business goals, ensuring impact
                        and measurable success.
                      </p>
                    </motion.div>
                  </div>
                  <div className="space-y-[20px] md:space-y-[40px]">
                    <motion.div
                      className="space-y-[10px] max-w-[280px]"
                      style={{ x: xTransformBlock6, opacity: opacityBlock6 }}
                    >
                      <h4 className="color-blue">
                        03. Aesthetics & Functionality
                      </h4>
                      <p className="color-grey">
                        Striking visuals meet usability to create seamless and
                        engaging digital products.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] max-w-[280px]"
                      style={{ x: xTransformBlock7, opacity: opacityBlock7 }}
                    >
                      <h4 className="color-blue">04. Growth & Scalability</h4>
                      <p className="color-grey">
                        Websites designed to evolve, adapt, and scale as your
                        business expands.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center py-[120px] md:py-[0px] z-[0] w-[100vw]"
            // style={{ x: xTransformBlock5 }}
          >
            <div className="space-y-[10px]">
              <div className="w-[270px] max-h-[360px] h-full">
                <img
                  className="w-[270px] w-full max-h-[360px] h-full object-cover"
                  src="src/assets/img/i2.png"
                  alt=""
                />
              </div>
              <div className="">
                <p>
                  Available for select projects on{" "}
                  <a
                    className="color-green underline"
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~01e0b5eb4d34696c94"
                  >
                    Upwork.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
