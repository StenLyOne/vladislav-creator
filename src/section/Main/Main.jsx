import Button from "../../components/Button/Button";
import arrow from "../../assets/img/arrow.svg";

const Main = ({ setIsOpen }) => {
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
    <main
      className="pt-[70px] px-[16px] md:px-[0px] md:pb-[90px] md:pt-[30px] pb-[100px] relative"
      id="home"
    >
      <div className="main-container">
        <div className="space-y-[80px]">
          <div>
            <p>/ / Avaliable for freelance work</p>
          </div>
          <div className="md:space-y-[240px] space-y-[180px]">
            <div className="flex items-center gap-[20px]">
              <div>
                <p className="color-blue brackets">(</p>
              </div>
              <div className="w-[80px] h-[80px] rounded-[100px] overflow-hidden">
                <img src="src\assets\img\I.png" alt="" />
              </div>
              <div className="">
                <p className="color-blue font-semibold">Human being</p>
                <p className="color-blue font-semibold">UX/UI designer</p>
                <p className="color-blue font-semibold">Full-stack developer</p>
              </div>
              <div>
                <p className="color-blue brackets">)</p>
              </div>
            </div>
            <div className="space-y-[50px]">
              <div>
                {/* <h1 className="uppercase">I create websites for</h1>
                <h1 className="uppercase">businesses that help to</h1>
                <h1 className="uppercase">become market leaders.</h1> */}
                <h1 className="uppercase">
                  I create websites for
                  <br className="h1-mob hidden lg:block md:hidden sm:hidden" />
                  businesses that help to
                  <br className="h1-mob hidden lg:block md:hidden sm:hidden" />
                  become market leaders.
                </h1>
              </div>
              <div className="flex gap-[5px]">
                <div onClick={() => setIsOpen(true)}>
                  <Button>Let’s craft your perfect website</Button>
                </div>
                <button
                  onClick={() => handleSmoothScroll("cases")}
                  className="relative bg-blue color-blue p-[11px] px-[15px] rounded-[10px] button transition-all duration-200 overflow-hidden group"
                >
                  <div className="w-[13px] h-[22px]"></div>
                  <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 group-hover:-translate-y-full">
                    <img src={arrow} alt="" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    <img src={arrow} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
