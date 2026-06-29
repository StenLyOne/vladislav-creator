"use client";

import "./Button.css";

const buttonClassName =
  "relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-[14px] bg-blue p-[11px] px-[16px] color-blue button shadow-[0_14px_28px_rgba(30,46,184,0.22)] transition-all duration-200 group hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(30,46,184,0.28)]";

const ButtonContent = ({ children }) => (
  <>
    {children}
    <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 group-hover:-translate-y-full">
      {children}
    </span>
    <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
      {children}
    </span>
  </>
);

/**
 * @param {{
 *   children: import("react").ReactNode;
 *   id?: string;
 *   href?: string;
 *   target?: string;
 *   rel?: string;
 * }} props
 */
const Button = ({
  children,
  id = undefined,
  href = undefined,
  target = undefined,
  rel = undefined,
}) => {
  const handleSmoothScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={buttonClassName}
      >
        <ButtonContent>{children}</ButtonContent>
      </a>
    );
  }

  return (
    <button
      onClick={() => {
        handleSmoothScroll(id);
      }}
      className={buttonClassName}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
};

export default Button;
