import Button from "../../components/Button/Button";

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
      className="pt-[70px] px-[16px] md:px-[0px] md:pb-[90px] md:pt-[30px] pb-[100px] relative  overflow-hidden"
      id="home"
    >
      <div className="absolute left-1/2 top-0 right-0 bottom-0 h-full  -translate-x-1/2 w-screen  pointer-events-none z-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(to bottom, #1E2EB8 0%, #424EB0 35%, #5781BE 50%, #87A1C4 63%, #C1D3E6 79%, #FFFFFF 100%)",
          }}
        />

      </div>

      <div className="main-container relative z-[1]">
        <div className="space-y-[80px]">
          <div>
            <p className="text-white mx-auto text-center">/ / Avaliable for freelance work</p>
          </div>
          <div className="md:space-y-[240px] flex flex-col items-center space-y-[180px]">
            <div className="flex items-center gap-[20px] z-1000">
              <div>
                <p className="text-white brackets">(</p>
              </div>
              <div className="w-[80px] h-[80px] rounded-[100px] ">
                <img src="/assets/img/I.png" alt="" />
              </div>
              <div className="">
                <p className="text-white font-semibold">Human being</p>
                <p className="text-white font-semibold">UX/UI designer</p>
                <p className="text-white font-semibold">Full-stack developer</p>
              </div>
              <div>
                <p className="text-white brackets">)</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between max-w-[1100px]">

                <div className="relative w-[200px] h-1 z-100">
                  <div className="light-ray z-100 rotate-149 -bottom-40 -left-110"></div>
                  <div className="light-ray z-100 rotate-149 -bottom-40 -left-80"></div>
                  <img src={"/assets/hero/flash-1.png"} className="absolute  z-3 min-w-[307px] w-full min-h-[137px]  -bottom-15 -left-5" alt="flash" />
                  <div className="min-w-[463px] min-h-[400px] z-1 bg-white blur-[150px] -bottom-60 -left-20 absolute rounded-2xl"></div>
                </div>

                <div className="relative w-[200px] h-1 z-100  max-md:hidden ">
                  <div className="light-ray z-100 rotate-30 -bottom-40 -right-25"></div>
                  <div className="light-ray z-100 rotate-30 -bottom-40 -right-60"></div>
                  <div className="light-ray z-100 rotate-35 -bottom-40 -right-110"></div>
                  <img src={"/assets/hero/flash.png"} className="absolute z-3 blur-[15px] min-w-[492px] min-h-[159px] -bottom-15 right-0" alt="flash" />
                  <div className="min-w-[463px] z-1 min-h-[400px] bg-white blur-[150px] -bottom-80 right-0 absolute rounded-2xl"></div>
                </div>

              </div>
              <div className="z-101 relative">
                {/* <h1 className="uppercase">I create websites for</h1>
                <h1 className="uppercase">businesses that help to</h1>
                <h1 className="uppercase">become market leaders.</h1> */}
                <h1
                  className="uppercase text-center max-w-[1100px] "
                  style={{
                    background:
                      "linear-gradient(to bottom, #1E2EB8 0%, #2C3AB0 24%, #4551B1 40%, #515BA6 62%, #676FB1 79%, #676FB1 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Turn business goals into a working product with more leads, more sales
                </h1>
              </div>
              <div className="flex justify-center w-full gap-[5px] mt-[50px] z-100 relative">
                <div onClick={() => setIsOpen(true)}>
                  <Button>Let’s start</Button>
                </div>
                <button
                  onClick={() => handleSmoothScroll("cases")}
                  className="relative bg-blue color-blue p-[11px] px-[15px] rounded-[10px] button transition-all duration-200 overflow-hidden group"
                >
                  <div className="w-[13px] h-[22px]"></div>
                  <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 group-hover:-translate-y-full">
                    <img src="/assets/img/arrow.svg" alt="" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center color-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    <img src="/assets/img/arrow.svg" alt="" />
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
