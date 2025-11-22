import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const contactMethods = ["Telegram", "Gmail", "WhatsApp"];
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSmoothScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 150; // Дополнительный отступ вниз
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const elementHeight = target.offsetHeight;
      const offsetPosition =
        elementPosition + elementHeight / 2 - window.innerHeight / 2 + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <header className="fixed md:w-[20%] w-full h-auto bg-white z-50 md:h-screen">
      <div className="h-[6.32vh] md:h-auto p-5 md:p-[30px] flex justify-between items-center md:flex-col md:items-start">
        {/* Логотип */}
        <h4 className="color-blue">
          Vladislav.
          <br className="hidden md:block xl:hidden" />
          TheCreator
        </h4>

        {/* Бургер-кнопка */}
        {!isOpen ? (
          <button
            className="max-md:block hidden flex flex-col space-y-1 w-[24px] h-[24px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-[2px] bg-black"></div>
            <div className="w-5 h-[2px] bg-black"></div>
            <div className="w-5 h-[2px] bg-black"></div>
          </button>
        ) : (
          <button
            className="color-black w-auto flex justify-end items-center gap-[8px]"
            style={{ fontSize: "18px" }}
            onClick={() => setIsOpen(false)}
          >
            Close
            <span className="w-[16px] h-[16px]">
              <img
                className="w-[16px] h-[16px]"
                src="src\assets\img\closeBlack.svg"
                alt=""
              />
            </span>
          </button>
        )}
      </div>

      {/* Меню */}
      <nav
        className={`absolute md:relative flex flex-col items-start justify-center px-[16px] md:px-[0px] md:pt-[90px] md:pl-[30px] h-[93.62vh] md:h-auto w-full md:w-full bg-white transition-transform duration-300 ease-in-out md:flex md:translate-y-0 ${
          isOpen ? "translate-y-0" : "-translate-y-[-100%]"
        }`}
      >
        <ul className="flex text-start flex-col space-y-[20px] md:p-0 md:space-y-[5px] ">
          {[
            { label: "Home", link: "#home" },
            { label: "Cases", link: "#cases" },
            { label: "Testimonials", link: "#testimonials" },
            {
              label: "Services",
              action: () => handleSmoothScroll("testimonials"),
            },
            { label: "About me", link: "#about" },
            { label: "FAQ", link: "#faq" },
            { label: "Contacts", link: "#contact" },
          ].map((item, index) => (
            <li key={index} className="header-link hover-link">
              {item.link ? (
                <a href={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <a
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className="bg-transparent border-none p-0 m-0"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="w-full md:hidden space-y-[10px] md:space-y-[0px] items-center mt-[60px] mb-[30px] md:mt-[120px] md:mb-[60px]">
          {/* Левая часть */}
          <div className="w-full flex items-center justify-between space-x-[10px] min-w-max">
            <p>You can contact me on</p>
            <a
              href="https://www.upwork.com/freelancers/~01e0b5eb4d34696c94"
              target="_blank"
            >
              <button className="relative px-[10px] py-[4px] border rounded-full transition-all duration-200 border-green-600 overflow-hidden h-auto flex items-center justify-center group">
                <p className="opacity-0 whitespace-nowrap"> Up Work</p>

                <span className="absolute inset-0 color-green flex items-center justify-center color-black transition-transform duration-300 group-hover:-translate-y-full">
                  Up Work
                </span>

                <span className="absolute inset-0 flex items-center justify-center color-green transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  Up Work
                </span>
              </button>
            </a>
          </div>

          {/* Разделительная линия */}
          <div className="flex-grow flex items-center px-[20px]">
            <div className="flex-1 h-[1px] bg-stroke"></div>
            <p className="color-stroke mx-[10px]">or</p>
            <div className="flex-1 h-[1px] bg-stroke"></div>
          </div>

          {/* Правая часть */}
          <div className="flex min-w-max">
            {contactMethods.map((method) => (
              <a
                key={method}
                href={
                  method === "Telegram"
                    ? "https://t.me/StenLyOne"
                    : method === "Gmail"
                    ? "mailto:stenwlad@gmail.com"
                    : "https://wa.me/+48600663072"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  key={method}
                  className="relative px-[12px] py-[6px] md:px-[10px] md:py-[4px] border rounded-full transition-all duration-200 hover:border-blue-800 overflow-hidden h-auto flex items-center justify-center group"
                >
                  <p className="opacity-0 whitespace-nowrap">{method}</p>

                  <span className="absolute inset-0 flex items-center justify-center color-black transition-transform duration-300 group-hover:-translate-y-full">
                    {method}
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center color-blue transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {method}
                  </span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
