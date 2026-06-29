import type { Metadata } from "next";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import sharp from "sharp";
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
const BODY_COPY_CLASS =
  "text-[18px] leading-[136%] font-semibold color-black text-balance";
const SECONDARY_ACTION_CLASS =
  "inline-flex items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[14px] py-[10px] text-[14px] leading-[18px] font-semibold color-black shadow-[0_10px_24px_rgba(19,19,19,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#1e2eb8] hover:text-[#1e2eb8]";
const META_PILL_CLASS =
  "inline-flex items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[12px] py-[6px] text-[12px] leading-[16px] font-semibold color-grey";
const PUBLIC_DIR = path.resolve(process.cwd(), "public");

type ImageDimensions = {
  width: number;
  height: number;
};

const FALLBACK_IMAGE_DIMENSIONS: ImageDimensions = {
  width: 1600,
  height: 900,
};

type WorkMediaWithDimensions = WorkMedia & {
  dimensions?: ImageDimensions | null;
};

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

async function getLocalImageDimensions(
  src: string
): Promise<ImageDimensions | null> {
  if (!src.startsWith("/") || src.startsWith("//")) {
    return null;
  }

  const [pathname] = src.split(/[?#]/);
  const filePath = path.resolve(PUBLIC_DIR, pathname.replace(/^\/+/, ""));

  if (!filePath.startsWith(`${PUBLIC_DIR}${path.sep}`)) {
    return null;
  }

  try {
    const metadata = await sharp(filePath).metadata();

    if (metadata.width && metadata.height) {
      return {
        width: metadata.width,
        height: metadata.height,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function ResponsiveImage({
  src,
  alt,
  className,
  dimensions,
  priority,
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  dimensions?: ImageDimensions | null;
  priority?: boolean;
  sizes: string;
}) {
  const imageDimensions = dimensions ?? FALLBACK_IMAGE_DIMENSIONS;

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={imageDimensions.width}
      height={imageDimensions.height}
      priority={priority}
      sizes={sizes}
    />
  );
}

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

  const allSections = buildFrameworkSections(work);
  const [heroImageDimensions, visualSections] = await Promise.all([
    getLocalImageDimensions(work.heroImage),
    Promise.all(
      allSections
        .filter(
          (section) =>
            section.id !== "key-areas" &&
            section.id !== "role-team-tools" &&
            section.id !== "role-tools"
        )
        .map(async (section) => {
          const mediaItems: WorkMediaWithDimensions[] = await Promise.all(
            getSectionMedia(section).map(async (media) => {
              if (media.type !== "image") {
                return media;
              }

              return {
                ...media,
                dimensions: await getLocalImageDimensions(media.url),
              };
            })
          );

          return {
            ...section,
            mediaItems,
          };
        })
    ),
  ]);
  const relatedWorks = getRelatedWorks(work.slug, 3);

  const heroTitle = work.heroOutcomeTitle || work.subtitle || work.title;
  const roleLine = Array.isArray(work.role) ? work.role : [];
  const descriptionSummary = work.shortDescription || work.overviewText || "";

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-[16px] pb-[100px] pt-[110px] md:px-[30px] md:pb-[120px] md:pt-[134px]">
        <div className="space-y-[20px]">
          <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
            <Link href="/#cases" className={SECONDARY_ACTION_CLASS}>
              Back to works
            </Link>

            <div className="flex flex-wrap gap-[8px]">
              <span className={META_PILL_CLASS}>Case study</span>
              <span className={META_PILL_CLASS}>{work.category}</span>
              <span className={META_PILL_CLASS}>{work.year}</span>
            </div>
          </div>

          <section className="space-y-[20px] rounded-[10px] bg-bg p-[20px] md:space-y-[30px] md:p-[30px] ">
            <div className="space-y-[10px]">
              <h1 className="max-w-[980px] color-black text-balance">{heroTitle}</h1>
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
                    Client
                  </p>
                  <p className={CONTENT_TEXT_CLASS}>{work.clientName}</p>
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
                      Visit site
                    </Button>
                  </div>
                ) : null}
              </article>

              <div className="overflow-hidden rounded-[10px] bg-white">
                <ResponsiveImage
                  src={work.heroImage}
                  alt={`${work.title} hero`}
                  className="h-[260px] md:h-full md:min-h-[420px] w-full object-cover"
                  dimensions={heroImageDimensions}
                  priority
                  sizes="(min-width: 768px) 64vw, 100vw"
                />
              </div>
            </div>
          </section>

          {visualSections.map((section) => (
            <section key={section.id} className={`rounded-[10px] max-md:w-screen max-md:-translate-x-4 bg-bg max-md:px-4 max-md:pb-2   pt-[20px] md:p-[20px] md:p-[30px] space-y-[14px] ${section.mediaItems.length === 1 ? "md:flex justify-between gap-4" : ""}`}>
              <article className={`space-y-[10px] w-full ${section.mediaItems.length === 1 ? "md:w-1/2 aspect-auto" : ""} `}>
                <h3 className="color-black text-balance">{section.title}</h3>


                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={BODY_COPY_CLASS}
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
                  <div className="space-y-[8px] pt-[4px] ">
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
                <div className={`grid md:gap-[12px] max-md:w-screen max-md:-translate-x-4 ${section.mediaItems.length > 1 ? "md:grid-cols-2" : "md:max-w-[50%]"} `}>
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
                        <ResponsiveImage
                          src={media.url}
                          alt={`${section.title} visual ${index + 1}`}
                          className="aspect-auto bg-white w-full object-cover"
                          dimensions={media.dimensions}
                          sizes="(min-width: 768px) 40vw, 100vw"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <section className="space-y-[16px] rounded-[10px] bg-white md:space-y-[20px] mt-10">
            <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
              <h3 className="color-black text-balance">Related works</h3>
              <Link href="/#cases" className={SECONDARY_ACTION_CLASS}>
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
                    className="aspect-square w-full rounded-[8px] object-cover"
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
