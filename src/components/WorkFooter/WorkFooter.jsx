import Link from "next/link";
import { UPWORK_URL } from "../../lib/contact";

const secondaryActionClass =
  "inline-flex items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[14px] py-[10px] text-[14px] leading-[18px] font-semibold color-black shadow-[0_10px_24px_rgba(19,19,19,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#1e2eb8] hover:text-[#1e2eb8]";

const primaryActionClass =
  "inline-flex items-center justify-center rounded-full bg-blue px-[16px] py-[10px] text-[14px] leading-[18px] font-semibold color-white shadow-[0_14px_28px_rgba(30,46,184,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(30,46,184,0.28)]";

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
              <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className={primaryActionClass}>
                Contact on Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
