export type WorkMediaType = "image" | "video";

export interface WorkMedia {
  type: WorkMediaType;
  url: string;
}

export interface WorkFrameworkSection {
  id: string;
  title: string;
  paragraphs?: string[];
  media?: WorkMedia | WorkMedia[];
  bullets?: string[];
  richBullets?: string[];
  [key: string]: unknown;
}

export interface WorkCaseStudy {
  slug: string;
  title: string;
  heroOutcomeTitle?: string;
  subtitle?: string;
  shortDescription?: string;
  category: string;
  year: string;
  clientName: string;
  heroImage: string;
  role?: string[];
  overviewText?: string;
  frameworkSections?: WorkFrameworkSection[];
  externalProjectLink?: string;
  did?: string[];
  results?: string[];
  disciplines?: string[];
  storySections?: Array<{ title: string; paragraphs: string[] }>;
  [key: string]: unknown;
}

export interface LandingWork {
  slug?: string;
  title: string;
  description: string;
  url?: string;
  img: string;
  imgMob: string;
  did?: string[];
  results?: string[];
}

const caseStudyBase: WorkCaseStudy[] = [
  {
    slug: "hyfe-inc",
    title: "Hyfe Inc.",
    heroOutcomeTitle:
      "Made a complex HealthTech website faster, clearer, and easier to navigate",
    frameworkSections: [
      {
        id: "before",
        title: "Before",
        paragraphs: [
          "The old website was slow, overloaded, and outdated.",
          "Users did not always understand what Hyfe does and often got lost in navigation.",
          "News, publications, white papers, science content, and company materials were mixed together.",
          "Because of the outdated UI, the product felt less trustworthy than the technology behind it.",
        ],
        media: [
          { type: "image", url: "/assets/hyfe/Hyfe-old-1.png" },
          { type: "image", url: "/assets/hyfe/Hyfe-old-2.png" },
        ],
      },
      {
        id: "insight",
        title: "Insight",
        paragraphs: [
          "The problem was not the amount of content, but how users accessed it.",
          "Resources needed to be split into two clear directions: company materials and science content.",
          "When users find the right information faster, they drop less and explore the product deeper.",
        ],
        media: { type: "video", url: "/assets/hyfe/resources.mp4" },
      },
      {
        id: "decision",
        title: "Decision",
        paragraphs: [
          "I rebuilt the website around a clearer structure, faster loading, and a more premium visual style.",
          "Resources were separated into company and science categories.",
          "I added sheet previews so users could quickly open materials without losing context.",
          "Relevant recommendations were added across the pages to guide users deeper into related content.",
        ],
        media: { type: "video", url: "/assets/hyfe/home.mp4" },
      },
      {
        id: "after",
        title: "After",
        paragraphs: [
          "The new website became faster, clearer, and easier to navigate.",
          "Users can understand the product faster and find relevant resources with less friction.",
          "The website now feels more mature, structured, and trustworthy for a HealthTech product.",
        ],
        media: [
          { type: "image", url: "/assets/hyfe/google-insights-1.png" },
          { type: "image", url: "/assets/hyfe/google-insights-2.png" },
        ],
      },
      {
        id: "business-value",
        title: "Business value",
        paragraphs: [
          "Faster loading reduces early drop-offs.",
          "Clear navigation helps users find the right content faster.",
          "Separated resources make science and company materials easier to explore.",
          "Recommendations increase the chance that users go deeper through the website.",
          "Modern UI builds trust around a complex HealthTech product.",
        ],
        media: { type: "image", url: "/assets/hyfe/metrics.png" },
      },
    ],
    shortDescription:
      "HealthTech website redesign focused on performance, resource architecture, navigation clarity, and trust.",
    category: "Corporate Website / HealthTech",
    year: "2026",
    clientName: "Hyfe Inc.",
    heroImage: "/assets/img/hyfe.png",
    role: [
      "UX strategy",
      "UI design",
      "Frontend development",
      "Backend development",
    ],
    externalProjectLink: "https://hyfe.com/",
  },
  {
    slug: "flouer-app",
    title: "Flouer",
    heroOutcomeTitle:
      "Improved purchase confidence by connecting discovery, checkout, and post-purchase care",
    role: [
      "UX strategy",
      "UI design",
      "Frontend development",
      "Backend development",
    ],
    subtitle: "Plant marketplace and care companion mobile app",
    shortDescription:
      "Product concept and UX/UI for a mobile app that combines plant discovery, purchase, and post-purchase care.",
    category: "Mobile App / Marketplace",
    year: "2025",
    clientName: "Flouer",
    heroImage: "/assets/flouer/flouer.png",
    overviewText:
      "The concept solves a common ecommerce gap: buying a plant is easy, keeping it alive is not. The product combines shopping and guided care in one flow.",
    frameworkSections: [
      {
        id: "problems",
        title: "Problems",
        paragraphs: [
          "A plant marketplace has a weak retention loop if the experience ends at checkout.",
          "Users do not always know which plant fits their room, lifestyle, or level of experience.",
          "After purchase, people are often left alone with care: when to water, how to fertilize, and what to do next.",
          "As a result, buying a plant feels easy, but keeping it alive becomes the user’s problem.",
        ],
        media: [
          { type: "image", url: "/assets/flouer/problem.png" },
        ],
      },
      {
        id: "insight",
        title: "Insight",
        paragraphs: [
          "The real value is not just selling a plant, but giving users a reason to return after purchase.",
          "Users need to understand: this plant fits me, my room, and my ability to care for it.",
          "When purchase is connected to a care plan, reminders, and tasks, confidence becomes much higher.",
          "Care-based recommendations can also turn supplies into repeat purchases.",
        ],
        media: { type: "image", url: "/assets/flouer/insights.png" },
      },
      {
        id: "decision",
        title: "Decision",
        paragraphs: [
          "I designed a mobile app where marketplace and plant care work as one connected experience.",
          "Onboarding collects room, experience level, light, humidity, and temperature.",
          "Plant cards show not only the product, but also why it fits the user.",
          "After purchase, the plant moves into My Garden, where the care plan, tasks, and reminders are activated.",
          "Soil, fertilizer, pots, and accessories are recommended based on the plant and its care needs.",
        ],
        media: [{ type: "image", url: "/assets/flouer/decision.png" },
          // { type: "video", url: "/assets/flouer/app-flow.mov" }
        ],
      },
      {
        id: "after",
        title: "After",
        paragraphs: [
          "Users understand what to buy and why it fits them.",
          "After purchase, the app keeps guiding the user through care.",
          "Marketplace, My Garden, care tasks, and supplies became part of one connected product.",
        ],
        media: [{ type: "image", url: "/assets/flouer/after.png" },
          // { type: "video", url: "/assets/flouer/app-flow.mov" }
        ],

      },
      {
        id: "business-value",
        title: "Business value",
        paragraphs: [
          "Personalized recommendations increase purchase confidence.",
          "Care plans make the product more valuable than a regular plant store.",
          "Post-purchase care gives users a reason to return to the app.",
          "Supply recommendations create a path to repeat purchases.",
          "The product can scale through new plants, rooms, care scenarios, and product categories.",
        ],
        media: { type: "image", url: "/assets/flouer/business-value.png" },
      },
    ],
    externalProjectLink: "",
  },
  // {
  //   slug: "forma-pilates",
  //   title: "Forma Pilates",
  //   heroOutcomeTitle:
  //     "Made premium class discovery faster and clearer for subscription-based wellness users",
  //   frameworkTags: ["UX/UI", "Product", "Subscription", "2025", "Mobile app"],
  //   subtitle: "Boutique Pilates video class app",
  //   shortDescription:
  //     "Premium mobile UX for a subscription fitness product with guided classes, focused programs, and polished visual identity.",
  //   category: "Fitness Product",
  //   year: "2025",
  //   clientName: "Forma Pilates",
  //   heroImage: "/assets/img/forma-pilates.png",
  //   overviewText:
  //     "The goal was to capture a boutique studio feel in a mobile app while keeping the class catalogue quick to navigate and easy to personalize.",
  //   storySections: [
  //     {
  //       title: "Challenge",
  //       paragraphs: [
  //         "Fitness content apps often feel overloaded and generic. This product needed premium positioning and faster class discovery.",
  //         "Users should be able to jump into a class in seconds, whether they have 10 minutes or a full workout slot.",
  //       ],
  //     },
  //     {
  //       title: "Approach",
  //       paragraphs: [
  //         "We organized the information architecture around intent: quick sessions, full classes, and body-part programs.",
  //         "UI language focused on clean typography, elegant spacing, and strong media hierarchy to highlight instructors and routines.",
  //       ],
  //     },
  //     {
  //       title: "Outcome",
  //       paragraphs: [
  //         "The concept balances premium brand feel with practical usability, making the subscription value immediately clear.",
  //       ],
  //     },
  //   ],
  //   office: "Remote",
  //   team: "Designer + Product owner",
  //   disciplines: ["Mobile UX", "Interface design", "Content hierarchy"],
  //   services: ["Product audit", "Flows", "UI design", "Prototype"],
  //   did: [
  //     "Premium mobile experience for **[mat and reformer Pilates video classes]** with a boutique studio feeling",
  //     "Structured content flow for **[full workouts, short classes and focused body programs]**",
  //     "Elegant wellness UI built around **[precision, instructor guidance and at-home training]**",
  //   ],
  //   results: [
  //     "Clear course value, Users instantly understand the app offers **[exclusive studio-level Pilates at home]**",
  //     "Flexible learning flow, Short and long classes make the product suitable for **[quick sessions or full workouts]**",
  //     "Strong premium reference, The app combines **[video content, subscription access and boutique wellness branding]**",
  //   ],
  //   externalProjectLink:
  //     "https://apps.apple.com/us/app/forma-pilates/id1568310325",
  //   gallery: [
  //     {
  //       type: "full",
  //       image: "/assets/img/forma-pilates.png",
  //       alt: "Forma Pilates key visual",
  //     },
  //     {
  //       type: "split-text-image",
  //       image: "/assets/img/ACE.jpg",
  //       textTitle: "Studio feeling",
  //       textBody:
  //         "Motion, spacing, and visual rhythm were tuned to feel calm and premium without reducing clarity.",
  //       insetImage: "/assets/img/Stefan.jpg",
  //     },
  //     {
  //       type: "full",
  //       image: "/assets/img/personifyHealth.jpg",
  //       alt: "Workout content presentation",
  //     },
  //     {
  //       type: "split-images",
  //       leftImage: "/assets/img/forma-pilates.png",
  //       rightImage: "/assets/img/personifyHealthMob.jpg",
  //       leftCaption: "Browse",
  //       rightCaption: "Play",
  //     },
  //     {
  //       type: "city-strip",
  //       backgroundImage: "/assets/img/ittcon.jpg",
  //       cities: [
  //         "Beginner",
  //         "Intermediate",
  //         "Advanced",
  //         "Mat",
  //         "Reformer",
  //         "Recovery",
  //       ],
  //       sideImage: "/assets/img/forma-pilates.png",
  //     },
  //     {
  //       type: "full",
  //       image: "/assets/img/vandstromMob.jpg",
  //       alt: "Final composition",
  //     },
  //   ],
  // },
  {
    slug: "planiq",
    title: "PlanIQ",
    heroOutcomeTitle: "Designed a B2B SaaS platform that helps teams manage projects, tasks, meetings, chats, and AI workflows in one place",
    frameworkSections: [{
      id: "before", title: "Before",
      paragraphs: ["Project teams were losing context because tasks, chats, meetings, files, and schedules were managed across separate tools.", "Managers had to collect project updates manually from different channels before understanding the real project status.", "Team members had to switch between chats, boards, calendars, and meeting notes to understand what needed to be done next.", "Meeting decisions were easy to miss because they were disconnected from tasks, deadlines, and project progress.", "AI support was useful only as a general chat, but it was not connected to real project workflows."],
      media: [{ type: "image", url: "/assets/planiq/before-1.png" }, { type: "image", url: "/assets/planiq/before-2.png" }]
    },
    {
      id: "insight",
      title: "Insight",
      paragraphs: ["The main bottleneck was the gap between communication and execution.", "Project updates, task progress, meetings, and schedules needed to work as one connected workflow.", "AI needed access to project context so it could help with real actions: summarize meetings, identify risks, create updates, and suggest next steps.", "The product had to reduce manual coordination and make project status easier to understand at a glance."],
      media: [{ type: "image", url: "/assets/planiq/ai-assistant.png" }, { type: "image", url: "/assets/planiq/ai-assistant-chat.png" }],

    },
    {
      id: "decision",
      title: "Decision",
      paragraphs: ["I designed a dashboard that gives managers a quick overview of project status, active tasks, deadlines, team activity, and meeting notes.", "I created a kanban project board where teams can track tasks by status, priority, progress, assignees, files, and comments.", "I added an inbox flow so project discussions stay close to the work they affect.", "I designed video meeting and room chat screens to keep calls, participants, messages, and recordings inside the product.", "I created a calendar and scheduling flow so meetings and project timelines can be planned from the same workspace.", "I designed the AI assistant around practical project actions: risk analysis, meeting summaries, task updates, file search, translation, and audio chat."],
      media: [{ type: "image", url: "/assets/planiq/dashboard.png" }, { type: "image", url: "/assets/planiq/projects.png" }],
    },
    {
      id: "after",
      title: "After",
      paragraphs: ["Managers can review project health faster through dashboard metrics, task statistics, progress cards, and upcoming meetings.", "Team members can move from task planning to chat, meetings, and scheduling without losing project context.", "Meeting outcomes can be captured, discussed, and turned into project actions more easily.", "The AI assistant helps teams analyze risks, create updates, summarize information, and work with project files faster.", "The interface supports complex SaaS workflows while keeping the product clean, structured, and easy to scan."],
      media: [{ type: "image", url: "/assets/planiq/inbox.png" }, { type: "image", url: "/assets/planiq/calendar.png" }]
    },
    {
      id: "business-value",
      title: "Business value",
      paragraphs: ["Less time is wasted switching between separate tools.", "Managers get faster access to project status, risks, deadlines, and team activity.", "Teams get clearer ownership through task statuses, assignees, progress, files, and comments.", "Meetings become more useful because notes, recordings, chats, and next steps stay connected to the project.", "AI quick actions reduce repetitive work around summaries, updates, planning, and risk analysis.", "Reusable UI components make the SaaS product easier to scale with new modules and workflows."],
      media: { type: "image", url: "/assets/planiq/business-value.png" }
    }],
    shortDescription: "B2B SaaS platform for project management, team communication, scheduling, meetings, and AI-assisted workflows.",
    category: "B2B SaaS / Project Management / AI Workspace",
    year: "2026",
    clientName: "PlanIQ",
    heroImage: "/assets/planiq/hero.png",
    role: ["UX strategy", "Product design", "UI design", "Design system"],
    externalProjectLink: ""
  },
  {
    slug: "pidu",
    title: "Pidu",
    heroOutcomeTitle:
      "Designed a gamified English learning app UI kit that makes daily practice feel easier, more engaging, and more rewarding",
    frameworkSections: [
      {
        id: "before",
        title: "Before",
        paragraphs: [
          "Many language learning apps feel repetitive and hard to continue after the first motivation drop.",
          "Users often lose interest when lessons feel too long, progress is unclear, and rewards are not visible enough.",
          "The client wanted an English learning app that feels more like a game than homework.",
          "The product needed a clear mobile UI system for lessons, practice, progress, rewards, challenges, and social competition."
        ],
        media: [
          { type: "image", url: "/assets/pidu/before.png" },
        ]
      },
      {
        id: "insight",
        title: "Insight",
        paragraphs: [
          "The main challenge was keeping users motivated between lessons.",
          "Short exercises reduce friction and make practice easier to start.",
          "Progress, streaks, EXP, rewards, and leaderboards create a reason to return.",
          "The app needed a repeatable learning loop: choose activity, complete task, get feedback, earn reward, continue progress."
        ],
        media: { type: "image", url: "/assets/pidu/motivation-loop.png" }
      },
      {
        id: "decision",
        title: "Decision",
        paragraphs: [
          "I designed a playful mobile UI kit built around short learning sessions and clear visual feedback.",
          "I created reusable exercise templates for guessing words, completing conversations, listening tasks, sentence rearrangement, and speaking practice.",
          "I added gamification mechanics: EXP, streaks, gems, progress bars, leagues, challenges, and rewards.",
          "I designed a character-driven visual system to make the app feel friendly, memorable, and easier to return to.",
          "The UI kit was structured so new lessons, topics, activities, and game modes could be added without redesigning the whole product."
        ],
        media: { type: "image", url: "/assets/pidu/decision.png" }
      },
      {
        id: "after",
        title: "After",
        paragraphs: [
          "The final UI kit turns English practice into a clear and repeatable mobile learning flow.",
          "Users can choose an activity, complete short tasks, get instant feedback, earn EXP, and continue their progress.",
          "The app supports both solo learning and social motivation through challenges, leagues, rooms, and leaderboards.",
          "The design system gives the product a scalable foundation for future lessons, characters, rewards, and learning formats."
        ],
        media: [
          { type: "image", url: "/assets/pidu/after-1.png" },
          { type: "image", url: "/assets/pidu/after-2.png" }
        ]
      },
      {
        id: "business-value",
        title: "Business value",
        paragraphs: [
          "Short lesson flows help users start practice faster.",
          "Streaks, EXP, gems, and rewards create stronger reasons to return.",
          "Reusable exercise templates reduce the time needed to add new learning content.",
          "Leagues, challenges, and rooms increase social engagement inside the app.",
          "A scalable UI kit makes the product easier to expand across new topics, levels, and activity types."
        ],
        media: { type: "image", url: "/assets/pidu/business-value.png" }
      }
    ],
    shortDescription:
      "Gamified mobile EdTech UI kit focused on English learning, short practice sessions, rewards, progress, challenges, and user retention.",
    category: "Mobile App / EdTech / Gamification",
    year: "2026",
    clientName: "Pidu",
    heroImage: "/assets/pidu/hero.png",
    role: [
      "Product design",
      "Mobile UI design",
      "Gamification",
      "Design system"
    ],
    externalProjectLink: ""
  }
];

