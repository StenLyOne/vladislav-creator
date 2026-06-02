import "./Button.css";

const buttonClassName =
  "relative inline-block bg-blue color-blue p-[11px] px-[15px] rounded-[10px] button transition-all duration-200 overflow-hidden group";

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
