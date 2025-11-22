import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AudioVisualizer from "../../components/AudioVisualizer/AudioVisualizer";

const testimonials = [
  {
    id: 1,
    img: "src/assets/img/Patryk.jpg",
    name: "Patryk Szpilczynski",
    company: "Magic-Ibiza",
    title: "Site redesign",
    position: "bottom-4/8 left-20",
    positionMob: "top-10 left-3",
    path: "src/assets/testimonials/Patryk.mp3",
    text: "My name is Patrick and I just wanted to share a quick review of the project with Vlad. So Vlad has done a complete redesign of my website. He introduced a very stunning and modern design using the most up-to-date trends and technologies. And he also worked on some monetization pages, ensuring the design and user experience were flawless. Generally, I am very happy with the end result. I feel that Vlad knows his stuff very well and he knows what he is doing. So he is definitely a skilled professional in design, UI and UX. He was easy to work with as well and also when problems or challenges arose we were able to solve them quickly. So he is a really good professional and I wish him all the best in the future.",
    top: false,
  },
  {
    id: 2,
    img: "src/assets/img/Stefan.jpg",
    name: "Stefan Julius",
    company: "ITTCON",
    title: "Better sales",
    position: "bottom-4/5 left-3/6",
    positionMob: "top-50 right-3",
    path: "src/assets/testimonials/Stefan.mp3",
    text: "Hello, my name is Stefan Julius and I am Managing Director of ITTCON in Hamburg. I never thought a website could actually make such a big impact on my business. But after launching the site Vlad designed, I saw real changes—more inquiries, better engagement, and my brand started looking much more professional. The whole process was smooth, without any unnecessary back and forth, and Vlad always made sure everything was exactly how I wanted it. Definitely recommend!",
    top: false,
  },
  {
    id: 3,
    img: "src/assets/img/Tomas.png",
    name: "Tomas Petrauskas",
    company: "Sonaro",
    title: "User Growth",
    position: "bottom-3/10 right-1/5",
    positionMob: "bottom-1/3 left-1/6",
    path: "src/assets/testimonials/Tomas.mp3",
    text: "As a SaaS company, we are looking for someone who could deliver not only a good-looking website, but also make it intuitive and user-friendly. Vlad did a perfect job. We received a lot of positive feedback from our users, and our metrics such as user session and retention rate have increased. He went above and beyond and exceeded our expectations. We are really glad that we had a chance to work with him. Thank you for your work. We are really glad that we had a chance to work with him. Thank you for your work.",
    top: true,
  },
  {
    id: 4,
    img: "src/assets/img/Kseniya.png",
    name: "Kseniya Polyachenok",
    company: "Finance Pro",
    title: "Partnership",
    position: "top-8/10 left-3/3",
    positionMob: "top-4/5 left-1/5",
    path: "src/assets/testimonials/Kseniya.mp3",
    text: "Hi, my name is Ksenia Polyachenok, i have been working with Vlad for a year. I previously worked with an agency, and honestly, it was exhausting—slow responses, endless meetings, and unnecessary delays. But working with Vlad was complete opposite! Everything was structured and clear from the start. He always kept me updated, understood exactly what I wanted, and the final result turned out even better than I expected. If you’re tired of wasting time and just want a great website without hassle, Vlad is the right guy!",
    top: true,
  },
];

