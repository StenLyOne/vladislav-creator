import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRelatedWorks,
  getWorkCaseStudyBySlug,
  getWorkCaseStudySlugs,
} from "../../../lib/works";
import Button from "../../../components/Button/Button";
import type {
  WorkCaseStudy,
  WorkFrameworkSection,
  WorkMedia,
} from "../../../data/works";

const CONTENT_TEXT_CLASS =
  "text-[14px] leading-[18px] font-semibold color-black normal-case text-balance";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return getWorkCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkCaseStudyBySlug(slug);

  if (!work) {
    return {
      title: "Work not found",
    };
  }

  return {
    title: `${work.title} | Work`,
    description: work.shortDescription,
  };
}

function HighlightedText({ text }: { text: string }) {
  return text.split(/(\*\*\[.*?\]\*\*)/).map((part, index) =>
    /\*\*\[(.*?)\]\*\*/.test(part) ? (
      <span key={`${part}-${index}`} className="color-black">
        {part.replace(/\*\*\[|\]\*\*/g, "")}
      </span>
    ) : (
      part
    )
  );
}

function isWorkMedia(value: unknown): value is WorkMedia {
  if (!value || typeof value !== "object") {
    return false;
  }

  const media = value as WorkMedia;
  return Boolean(media.url) && (media.type === "image" || media.type === "video");
}

function getSectionMedia(section: WorkFrameworkSection): WorkMedia[] {
  const mediaItems = Array.isArray(section.media)
    ? section.media
    : section.media
      ? [section.media]
      : [];

  return mediaItems.filter(isWorkMedia).slice(0, 2);
}

function buildFrameworkSections(work: WorkCaseStudy): WorkFrameworkSection[] {
  if (Array.isArray(work.frameworkSections) && work.frameworkSections.length > 0) {
    return work.frameworkSections;
  }

  const challengeParagraphs = work.storySections?.[0]?.paragraphs || [
    "The previous experience did not clearly support decision-making and users dropped before reaching a meaningful conversion point.",
  ];

  const strategyParagraphs = work.storySections?.[1]?.paragraphs || [
    "The solution was structured around clarity first: faster understanding, stronger trust signals, and lower friction to action.",
  ];

  const outcomeParagraphs = work.storySections?.[2]?.paragraphs || [
    "The final flow supports both business outcomes and user confidence through clear structure and content hierarchy.",
  ];

  const isMobileProduct = work.category.toLowerCase().includes("mobile");
  const businessGoal = isMobileProduct
    ? "Increase qualified activation and improve progression from first session to committed usage and retention signals."
    : "Increase qualified inquiries and reduce drop-off before contact actions across key conversion touchpoints.";

  const solutionParagraph = isMobileProduct
    ? "I designed and structured a product flow that connects discovery, intent filtering, decision confidence, and post-action guidance in one consistent experience. The interface system was built to reduce friction, make next steps obvious, and support long-term feature scaling without visual inconsistency."
    : "I designed and built a conversion-focused website flow with clearer information architecture, stronger proof hierarchy, and cleaner action paths. The frontend implementation emphasized fast scanning, predictable interactions, and responsive consistency, so users can understand value quickly and move to inquiry with less friction.";

  const tools = isMobileProduct
    ? "Figma, Prototyping tools, UX writing framework, Product documentation"
    : "Figma, Next.js, Tailwind CSS, Framer Motion, Content architecture docs";
  const disciplines = Array.isArray(work.disciplines) ? work.disciplines : [];
  const productContextParagraphs = [
    `${work.title} is a ${work.category.toLowerCase()} product for ${work.clientName}, created for users who need clearer decisions and faster progress to action.`,
  ];

  if (work.overviewText) {
    productContextParagraphs.push(work.overviewText);
  }

  return [
    {
      id: "product-context",
      title: "Product context",
      paragraphs: productContextParagraphs,
    },
    {
      id: "problem",
      title: "Problem",
      paragraphs: challengeParagraphs,
    },
    {
      id: "proof-research",
      title: "Proof / Research",
      paragraphs: [
        "Reviewed current user flow end-to-end, including first impression, navigation decisions, content depth, and conversion entry points.",
        "Benchmarked competitor patterns, interpreted stakeholder/client feedback, and documented friction points that were blocking business outcomes.",
      ],
    },
    {
      id: "goal",
      title: "Goal",
      paragraphs: [businessGoal],
    },
    {
      id: "strategy",
      title: "Strategy",
      paragraphs: strategyParagraphs,
    },
    {
      id: "solution",
      title: "Solution",
      paragraphs: [solutionParagraph],
    },
    {
      id: "key-areas",
      title: "Key areas",
      bullets: [
        "Discovery",
        "Product pages",
        "CTAs / inquiry flow",
        "Trust / content hierarchy",
        "Visual system",
        "Responsive / performance / CMS",
      ],
    },
    {
      id: "impact",
      title: "Impact",
      paragraphs: [
        "Users can understand offer relevance faster, evaluate proof with less effort, and reach high-intent actions with fewer hesitations.",
        outcomeParagraphs[0],
      ],
    },
    {
      id: "results",
      title: "Results",
      richBullets: work.results,
      paragraphs: [
        "Where final analytics are still being collected, the expected impact is based on benchmarked conversion patterns and reduced decision friction in the new flow.",
      ],
    },
    {
      id: "role-tools",
      title: "Role / Tools",
      paragraphs: [`Role: ${disciplines.join(", ")}`, `Tools: ${tools}`],
    },
  ];
}

