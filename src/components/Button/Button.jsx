import "./Button.css";

const Button = ({ children, id }) => {
  const handleSmoothScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={() => {
        handleSmoothScroll(id);
      }}
      className="relative bg-blue color-blue p-[11px] px-[15px] rounded-[10px] button transition-all duration-200 overflow-hidden group"
    >
      {children}
      <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </button>
  );
};

export default Button;