const externalOnlyWorks: LandingWork[] = [
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
      "Increased engagement - Interactive design elements led to a **[32%]** longer session time",
      "Enhanced brand perception - A premium, high-end digital presence aligned with the company's **[boutique approach]**",
      "More inquiries & conversions - Improved structure and presentation resulted in a **[+28%]** increase in client requests",
    ],
  },
  // {
  //   title: "CMS",
  //   description: "Real-time Cough Monitoring for Clinical Trials",
  //   url: "https://www.coughmonitor.com/",
  //   img: "/assets/img/cms.png",
  //   imgMob: "/assets/img/cms.png",
  //   did: [
  //     "Full website redesign and development with a **[clinical, data-driven aesthetic]** aligned with medical standards",
  //     "UX/UI built around **[clarity, reliability, and scientific communication]**, making complex tech easy to grasp",
  //     "Structured presentation of the CoughMonitor Suite, highlighting **[workflow, validation data, and trial readiness]**",
  //   ],
  //   results: [
  //     "Improved comprehension - Complex clinical technology is now explained through a **[clear, step-by-step UX flow]**",
  //     "Higher engagement - Visitors interact more with validation data and workflow sections, increasing **[time on page by +31%]**",
  //     "Stronger credibility - A professional, compliant visual identity reinforces CMS as a **[trusted clinical trial solution]**",
  //   ],
  // },
  {
    title: "ResolveDTx",
    description: "Innovative Smart Homes & Sustainable Technologies",
    url: "https://www.resolvedtx.com/",
    img: "/assets/img/dtx.png",
    imgMob: "/assets/img/dtx.png",
    did: [
      "Developed a **[modern, minimalist design]** with smooth animations and elegant 2D elements",
      "Focused on simplicity and clarity - no clutter, just a **[sleek and functional]** aesthetic",
      "Fully optimized for all devices, with **[interactive elements]** to enhance user engagement",
    ],
    results: [
      "Intuitive interface improved usability, making the site more engaging. **[Increased organic traffic]**",
      "**[+35%]** in conversions due to well-structured navigation and strategic design triggers",
      "The new design transformed the **[brand's online presence]**, positioning it as a more modern and tech-forward company",
    ],
  },
];

export const workCaseStudies: WorkCaseStudy[] = caseStudyBase;

export const landingWorks: LandingWork[] = [
  ...caseStudyBase.map((work) => ({
    slug: work.slug,
    title: work.title,
    description: work.shortDescription ?? "",
    url: work.externalProjectLink,
    img: work.heroImage,
    imgMob: work.heroImage,
    did: work.did,
    results: work.results,
  })),
  ...externalOnlyWorks,
];
