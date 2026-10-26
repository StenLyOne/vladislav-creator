import Button from "../../components/Button/Button";
import { UPWORK_URL } from "../../lib/contact";

const Contact = () => (
  <section className="px-[16px] md:px-[30px]">
    <div
      className="max-w-[800px] mx-auto mt-[100px] md:mt-[180px] mb-[90px] scroll-mt-[140px] text-center"
      id="contact"
    >
      <h2 className="text-5xl font-bold mb-[30px]">CONTACT</h2>
      <p className="mb-[30px]">Have a project in mind? Let’s talk on Upwork.</p>
      <Button href={UPWORK_URL} target="_blank">Contact on Upwork</Button>
    </div>
  </section>
);

export default Contact;
