import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Nest villa",
    description: "Modern architecture & boutique home design",
    url: "https://nestvilla.netlify.app/",
    img: "src/assets/img/villa.jpg",
    imgMob: "src/assets/img/villamob.jpg",
    did: [
      "Full website design & development with a sleek, modern aesthetic and engaging animations",
      "Optimized UX/UI for effortless navigation, making the experience smooth and visually compelling",
      "Custom interactions & motion design to enhance storytelling and bring architectural concepts to life",
    ],
    results: [
      "Increased engagement – Interactive design elements led to a **[32%]** longer session time",
      "Enhanced brand perception – A premium, high-end digital presence aligned with the company’s **[boutique approach]**",
      "More inquiries & conversions – Improved structure and presentation resulted in a **[+28%]** increase in client requests",
    ],
  },
  {
    title: "REI",
    description: "Real Estate SaaS",
    url: "https://acecpas.com/",
    img: "src/assets/img/ace.jpg",
    imgMob: "src/assets/img/ACEmob.jpg",
    did: [
      "Complete redesign and development with a **[modern, professional]** aesthetic",
      "Optimized UX/UI for **[seamless navigation]** and an efficient user experience",
      "Strategic **[CTAs and clear content structure]** to drive higher conversions",
    ],
    results: [
      "Improved user experience – A **[well-structured layout]** helps users find key information faster",
      "Higher conversion rates – Inquiries increased by **[+42%]** due to intuitive navigation and strong CTAs",
      "Increased trust – **[+32%]** more clients opted to submit inquiries online without a prior call",
    ],
  },
  {
    title: "SmartScape",
    description: "Innovative Smart Homes & Sustainable Technologies",
    url: "https://smartscape.netlify.app/",
    img: "src/assets/img/smartScape.jpg",
    imgMob: "src/assets/img/SmartScapeMob.jpg",
    did: [
      "Developed a **[modern, minimalist design]** with smooth animations and elegant 2D elements",
      "Focused on simplicity and clarity – no clutter, just a **[sleek and functional]** aesthetic",
      "Fully optimized for all devices, with **[interactive elements]** to enhance user engagement",
    ],
    results: [
      "Intuitive interface improved usability, making the site more engaging. **[Increased organic traffic]**",
      "**[+35%]** in conversions due to well-structured navigation and strategic design triggers",
      "The new design transformed the **[brand’s online presence]**, positioning it as a more modern and tech-forward company",
    ],
  },
  {
    title: "Vandstrom",
    description: "Biotechnology & Advanced Filtration",
    url: "https://vandstrom.com/",
    img: "src/assets/img/vandstrom.jpg",
    imgMob: "src/assets/img/vandstromMob.jpg",
    did: [
      "Full website design and development with a **[futuristic, science-driven]** aesthetic",
      "UX/UI tailored for an **[intuitive, research-focused]** browsing experience",
      "Custom animations and micro-interactions to enhance **[engagement and storytelling]**",
    ],
    results: [
      "Improved user experience – A structured and visually immersive design makes **[complex scientific concepts]** more accessible",
      "Higher engagement – Interactive elements led to a **[+28%]** increase in session duration",
      "Stronger brand identity – A **[refined digital presence]** reinforced credibility within the biotech industry",
    ],
  },
  {
    title: "Personify Health",
    description: "Digital Solutions for Corporate Health",
    url: "https://personifyhealth.com/global/de/",
    img: "src/assets/img/personifyHealth.jpg",
    imgMob: "src/assets/img/personifyHealthMob.jpg",
    did: [
      "Revamped the **[website structure]** to enhance clarity and ease of navigation",
      "Optimized UX/UI for a seamless **[user journey]** and improved content accessibility",
      "Integrated **[interactive elements]** and personalized content to increase engagement",
    ],
    results: [
      "Improved user experience – Streamlined navigation helped visitors find key information **[35% faster]**",
      "Higher engagement – Time spent on the site **[increased by 28%]** due to intuitive design and interactive content",
      "Increased trust – The refreshed website strengthened **[brand credibility]**, leading to a **[+31%]** rise in inquiries",
    ],
  },
  {
    title: "ITTCON",
    description: "Sustainable Forestry & Green Investments",
    url: "https://ittcon.eu/",
    category: "Corporate",
    img: "src/assets/img/ittcon.jpg",
    imgMob: "src/assets/img/ittconMob.jpg",
    did: [
      "Complete redesign and development from scratch, creating a **[modern and intuitive website]**",
      "A design that fully represents the company’s **[values and strengthens]** its visual identity",
      "Thoughtfully structured UX/UI for seamless navigation and a better user experience",
    ],
    results: [
      "**[+37%]** increase in inquiries due to improved usability and engagement",
      "**[Stronger brand trust]**, leading to higher user interaction and credibility",
      "**[+23%]** more investors and partnerships thanks to a professional and compelling online presence",
    ],
  },
];

