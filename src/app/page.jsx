import VisitTracker from "../components/VisitTracker";
import Main from "../section/Main/Main";
import Works from "../section/Works/Works";
import Testimonials from "../section/Testimonials/Testimonials";
import About from "../section/About/About";
import FAQ from "../section/FAQ/FAQ";
import Contact from "../section/Contact/Contact";

export default function Page() {
  return (
    <>
      <VisitTracker />
      <div className="bg-white flex flex-col md:flex-row w-auto relative">
        <div className="w-full max-w-[1920px] z-[5] md:z-[10] mx-auto">
          <Main />
          <Works />
          <Testimonials />
          <About />
          <FAQ />
          <Contact />
        </div>
      </div>
    </>
  );
}
