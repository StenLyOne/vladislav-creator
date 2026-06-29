import Link from "next/link";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import { landingWorks } from "../../data/works";
import Image from "next/image";

const Works = () => {
  const isMobile = useIsMobile();

  return (
    <section
      className="px-[16px] md:px-[30px] md:pb-[305px] md:pt-[90px] pb-[80px] space-y-[20px]"
      id="cases"
    >
      <div>
        <p>My works</p>
      </div>
      <div className="grid max-[1280px]:grid-cols-1 min-[1280px]:grid-cols-2 grid-rows-auto gap-x-[20px] gap-y-[80px] md:gap-y-[150px]">
        {landingWorks.map((work, index) => {
          const isInternalCase = Boolean(work.slug);
          const linkHref = isInternalCase ? `/works/${work.slug}` : undefined;

          const card = (
            <motion.article
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: !isMobile ? index * 0.1 : 0 }}
              viewport={{ once: true, amount: 0.3 }}

              className={`relative transition-shadow duration-300 hover:shadow-[0px_1px_50px_rgba(0,0,0,0.15)] rounded-[10px] h-auto overflow-hidden ${index % 2 !== 0 ? "min-[1280px]:translate-y-[125px]" : ""
                } ${isInternalCase ? "cursor-pointer" : "cursor-pointer"}`}
            >
              <div className="relative overflow-hidden">
                <div className="h-full md:h-[500px] md:min-h-[400px] xl:h-auto xl:min-h-full 2xl::h-auto">
                  <Image
                    className="w-full h-full object-cover rounded-[10px]"
                    src={!isMobile ? work.img : work.imgMob}
                    alt={work.title}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              <div className="relative p-[15px] space-y-[20px]">
                <div className="space-y-[10px]">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  {isMobile && isInternalCase ? (
                    <div className="flex justify-end">
                      <p className="color-blue font-18 font-bold">(Tap to open case study)</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.article>
          );

          if (isInternalCase) {
            return (
              <Link key={work.title} href={linkHref} className="block">
                {card}
              </Link>
            );
          }

          return <a href={work.url} target="_blank" key={work.title}>{card}</a>;
        })}
      </div>
    </section>
  );
};

export default Works;