const services = [
  {
    id: 1,
    title: "LANDING",
    terms: "4 days+",
    description:
      "I create landing pages for any purpose: a product, a promo, an event, or a special project. Designed to convert and engage your audience.",
    priceDesign: "300$",
    priceDesignDev: "500$",
    position: "top-0 left-10",
  },
  {
    id: 2,
    title: "E-COMMERCE",
    terms: "7 days+",
    description:
      "Online stores built for growth. A smooth user experience, easy checkout, and scalable design for any business.",
    priceDesign: "500$",
    priceDesignDev: "800$",
    position: "top-1/3 right-0",
  },
  {
    id: 3,
    title: "CORPORATE WEBSITE",
    terms: "4 days+",
    description:
      "Professional websites for companies that need a strong digital presence. Structured, informative, and built to impress.",
    priceDesign: "400$",
    priceDesignDev: "700$",
    position: "bottom-10 left-10",
  },
  {
    id: 4,
    title: "MULTI-PAGE PLATFORM",
    terms: "10 days+",
    description:
      " Custom-built platforms with multiple pages, deep UX optimization, and seamless functionality for complex projects.",
    priceDesign: "700$",
    priceDesignDev: "1200$",
    position: "bottom-0 right-10",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [duration, setDuration] = useState({});
  const [currentTime, setCurrentTime] = useState({});
  const audioRefs = useRef({});
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    // Если уже играет другое аудио - ставим его на паузу
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      clearInterval(intervalRef.current);
    }

    if (audio.paused) {
      audio.play();
      setCurrentAudio(audio);

      // Запускаем интервал для обновления времени
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => ({
          ...prev,
          [id]: Math.floor(audio.currentTime),
        }));
      }, 1000);
    } else {
      audio.pause();
      clearInterval(intervalRef.current);
      setCurrentAudio(null);
    }
  };

  const handleLoadedMetadata = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      setDuration((prev) => ({
        ...prev,
        [id]: Math.floor(audio.duration),
      }));
      setCurrentTime((prev) => ({
        ...prev,
        [id]: 0,
      }));
    }
  };

  const handleEnded = (id) => {
    setCurrentAudio(null);
    clearInterval(intervalRef.current);
    setCurrentTime((prev) => ({
      ...prev,
      [id]: 0,
    }));
  };

  // Контролируем скролл внутри секции
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Двигаем отзывы влево при скролле
  const xTransformTestimonials = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "-130%"]
  );
  const opacityTestimonials = useTransform(
    scrollYProgress,
    [0, 0.49, 0.5],
    [1, 1, 0]
  );
  const xTransformServices = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["100%", "-100%"]
  );

  const bgColor = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
    ["#1E2EB8", "#C9CEF6", "#E8EDF6"]
  );

  const titleOpacity1 = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.5],
    [1, 0.2, 0]
  ); // Исчезает
  const titleOpacity2 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8],
    [0, 1, 0.1]
  ); // Появляется
  const titleY1 = useTransform(scrollYProgress, [0.4, 0.5], ["0%", "-50%"]); // Уходит вверх
  const titleY2 = useTransform(scrollYProgress, [0.5, 0.6], ["50%", "0%"]); // Появляется снизу

  return (
    <section ref={sectionRef} className="relative h-[600vh]" id="testimonials">
      <div className="sticky inset-0 bottom-0 h-screen w-full flex items-center justify-center overflow-hidden rounded-[10px]">
        {/* Блок фиксации, пока идет анимация */}
        <motion.div
          className="sticky inset-0 bottom-0 h-screen w-full flex items-center justify-center overflow-hidden rounded-[10px]"
          style={{ backgroundColor: bgColor }}
        >
          {/* Заголовок */}
          <motion.h2
            className="w-full absolute top-1/2 left-1/2 text-white text-5xl font-bold -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              opacity: titleOpacity1,
              y: titleY1,
              color: scrollYProgress,
            }}
          >
            WHAT MY <br />
            CLIENTS SAY
          </motion.h2>

          {/* Второй заголовок */}
          <motion.h2
            className="w-full absolute top-1/2 left-1/2 text-black text-5xl font-bold -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ opacity: titleOpacity2, y: titleY2 }}
          >
            WHAT SERVICES <br /> DO I PROVIDE?
          </motion.h2>

          {/* Горизонтальный скролл отзывов */}
          <motion.div
            className="absolute w-full left-[0px] h-full flex items-center space-x-[16px] md:space-x-[0px] px-10"
            style={
              isMobile
                ? { y: xTransformTestimonials, opacity: opacityTestimonials }
                : { x: xTransformTestimonials, opacity: opacityTestimonials }
            }
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`absolute rounded-lg space-y-[10px] ${
                  !isMobile ? testimonial.position : testimonial.positionMob
                }`}
              >
                <div className="flex items-center gap-[8px]">
                  <div className="w-[60px] h-[60px] rounded-[100px] border border-white overflow-hidden">
                    <img src={testimonial.img} alt="" />
                  </div>
                  <div className="space-y-2">
                    <p className="manrope color-white font-bold">
                      {testimonial.name}
                    </p>
                    <p className="manrope color-bg font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[0px]">
                  <div className="flex items-center justify-between w-[231px] bg-white py-[9px] pl-[7px] pr-[14px] rounded-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <div className="relative w-[24px] h-[24px] flex items-center justify-center">
                        <audio
                          ref={(el) => (audioRefs.current[testimonial.id] = el)}
                          src={testimonial.path}
                          onLoadedMetadata={() =>
                            handleLoadedMetadata(testimonial.id)
                          }
                          onEnded={() => handleEnded(testimonial.id)}
                        />
                        <button
                          className=" w-[24px] h-[24px] flex items-center justify-center"
                          onClick={() => handlePlay(testimonial.id)}
                        >
                          <img
                            className="w-[12px] h-[12px]"
                            src={
                              currentAudio === audioRefs.current[testimonial.id]
                                ? "src/assets/img/pause.svg"
                                : "src/assets/img/play.svg"
                            }
                            alt=""
                          />
                        </button>
                      </div>
                      <div>
                        <p className="color-blue">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <span>
                        <AudioVisualizer
                          isPlaying={
                            currentAudio === audioRefs.current[testimonial.id]
                          }
                        />
                      </span>
                      {duration[testimonial.id] && (
                        <p className="color-blue">
                          00:
                          {String(
                            duration[testimonial.id] -
                              (currentTime[testimonial.id] || 0)
                          ).padStart(2, "0")}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className="p-[14px] bg-white rounded-[10px] relative cursor-pointer "
                    onMouseEnter={() => setIsOpen(testimonial.id)}
                    onMouseLeave={() => setIsOpen(null)}
                  >
                    <img src="src/assets/img/A.svg" alt="" className="z-[10]" />
                    <div
                      className={`absolute bg-white p-[16px] rounded-[10px] color-blue min-w-[280px] z-[11] shadow-[0px_1px_50px_rgba(0,0,0,0.15)] ${
                        isMobile || testimonial.top === false
                          ? "top-[130%] left-[-540%]"
                          : "bottom-[130%] left-[-12%]"
                      } ${isOpen === testimonial.id ? "" : "hidden"}`}
                    >
                      <p>{testimonial.text}</p>
                      <img
                        src="src\assets\img\vector.svg"
                        alt=""
                        className={`absolute ${
                          isMobile || testimonial.top === false
                            ? "top-[-8px] transform rotate-180 right-[5%]"
                            : "bottom-[-8px]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="absolute left-[0px] w-full h-[200%] md:flex items-center space-y-[140px] md:space-x-10 px-[16px] md:px-10"
            style={{ y: xTransformServices }}
            id="services"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col justify-between md:absolute bg-blue p-[30px] rounded-lg shadow-lg max-w-[340px] w-[100%] max-h-[424px] h-[100%]
                  ${service.position}
                ${isMobile && service.id % 2 === 0 ? "ml-auto" : ""}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white rounded-[10px] py-[4px] px-[10px]">
                    <p className="color-blue font-medium">
                      Terms: {service.terms}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      <span className="color-white">0{service.id}</span>
                      <span style={{ color: "#707BDA" }}>
                        / 0{services.length}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="space-y-[40px]">
                  <div className="space-y-[10px]">
                    <h3 className="color-white uppercase">{service.title}</h3>
                    <p className="font-medium color-white">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="space-y-[4px]">
                      <p className="font-medium" style={{ color: "#707BDA" }}>
                        Design only:
                      </p>
                      <p className="color-white">from {service.priceDesign}</p>
                    </div>
                    <div className="space-y-[4px]">
                      <p className="font-medium" style={{ color: "#707BDA" }}>
                        Design+Dev:
                      </p>
                      <p className="color-white">from {service.priceDesign}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="absolute bottom-[20px]">
          <p className="" style={{ color: "#E8EDF6" }}>
            Keep scrolling
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
