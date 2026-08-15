import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="pt-[130px] pb-[100px]">
      <div className="max-w-maxw mx-auto px-5 sm:px-8 grid grid-cols-2 gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-[46px]">
        <Reveal>
          <div>
            <div className="font-mono text-[12.5px] tracking-[0.14em] uppercase text-flame-1 inline-flex items-center gap-[9px] mb-[18px] font-medium before:content-[''] before:w-[14px] before:h-[1px] before:bg-flame-1 before:inline-block">Get in Touch</div>
            <h2 className="text-[clamp(32px,4.6vw,52px)] mb-5 font-bold font-display text-text">Let&apos;s build something meaningful.</h2>
            <p className="text-text-dim text-[16px] max-w-[440px] leading-[1.7] mb-[34px]">Whether it&apos;s a startup idea, a freelance project, or an internship — I&apos;m always up for a conversation about what you&apos;re building.</p>
            <a
              href="mailto:hello@sayandas.dev"
              className="font-mono text-[20px] text-flame-1 border-b border-transparent transition-colors duration-200 ease-in-out hover:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
            >
              hello@sayandas.dev
            </a>
            <div className="flex gap-4.5 mt-[36px]">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="font-mono text-[13px] text-text-dim border border-line py-[9px] px-4 rounded-full transition-colors duration-200 ease-in-out hover:text-flame-1 hover:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="font-mono text-[13px] text-text-dim border border-line py-[9px] px-4 rounded-full transition-colors duration-200 ease-in-out hover:text-flame-1 hover:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              >
                LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="font-mono text-[13px] text-text-dim border border-line py-[9px] px-4 rounded-full transition-colors duration-200 ease-in-out hover:text-flame-1 hover:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
