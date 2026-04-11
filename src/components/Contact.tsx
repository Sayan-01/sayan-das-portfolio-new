import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Wrapper from "./Wrapper";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      <SectionHeader
        badge="Get in Touch"
        title="Ready to Begin?"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />
      <Wrapper>
        <div className="liquid-glass rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-6xl md:text-8xl font-heading italic text-foreground leading-[0.9] tracking-tight">
                Let's build <span className="text-accent-blue">extraordinary.</span>
              </h2>
              <p className="text-xl text-foreground/50 font-body font-light max-w-md leading-relaxed">
                Currently looking for impactful internships and collaboration opportunities where AI meets engineering.
              </p>
            </motion.div>

            <div className="flex gap-6">
              {[
                { icon: <BsGithub className="h-6 w-6" />, href: "#" },
                { icon: <BsLinkedin className="h-6 w-6" />, href: "#" },
                { icon: <BsTwitterX className="h-6 w-6" />, href: "#" },
                { icon: <Mail className="h-6 w-6" />, href: "mailto:sayandas61668@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-14 w-14 rounded-full liquid-glass-strong flex items-center justify-center text-foreground/80 hover:text-accent-blue hover:border-accent-blue/30 transition-all border border-foreground/5 shadow-inner"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-foreground/5 blur-3xl rounded-full opacity-50" />
            <form className="relative space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 flex flex-col">
                  <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-6">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full liquid-glass border border-foreground/5 rounded-full px-8 py-5 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all"
                  />
                </div>
                <div className="space-y-3 flex flex-col">
                  <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-6">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full liquid-glass border border-foreground/5 rounded-full px-8 py-5 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3 flex flex-col">
                <label className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] ml-6">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full liquid-glass border border-foreground/5 rounded-[2.5rem] px-8 py-6 text-foreground font-body placeholder:text-foreground/20 focus:outline-none focus:border-foreground/20 focus:bg-foreground/[0.02] transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-blue text-white rounded-full py-6 text-lg font-bold font-heading italic flex items-center justify-center gap-3 hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20"
              >
                Send Message
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
