import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { sendFormData } from "../../utils/api";
import Modal from "../../components/modal/modal";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [popupStatus, setPopupStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [focused, setFocused] = useState({
    name: { value: "", bullet: false },
    contact: { value: "", bullet: false },
    budget: { value: "" },
    message: { value: "" },
  });

  const [valid, setValid] = useState({
    name: true,
    contact: true,
  });

  const budgetOptions = [
    "$300-800",
    "$800-1200",
    "$1200-2000",
    "$2000-3000",
    "$3000+",
  ];
  const contactMethods = ["Telegram", "Gmail", "WhatsApp"];

  const handleSubmit = async () => {


    const newValidState = {
      name: focused.name.value.trim() !== "",
      contact: focused.contact.value.trim() !== "",
    };

    setValid(newValidState);

    if (!newValidState.name || !newValidState.contact) {
      return; // Не отправляем, если поля не заполнены
    }

    try {
      setPopupStatus("Please wait...");
      setShowPopup(true);
      const result = await sendFormData({
        name: focused.name.value,
        contact: focused.contact.value,
        budget: focused.budget.value || "",
        message: focused.message.value || "",
      });

      if (result.success) {
        setPopupStatus("Successfully sent!");
        setFocused({
          name: { value: "" },
          contact: { value: "" },
          budget: { value: "" },
          message: { value: "" },
        });
      } else {
        setPopupStatus("❌ Failed to send: " + result.message);
      }
    } catch (error) {
      setPopupStatus("❌ Failed to send. Please try again.",);
    }

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="mx-[16px] md:mx-[0px] md:mr-[30px]">
      <div
        className="max-w-[800px] mx-auto mt-[100px] md:mt-[180px] mb-[90px]"
        id="contact"
      >
        {showPopup && <Modal message={popupStatus} />}
        <h2 className="text-5xl font-bold text-start md:text-center mb-[40px] md:mb-[100px]">
          CONTACT
        </h2>

        <div>
          {/* Поля ввода */}
          <div className="grid sm:grid-cols-2 gap-4 gap-y-[30px] sm:gap-y-[0px]">
            {/* Name */}
            <div className="relative">
              <label
                className={`absolute font-bold pointer-events-none transition-all duration-200
                ${focused.name.bullet || focused.name.value
                    ? "text-[10px] text-gray-500 -top-3"
                    : "text-[18px] text-black top-1/2 -translate-y-1/2"
                  }`}
              >
                Name
              </label>
              <input
                type="text"
                value={focused.name.value}
                onChange={(e) =>
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, value: e.target.value },
                  }))
                }
                onFocus={() => {
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, bullet: true },
                  }));
                  setValid((prev) => ({
                    ...prev,
                    name: true,
                  }));
                }}
                onBlur={() =>
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, bullet: false },
                  }))
                }
                className={`w-full h-[43px] border-b-2 outline-none text-lg py-[10px] transition-all duration-200 
                ${focused.name.value !== "" ? "border-black" : "border-gray-300"
                  } 
                ${!valid.name ? "border-red-500" : ""}`}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-[0px] w-[14px] h-[14px] rounded-full flex justify-center items-center ${valid.name === false ? "bg-red" : "bg-bg"
                  }`}
              >
                <img
                  src={
                    valid.name === true && focused.name.value !== ""
                      ? "/assets/img/valid.svg"
                      : "/assets/img/invalid.svg"
                  }
                  alt=""
                />
              </div>
              {!valid.name && (
                <p className="absolute left-[0px] bottom-[-20px] text-red-500">
                  Name is required.
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="relative">
              <label
                className={`absolute font-bold pointer-events-none transition-all duration-200
                ${focused.contact.bullet || focused.contact.value
                    ? "text-[10px] text-gray-500 -top-3"
                    : "text-[18px] text-black top-1/2 -translate-y-1/2"
                  }`}
              >
                Where you can be contacted
              </label>
              <input
                type="text"
                value={focused.contact.value}
                onChange={(e) =>
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, value: e.target.value },
                  }))
                }
                onFocus={() => {
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, bullet: true },
                  }));
                  setValid((prev) => ({
                    ...prev,
                    contact: true,
                  }));
                }}
                onBlur={() => {
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, bullet: false },
                  }));
                }}
                className={`w-full h-[43px] border-b-2 outline-none text-lg py-[10px] transition-all duration-200 
                ${focused.contact.value !== ""
                    ? "border-black"
                    : "border-gray-300"
                  } 
                ${!valid.contact ? "border-red-500" : ""}`}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-[0px] w-[14px] h-[14px] rounded-full flex justify-center items-center ${valid.name === false ? "bg-red" : "bg-bg"
                  }`}
              >
                <img
                  src={
                    valid.contact === true && focused.contact.value !== ""
                      ? "/assets/img/valid.svg"
                      : "/assets/img/invalid.svg"
                  }
                  alt=""
                />
              </div>
              {!valid.contact && (
                <p className="absolute left-[0px] bottom-[-20px] text-red-500">
                  Contact is required
                </p>
              )}
            </div>
          </div>

          {/* Выбор бюджета */}
          <div className="my-[30px]">
            <h4 className="text-lg font-medium mb-[10px]">
              Choose your budget:
            </h4>
            <div
              className="pb-[20px] md:pb-[0px] flex max-[520px]:overflow-x-scroll whitespace-nowrap scrollbar-show"
              style={{
                scrollbarWidth: "thin" /* Firefox */,
                scrollbarColor:
                  "#1E2EB8 #E8EDF6" /* ползунок (синий) и фон (светлый) */,
                scrollbarGutter: "stable",
              }}
            >
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    setFocused((prev) => ({
                      ...prev,
                      budget: { value: option },
                    }))
                  }
                  className={`relative  px-[12px] py-[6px] md:px-[10px] md:py-[4px] border rounded-full transition-all duration-200 md:overflow-hidden flex items-center justify-center group 
                ${focused.budget.value === option
                      ? "border-blue-800 text-blue-800 font-semibold"
                      : "border-gray-300 text-black hover:border-gray-500 font-semibold"
                    }`}
                >
                  {/* Невидимый текст для фиксации размера */}
                  <p
                    className={` ${!isMobile ? "opacity-0 whitespace-nowrap" : ""
                      } ${focused.budget.value === option
                        ? "color-blue font-semibold"
                        : "color-black font-semibold"
                      }`}
                  >
                    {option}
                  </p>

                  {/* Черный текст (уходит вверх при ховере) */}
                  {!isMobile && (
                    <>
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 
                  ${focused.budget.value === option
                            ? "text-blue-800" // Если кнопка активна, текст сразу синий
                            : "text-black group-hover:-translate-y-full"
                          }`}
                      >
                        {option}
                      </span>

                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full 
                  ${focused.budget.value === option
                            ? "text-blue-800" // Если кнопка активна, текст сразу синий
                            : "text-blue-800 group-hover:translate-y-0"
                          }`}
                      >
                        {option}
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Сообщение */}
          <div className="mb-[30px]">
            <h4 className="text-lg font-medium">
              A few words about the project{" "}
              <span className="color-grey">(Optional)</span>
            </h4>
            <textarea
              value={focused.message.value}
              onChange={(e) =>
                setFocused((prev) => ({
                  ...prev,
                  message: { value: e.target.value },
                }))
              }
              className={`w-full border-b-2 focus:border-black outline-none text-lg py-[10px] pr-[10px] transition-all duration-200 
              ${focused.message.value !== ""
                  ? "border-black"
                  : "border-gray-300"
                }`}
              rows="3"
            ></textarea>
          </div>

          {/* Кнопка */}
          <div onClick={handleSubmit}>
            <Button>Contact us</Button>
          </div>
        </div>
      </div>
      {/* Способы связи */}
      <div className="md:flex space-y-[10px] md:space-y-[0px] items-center mt-[60px] mb-[100px] md:mt-[120px] md:mb-[60px]">
        {/* Левая часть */}
        <div className="flex items-center space-x-[10px] min-w-max">
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
    </section>
  );
};

export default Contact;
