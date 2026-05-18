import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Hyfe inc",
    description: "Innovative Smart Homes & Sustainable Technologies",
    url: "https://hyfe.com/",
    img: "/assets/img/hyfe.png",
    imgMob: "/assets/img/hyfe.png",
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
    "title": "Flouer",
    "description": "Plant marketplace and care companion mobile app",
    "url": "",
    "category": "Mobile App / Marketplace",
    "img": "/assets/img/flower.png",
    "imgMob": "/assets/img/flower.png",
    "did": [
      "Created the product concept combining **[plant shopping, care plans, and personalized recommendations]**",
      "Designed the mobile UX/UI for marketplace, plant profiles, garden, care tasks, and onboarding",
      "Defined the post-purchase care logic with **[ready-made plans, reminders, and task flows]**"
    ],
    "results": [
      "**[Clear product value]** – users buy a plant and get guided care after purchase",
      "**[Stronger purchase motivation]** – users see why a plant fits their room and skill level",
      "**[Scalable foundation]** – the app can grow with more plants, rooms, care scenarios, and products"
    ]
  },
  {
    "title": "Forma Pilates",
    "description": "Boutique Pilates video class app",
    "url": "https://apps.apple.com/us/app/forma-pilates/id1568310325",
    "img": "/assets/img/forma-pilates.png",
    "imgMob": "/assets/img/forma-pilates.png",
    "did": [
      "Premium mobile experience for **[mat and reformer Pilates video classes]** with a boutique studio feeling",
      "Structured content flow for **[full workouts, short classes and focused body programs]**",
      "Elegant wellness UI built around **[precision, instructor guidance and at-home training]**"
    ],
    "results": [
      "Clear course value, Users instantly understand the app offers **[exclusive studio-level Pilates at home]**",
      "Flexible learning flow, Short and long classes make the product suitable for **[quick sessions or full workouts]**",
      "Strong premium reference, The app combines **[video content, subscription access and boutique wellness branding]**"
    ]
  },
  {
    title: "Nest villa",
    description: "Modern architecture & boutique home design",
    url: "https://nestvilla.netlify.app/",
    img: "/assets/img/villa.jpg",
    imgMob: "/assets/img/villamob.jpg",
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
    "title": "CMS",
    "description": "Real-time Cough Monitoring for Clinical Trials",
    "url": "https://www.coughmonitor.com/",
    "img": "/assets/img/cms.png",
    "imgMob": "/assets/img/cms.png",
    "did": [
      "Full website redesign and development with a **[clinical, data-driven aesthetic]** aligned with medical standards",
      "UX/UI built around **[clarity, reliability, and scientific communication]**, making complex tech easy to grasp",
      "Structured presentation of the CoughMonitor Suite, highlighting **[workflow, validation data, and trial readiness]**"
    ],
    "results": [
      "Improved comprehension – Complex clinical technology is now explained through a **[clear, step-by-step UX flow]**",
      "Higher engagement – Visitors interact more with validation data and workflow sections, increasing **[time on page by +31%]**",
      "Stronger credibility – A professional, compliant visual identity reinforces CMS as a **[trusted clinical trial solution]**"
    ]
  },
  {
    title: "ResolveDTx",
    description: "Innovative Smart Homes & Sustainable Technologies",
    url: "https://www.resolvedtx.com/",
    img: "/assets/img/dtx.png",
    imgMob: "/assets/img/dtx.png",
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
            className={`relative transition-shadow duration-300 rounded-[10px] h-auto overflow-hidden ${index % 2 !== 0 ? "min-[1280px]:translate-y-[125px]" : ""
              } ${showCard === index ? "shadow-[0px_1px_50px_rgba(0,0,0,0.15)]" : ""
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
              className={`color-black bg-white absolute transition-all duration-300 w-full h-full left-[0px] px-[15px] py-[20px] flex flex-col items-start justify-center ${showCard === index
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
              {isMobile && works.url ? (
                <a
                  className="ml-auto color-blue font-18 ml-auto font-bold"
                  target="_blank"
                  href={works.url}
                >
                  (Go to website)
                </a>
              ) : works.url ? (
                <a
                  className="ml-auto color-blue font-18 ml-auto font-bold"
                  target="_blank"
                  href={works.url}
                >
                  (Go to website)
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