export default async function WorkDetailsPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkCaseStudyBySlug(slug);

  if (!work) {
    notFound();
  }

  const relatedWorks = getRelatedWorks(work.slug, 3);
  const allSections = buildFrameworkSections(work);
  const visualSections = allSections
    .filter(
      (section) =>
        section.id !== "key-areas" &&
        section.id !== "role-team-tools" &&
        section.id !== "role-tools"
    )
    .map((section) => ({
      ...section,
      mediaItems: getSectionMedia(section),
    }));

  const heroTitle = work.heroOutcomeTitle || work.subtitle || work.title;
  const roleLine = Array.isArray(work.role) ? work.role : [];
  const descriptionSummary = work.shortDescription || work.overviewText || "";

  return (
    <main className="bg-white flex flex-col md:flex-row w-auto relative">
      <div className="w-full h-auto md:w-1/5 z-[6] md:z-[9]">
        <aside className="fixed md:w-[20%] w-full h-auto bg-white z-50 md:h-screen">
          <div className="h-[6.32vh] md:h-auto p-5 md:p-[30px] flex justify-between items-center md:flex-col md:items-start">
            <Link href="/" className="color-blue">
              <h4>
                Vladislav.
                <br className="hidden md:block xl:hidden" />
                TheCreator
              </h4>
            </Link>


          </div>

          <div className="flex flex-col px-[30px] md:pt-[90px] space-y-[10px] gap-2">
            <Link href="/#cases" className="header-link flex justify-between items-center w-max gap-2 max-md:text-[14px]! max-md:tracking-[0px]!">
              <svg className="rotate-" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12.5C2 12.8117 2.13746 13.1092 2.38488 13.35L9.47766 20.6458C9.72509 20.8867 10 21 10.2887 21C10.8935 21 11.3608 20.5325 11.3608 19.895C11.3608 19.5975 11.2646 19.3 11.0584 19.1017L9.16151 17.0758L5.24399 13.4492L7.9244 13.6475H20.9003C21.5464 13.6475 22 13.1658 22 12.5C22 11.8342 21.5464 11.3525 20.9003 11.3525H7.9244L5.25773 11.5508L9.16151 7.92417L11.0584 5.89833C11.2646 5.7 11.3608 5.4025 11.3608 5.105C11.3608 4.4675 10.8935 4 10.2887 4C10 4 9.72509 4.11333 9.47766 4.35417L2.38488 11.65C2.13746 11.8908 2 12.1883 2 12.5Z" fill="#000" />
              </svg>
              Back to works
            </Link>
            {work.externalProjectLink ? (
              <a className="max-md:hidden color-blue font-bold! flex gap-2 justify-between items-center w-max" href={work.externalProjectLink} target="_blank">Fisit Site
                <svg className="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12.5C2 12.8117 2.13746 13.1092 2.38488 13.35L9.47766 20.6458C9.72509 20.8867 10 21 10.2887 21C10.8935 21 11.3608 20.5325 11.3608 19.895C11.3608 19.5975 11.2646 19.3 11.0584 19.1017L9.16151 17.0758L5.24399 13.4492L7.9244 13.6475H20.9003C21.5464 13.6475 22 13.1658 22 12.5C22 11.8342 21.5464 11.3525 20.9003 11.3525H7.9244L5.25773 11.5508L9.16151 7.92417L11.0584 5.89833C11.2646 5.7 11.3608 5.4025 11.3608 5.105C11.3608 4.4675 10.8935 4 10.2887 4C10 4 9.72509 4.11333 9.47766 4.35417L2.38488 11.65C2.13746 11.8908 2 12.1883 2 12.5Z" fill="#1e2eb8" />
                </svg>
              </a>
            ) : null}
          </div>
        </aside>
      </div>

      <div className="md:w-4/5 z-[5] md:z-[10]">
        <div className="pt-[80px] md:pt-[30px] px-[16px] md:px-[0px] md:pr-[30px] pb-[100px] space-y-[20px]">
          <section className="space-y-[20px] rounded-[10px] bg-bg p-[20px] md:space-y-[30px] md:p-[30px] ">
            <div className="space-y-[10px]">
              <h1 className={CONTENT_TEXT_CLASS}>{heroTitle}</h1>
              {/* <p className={CONTENT_TEXT_CLASS}>{heroTags.join(" / ")}</p> */}
            </div>

            <div className="grid gap-[12px] md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
              <article className="rounded-[10px] bg-white p-[16px] md:p-[20px] space-y-[14px]">
                <div className="space-y-[6px]">
                  <p className="text-[12px] leading-[16px] font-semibold color-grey normal-case">
                    Role
                  </p>
                  {roleLine.map((e, i) => (
                    <p key={i} className={CONTENT_TEXT_CLASS}>{e}</p>))}
                </div>

                <div className="space-y-[6px]">
                  <p className="text-[12px] leading-[16px] font-semibold color-grey normal-case">
                    Year
                  </p>
                  <p className={CONTENT_TEXT_CLASS}>{work.year}</p>
                </div>

                <div className="space-y-[6px]">
                  <p className="text-[12px] leading-[16px] font-semibold color-grey normal-case">
                    Description
                  </p>
                  <p className={CONTENT_TEXT_CLASS}>{descriptionSummary}</p>
                </div>

                {work.externalProjectLink ? (
                  <div className="pt-[6px]">
                    <Button
                      href={work.externalProjectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </Button>
                  </div>
                ) : null}
              </article>

              <div className="overflow-hidden rounded-[10px] bg-white">
                <img
                  src={work.heroImage}
                  alt={`${work.title} hero`}
                  className="h-[260px] md:h-full md:min-h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </section>

          {visualSections.map((section) => (
            <section key={section.id} className={`rounded-[10px] max-md:w-screen max-md:-translate-x-4 bg-bg max-md:px-4 max-md:pb-2   pt-[20px] md:p-[20px] md:p-[30px] space-y-[14px] ${section.mediaItems.length === 1 ? "md:flex gap-4" : ""}`}>
              <article className={`space-y-[10px] w-full`}>
                <h3 className={CONTENT_TEXT_CLASS}>{section.title}</h3>


                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[18px]! leading-[136%]! text-balance"
                  >
                    <span className=" mr-[8px] color-blue">●</span>
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <div className="space-y-[8px] pt-[4px]">
                    {section.bullets.map((bullet) => (
                      <p key={bullet} className={CONTENT_TEXT_CLASS}>
                        <span className="text-[14px] mr-[8px]">●</span>
                        {bullet}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.richBullets ? (
                  <div className="space-y-[8px] pt-[4px]">
                    {section.richBullets.map((bullet, index) => (
                      <p key={`${section.id}-rich-${index}`} className={CONTENT_TEXT_CLASS}>
                        <span className="text-[14px] mr-[8px]">●</span>
                        <HighlightedText text={bullet} />
                      </p>
                    ))}
                  </div>
                ) : null}
              </article>

              {section.mediaItems.length ? (
                <div className={`grid  md:gap-[12px] max-md:w-screen max-md:-translate-x-4.5  ${section.mediaItems.length > 1 ? " md:grid-cols-2" : " md:max-w-1/2"} `}>
                  {section.mediaItems.map((media, index) => (
                    <div
                      key={`${section.id}-${media.url}-${index}`}
                      className="mt-2 overflow-hidden rounded-[10px] md:rounded-[10px]"
                    >
                      {media.type === "video" ? (
                        <video
                          src={media.url}
                          className=" object-cover w-full aspect-auto"
                          muted
                          autoPlay
                          loop
                        />
                      ) : (
                        <img
                          src={media.url}
                          alt={`${section.title} visual ${index + 1}`}
                          className={` ${section.mediaItems.length > 1 ? " aspect-auto" : "aspect-auto "} bg-white h-full w-full object-cover`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}



          <section className="space-y-[16px] rounded-[10px] bg-white md:space-y-[20px] mt-10">
            <div className="flex items-center justify-between">
              <h3 className={CONTENT_TEXT_CLASS}>Related works</h3>
              <Link href="/#cases" className="hover-link font-medium">
                Return to all projects
              </Link>
            </div>

            <div className="grid gap-[12px] md:grid-cols-3">
              {relatedWorks.map((relatedWork) => (
                <Link
                  key={relatedWork.slug}
                  href={`/works/${relatedWork.slug}`}
                  className="space-y-[8px] overflow-hidden rounded-[10px] bg-bg p-[8px]"
                >
                  <img
                    src={relatedWork.heroImage}
                    alt={relatedWork.title}
                    className="h-[200px] w-full rounded-[8px] object-cover"
                  />
                  <div className="space-y-[4px] px-[4px] pb-[6px]">
                    <h4 className={CONTENT_TEXT_CLASS}>{relatedWork.title}</h4>
                    <p className={CONTENT_TEXT_CLASS}>{relatedWork.category}</p>

                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
