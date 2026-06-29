import { useState } from "react";
import FAQItem from "../../components/FAQItem/FAQItem";
import useIsMobile from "../../hooks/useIsMobile";

const faqData = [
  {
    id: 1,
    question: "What types of projects do you work on?",
    answer:
      "I work on websites, landing pages, SaaS interfaces, dashboards, mobile app designs, and marketing websites for digital products. My focus is not only on visuals, but also on UX, business goals, structure, and development-ready execution.",
  },
  {
    id: 2,
    question: "Can you work with an existing design or wireframes?",
    answer:
      "Yes. I can either create a design from scratch or improve an existing Figma file. If the structure is already in place, I focus on polishing the visual quality, fixing inconsistencies, improving hierarchy, and making the design clean, consistent, responsive, and ready for development.",
  },
  {
    id: 3,
    question: "Will the design be developer-friendly?",
    answer:
      "Yes. I am also a developer, so I design with implementation in mind. I prepare clean Figma files with clear structure, reusable components, responsive logic, consistent spacing, and layouts that are easier to translate into code.",
  },
  {
    id: 4,
    question: "Can you handle both design and development?",
    answer:
      "Yes. I can work from strategy and UX/UI design to development and launch. This helps keep the project more consistent because the same person who designs the experience also understands how it will be built.",
  },
  {
    id: 5,
    question: "Which platform or tech stack should I use?",
    answer:
      "It depends on the project. For simpler editable websites, WordPress or Webflow can work well. For more scalable, performance-focused, and custom projects, I often recommend Next.js with a CMS like Strapi. I’ll recommend the best option based on your goals, content structure, budget, and long-term needs.",
  },
  {
    id: 6,
    question: "Will I be able to edit the website myself?",
    answer:
      "Yes, if the project requires it. I can build the website with reusable editable sections and CMS-based content, so your team can update pages, publish new content, edit images, add case studies, manage articles, or update service pages without needing a developer for every change.",
  },
  {
    id: 7,
    question: "What if I don’t have final text or content yet?",
    answer:
      "That’s not a problem. I can help structure the content, define the key messages, improve the page flow, and create draft copy that fits the design and business goals. We can refine the final wording together during the process.",
  },
  {
    id: 8,
    question: "How do you make sure the design works on mobile?",
    answer:
      "I design responsive layouts for desktop, tablet, and mobile, not just a resized version of the desktop design. I check hierarchy, spacing, readability, interactions, and conversion paths across screen sizes so the experience feels natural on every device.",
  },
  {
    id: 9,
    question: "Do you focus on conversion and business goals?",
    answer:
      "Yes. I design around what the user needs to understand, trust, and do next. Depending on the project, this can mean clearer CTAs, better service structure, stronger proof, simpler forms, improved navigation, or a more focused user journey.",
  },
  {
    id: 10,
    question: "How do you manage the project process?",
    answer:
      "I work in clear phases: understanding the goals, defining the structure, creating the design direction, refining the key screens or pages, preparing responsive versions, and then moving into development or handoff. You review progress throughout the process, so there are no surprises at the end.",
  },
  {
    id: 11,
    question: "What are typical project timelines?",
    answer:
      "Timelines depend on the scope. A landing page or small Figma polish task can take a few days. A full website or product design can take a few weeks. Larger websites with CMS, development, SEO, migration, and testing usually take longer. I always define the timeline before starting.",
  },
  {
    id: 12,
    question: "What do you need from me to start?",
    answer:
      "Usually I need your current website or Figma file, project goals, target audience, brand materials, content or rough notes, examples of websites you like, and any technical requirements. If something is missing, I can help define it during the first stage.",
  },
];


const FAQ = () => {
  const isMobile = useIsMobile();
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section
      className="px-[16px] md:px-[30px] space-y-[30px] mt-[100px] md:mt-[180px]"
      id="faq"
    >
      {!isMobile ? (
        <h2 className="uppercase">
          Questions and <br />
          Answers
        </h2>
      ) : (
        <h2 className="uppercase">FAQ</h2>
      )}
      <div
        className={`${!isMobile ? "bg-bg" : ""
          } md:py-[50px] md:px-[40px]  flex flex-col rounded-[10px]`}
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
