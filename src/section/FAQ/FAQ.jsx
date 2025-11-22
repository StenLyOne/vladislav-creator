import { useState, useEffect } from "react";
import FAQItem from "../../components/FAQItem/FAQItem";

const faqData = [
  {
    id: 1,
    question: "How do you work on projects?",
    answer:
      "I follow a structured process, working in phases where you review my progress, give feedback, and I refine the design accordingly. This ensures the final result is exactly what you need—no surprises at the end.",
  },
  {
    id: 2,
    question: "What should I do if I don't have ready-made text?",
    answer:
      "That’s not a problem! I can help craft compelling content for your website, from structuring key messages to full copywriting that enhances your brand. Whether you have a rough idea or need everything from scratch, I’ll make sure it fits seamlessly into the design.",
  },
  {
    id: 3,
    question: "What if I don’t like the outcome?",
    answer:
      "I work iteratively, meaning you’ll have multiple opportunities to provide feedback throughout the process. If something doesn’t feel right, I analyze the issue, refine the details, and adjust the design until you’re fully satisfied.",
  },
  {
    id: 4,
    question: "Do I need to have brand identity for website creation?",
    answer:
      "It’s preferable but not necessary. If you have an existing brand identity, I’ll integrate it seamlessly into the website. If not, I can either help create one or design a site that aligns naturally with your business.",
  },
  {
    id: 5,
    question: "What are your project deadlines?",
    answer:
      "Timelines vary depending on the complexity of the project. A simple landing page can take a few days, while larger websites may take a few weeks. I always discuss deadlines upfront and ensure timely delivery.",
  },
  {
    id: 6,
    question: "Do you guarantee high conversion rates for your websites?",
    answer:
      "I design websites using the best UX/UI practices to maximize engagement and conversions. While strong design and structure lay the foundation for results, conversion rates also depend on factors like traffic sources, content, and marketing efforts.",
  },
  {
    id: 7,
    question: "Do you have a turnkey service option?",
    answer:
      "Yes, I handle everything—from concept and design to development and final launch. If you want a fully completed website without worrying about technical details, I’ll take care of it all.",
  },
  {
    id: 8,
    question: "Why do you work with WordPress?",
    answer: "Yes, I work with it and will take care of everything.",
  },
];

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="space-y-[30px] mt-[100px] md:mt-[180px] md:mr-[30px]"
      id="faq"
    >
      {!isMobile ? (
        <h2 className="uppercase">
          Questions and <br />
          Answers
        </h2>
      ) : (
        <h2 className="uppercase px-[16px] md:px-[0px]">FAQ</h2>
      )}
      <div
        className={`${
          !isMobile ? "bg-bg" : ""
        } md:py-[50px] px-[16px] md:px-[40px] flex flex-col rounded-[10px]`}
      >
        {faqData.map((faq, index) => (
          <div key={faq.id} className="cursor-pointer">
            <FAQItem
              key={faq.id}
              id={faq.id}
              answer={faq.answer}
              question={faq.question}
              isOpen={openFAQ}
              setOpen={setOpenFAQ}
            />
            {index !== faqData.length - 1 && (
              <div className="h-[1px] w-full bg-stroke" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
