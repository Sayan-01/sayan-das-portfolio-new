import Wrapper from "./Wrapper";

export default function PartnersBar() {
  const partners = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

  return (
    <Wrapper className="py-20 border-b border-foreground/5">
      <div className="flex flex-col items-center gap-12">
        <div className="liquid-glass rounded-full px-6 py-2 text-[10px] font-bold text-foreground/40 font-body uppercase tracking-[0.3em] border border-foreground/5">
          Collaborating with industry pioneers
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-4xl md:text-5xl font-heading italic text-foreground tracking-tighter"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
