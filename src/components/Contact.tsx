import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="md:py-16 py-12 bg-background relative overflow-hidden"
    >
      <SectionHeader
        badge="Get in Touch"
        title="Ready to Begin?"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />
      <Wrapper>
        <div className="liquid-glass rounded-3xl p-6 lg:p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-heading italic text-foreground leading-[0.9] tracking-tight">
                Let's build <span className="text-accent-blue">extraordinary.</span>
              </h2>
              <p className="text-base text-foreground/50 font-body font-light max-w-md leading-relaxed">
                Currently looking for impactful internships and collaboration opportunities where AI meets engineering.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {[
                { icon: <BsGithub className="h-5 w-5" />, href: "#" },
                { icon: <BsLinkedin className="h-5 w-5" />, href: "#" },
                { icon: <BsTwitterX className="h-5 w-5" />, href: "#" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:sayandas61668@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-11 w-11 rounded-xl liquid-glass-strong flex items-center justify-center text-foreground/80 hover:text-accent-blue hover:border-accent-blue/30 transition-all border border-foreground/5"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <form className="relative space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2 flex flex-col">
                  <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-4">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full liquid-glass border border-foreground/5 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-4">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full liquid-glass border border-foreground/5 rounded-xl px-5 py-3.5 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-4">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full liquid-glass border border-foreground/5 rounded-2xl px-5 py-4 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer mt-8 bg-accent-blue text-white rounded-xl py-4 text-base font-heading italic flex items-center justify-center gap-3 hover:bg-accent-blue/90 transition-all shadow-lg shadow-accent-blue/20"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
