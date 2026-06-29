import Link from "next/link";

const contactMethods = [
  { label: "Telegram", href: "https://t.me/StenLyOne", accentClassName: "color-blue" },
  { label: "Gmail", href: "mailto:stenwlad@gmail.com", accentClassName: "color-blue" },
  { label: "WhatsApp", href: "https://wa.me/+48600663072", accentClassName: "color-blue" },
];

const secondaryActionClass =
  "inline-flex items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[14px] py-[10px] text-[14px] leading-[18px] font-semibold color-black shadow-[0_10px_24px_rgba(19,19,19,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#1e2eb8] hover:text-[#1e2eb8]";

const primaryActionClass =
  "inline-flex items-center justify-center rounded-full bg-blue px-[16px] py-[10px] text-[14px] leading-[18px] font-semibold color-white shadow-[0_14px_28px_rgba(30,46,184,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(30,46,184,0.28)]";

const slidingPillClass =
  "group relative inline-flex h-[34px] items-center justify-center overflow-hidden rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[12px] py-[6px] transition-all duration-300 hover:border-[#1e2eb8]";

function SlidingPill({ href, label, accentClassName = "color-blue" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={slidingPillClass}>
      <span className="opacity-0 whitespace-nowrap text-[14px] leading-[18px] font-semibold">
        {label}
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-[14px] leading-[18px] font-semibold color-black transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center text-[14px] leading-[18px] font-semibold transition-transform duration-300 translate-y-full group-hover:translate-y-0 ${accentClassName}`}
      >
        {label}
      </span>
    </a>
  );
}

export default function WorkFooter() {
  return (
    <footer className="bg-white  pb-[30px]  md:pb-[40px] px-4 md:px-8">
      <div className="mx-auto  max-w-[1340px] rounded-[24px] bg-bg p-[20px] md:p-[30px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-end md:justify-between">
          <div className="space-y-[14px]">
            <Link href="/#home" className="color-blue block">
              <h4>
                Vladislav.
                <br className="hidden md:block" />
                TheCreator
              </h4>
            </Link>
            <h4 className="max-w-[560px] text-[18px] leading-[136%] font-semibold color-black text-balance">
              Need a product website, UX flow, or development build that feels sharp and sells clearly?
            </h4>
          </div>

          <div className="flex h-full flex-1 flex-col gap-[12px] md:items-end">
            <div className="flex flex-wrap gap-[10px]">
              <Link href="/#cases" className={secondaryActionClass}>
                Back to works
              </Link>
              <Link href="/#contact" className={primaryActionClass}>
                Start a project
              </Link>
            </div>

            <div className="flex min-h-0 flex-1 flex-wrap content-end gap-[8px]">
              <SlidingPill
                href="https://www.upwork.com/freelancers/~01e0b5eb4d34696c94"
                label="Up Work"
                accentClassName="color-green"
              />
              {contactMethods.map((method) => (
                <SlidingPill
                  key={method.label}
                  href={method.href}
                  label={method.label}
                  accentClassName={method.accentClassName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
