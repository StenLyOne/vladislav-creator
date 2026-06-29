"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Cases", href: "/#cases" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About me", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

const contactMethods = [
  { label: "Telegram", href: "https://t.me/StenLyOne" },
  { label: "Gmail", href: "mailto:stenwlad@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/+48600663072" },
];

const secondaryActionClass =
  "inline-flex items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[14px] py-[10px] text-[14px] leading-[18px] font-semibold color-black shadow-[0_10px_24px_rgba(19,19,19,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#1e2eb8] hover:text-[#1e2eb8]";

const primaryActionClass =
  "inline-flex items-center justify-center rounded-full bg-blue px-[16px] py-[10px] text-[14px] leading-[18px] font-semibold color-white shadow-[0_14px_28px_rgba(30,46,184,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(30,46,184,0.28)]";

const slidingPillClass =
  "group relative inline-flex h-[34px] items-center justify-center overflow-hidden rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[12px] py-[6px] transition-all duration-300 hover:border-[#1e2eb8]";

const SlidingPill = ({ href, label, accentClassName = "color-blue" }) => (
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-[16px] pt-[16px] md:px-[30px] md:pt-[20px]">
      <div className="mx-auto max-w-[1920px] rounded-[22px] border border-[rgba(187,198,218,0.72)] bg-white/30 shadow-[0_18px_44px_rgba(19,19,19,0.08)] backdrop-blur-[18px]">
        <div className="flex items-center justify-between gap-[16px] px-[16px] py-[14px] md:px-[24px]">
          <Link href="/#home" className="shrink-0 color-blue">
            <h4>
              Vladislav.
              <br className="hidden min-[1180px]:block" />
              TheCreator
            </h4>
          </Link>

          <nav className="hidden xl:flex items-center gap-[22px] absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="header-link hover-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-[10px]">
            <Link href="/#cases" className={secondaryActionClass}>
              View works
            </Link>
            <Link href="/#contact" className={primaryActionClass}>
              Start a project
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex min-h-[40px] items-center justify-center rounded-full border border-[rgba(187,198,218,0.92)] bg-white px-[14px] py-[8px] text-[14px] leading-[18px] font-semibold color-black shadow-[0_8px_18px_rgba(19,19,19,0.05)]"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-[rgba(187,198,218,0.72)] px-[16px] pb-[16px] pt-[14px] md:hidden">
            <nav className="grid gap-[8px]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[14px] bg-bg px-[14px] py-[12px] text-[18px] leading-[22px] font-semibold color-black transition-colors duration-200 hover:text-[#1e2eb8]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-[14px] flex flex-wrap gap-[8px]">
              <Link
                href="/#cases"
                className={secondaryActionClass}
                onClick={() => setIsOpen(false)}
              >
                View works
              </Link>
              <Link
                href="/#contact"
                className={primaryActionClass}
                onClick={() => setIsOpen(false)}
              >
                Start a project
              </Link>
            </div>

            <div className="mt-[14px] flex flex-wrap gap-[8px]">
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
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