const Works = () => {
  const [showCard, setShowCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="md:pr-[30px] md:pb-[305px] md:pt-[90px] px-[16px] pb-[80px] space-y-[20px]"
      id="cases"
    >
      <div>
        <p>My works</p>
      </div>
      <div className="grid max-[1280px]:grid-cols-1 min-[1280px]:grid-cols-2 grid-rows-auto gap-x-[20px] gap-y-[80px] md:gap-y-[150px]">
        {worksData.map((works, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setShowCard(index)}
            onMouseLeave={() => setShowCard(null)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: !isMobile ? index * 0.1 : 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`relative transition-shadow duration-300 rounded-[10px] h-auto overflow-hidden ${
              index % 2 !== 0 ? "min-[1280px]:translate-y-[125px]" : ""
            } ${
              showCard === index ? "shadow-[0px_1px_50px_rgba(0,0,0,0.15)]" : ""
            }`}
          >
            <div className="relative overflow-hidden">
              <div
                className={`h-full  md:h-[500px] md:min-h-[400px] xl:h-auto xl:min-h-full 2xl::h-auto `}
              >
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src={!isMobile ? works.img : works.imgMob}
                  alt={works.title}
                />
              </div>
            </div>
            <div className="relative p-[15px] space-y-[20px]">
              <div className="space-y-[10px]">
                <h3>{works.title}</h3>
                <p>{works.description}</p>
                <div className="flex justify-end">
                  <div href={works.url}>
                    {!isMobile ? (
                      ""
                    ) : (
                      <div className="color-blue font-18 font-bold">
                        (Tap here to learn more)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`color-black bg-white absolute transition-all duration-300 w-full h-full left-[0px] px-[15px] py-[20px] flex flex-col items-start justify-center ${
                showCard === index
                  ? "top-[0%] opacity-100"
                  : "top-full opacity-100"
              } space-y-[20px]`}
            >
              <div className="space-y-[10px] color-black">
                <h4>What I did:</h4>
                <div className="space-y-[5px]">
                  {works.did.map((result, index) => (
                    <p key={index} className="">
                      <span className="text-[14px] mr-[8px]">●</span>
                      {result.split(/(\*\*\[.*?\]\*\*)/).map((part, i) =>
                        /\*\*\[(.*?)\]\*\*/.test(part) ? (
                          <span key={i} className="color-blue">
                            {part.replace(/\*\*\[|\]\*\*/g, "")}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-[10px] color-black">
                <h4>Results:</h4>
                <div className="space-y-[5px]">
                  {works.results.map((result, index) => (
                    <p key={index} className="">
                      <span className="text-[14px] mr-[8px]">●</span>
                      {result.split(/(\*\*\[.*?\]\*\*)/).map((part, i) =>
                        /\*\*\[(.*?)\]\*\*/.test(part) ? (
                          <span key={i} className="color-blue">
                            {part.replace(/\*\*\[|\]\*\*/g, "")}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>
              </div>
              {isMobile ? (
                <a
                  className="ml-auto color-blue font-18 ml-auto font-bold"
                  target="_blank"
                  href={works.url}
                >
                  (Go to website)
                </a>
              ) : (
                <a
                  className="ml-auto color-blue font-18 ml-auto font-bold"
                  target="_blank"
                  href={works.url}
                >
                  (Go to website)
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
