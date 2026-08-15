"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [note, setNote] = useState(
    "Opens your email client with this message pre-filled."
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@sayandas.dev?subject=${subject}&body=${body}`;
    setNote("Opening your email client…");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="cname"
          className="font-mono text-[12px] text-text-faint uppercase tracking-[0.08em] mb-2 block"
        >
          Name
        </label>
        <input
          type="text"
          id="cname"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-bg-1 border border-line rounded-[10px] py-3.5 px-4 text-text font-body text-[14.5px] resize-y transition-colors duration-200 ease-in-out focus:outline-none focus:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
        />
      </div>
      <div>
        <label
          htmlFor="cemail"
          className="font-mono text-[12px] text-text-faint uppercase tracking-[0.08em] mb-2 block"
        >
          Email
        </label>
        <input
          type="email"
          id="cemail"
          name="email"
          placeholder="you@email.com"
          required
          className="w-full bg-bg-1 border border-line rounded-[10px] py-3.5 px-4 text-text font-body text-[14.5px] resize-y transition-colors duration-200 ease-in-out focus:outline-none focus:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
        />
      </div>
      <div>
        <label
          htmlFor="cmsg"
          className="font-mono text-[12px] text-text-faint uppercase tracking-[0.08em] mb-2 block"
        >
          Message
        </label>
        <textarea
          id="cmsg"
          name="message"
          rows={5}
          placeholder="Tell me about your project…"
          required
          className="w-full bg-bg-1 border border-line rounded-[10px] py-3.5 px-4 text-text font-body text-[14.5px] resize-y transition-colors duration-200 ease-in-out focus:outline-none focus:border-flame-1 focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="font-body font-semibold text-[14.5px] py-[14px] px-[26px] rounded-full inline-flex items-center gap-[9px] border border-transparent cursor-pointer transition-all duration-250 ease-in-out whitespace-nowrap bg-gradient-to-br from-flame-1 to-flame-2 text-bg shadow-[0_8px_30px_-8px_rgba(255,90,31,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(255,90,31,0.32)] focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-3 mt-1.5 self-start"
      >
        Send message &rarr;
      </button>
      <p className="text-[12.5px] text-text-faint mt-1">{note}</p>
    </form>
  );
}
