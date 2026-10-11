import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  hpTrap: "",
};

const fieldClass =
  "w-full border-0 border-b border-ink/40 bg-transparent px-0 py-3 text-lg text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.18em] text-muted";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Read as text first because the server could return an empty response.
      const responseText = await response.text();

      if (!responseText) {
        throw new Error(
          `The server returned an empty response (${response.status}).`,
        );
      }

      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `The server returned an invalid response: ${responseText}`,
        );
      }

      if (!response.ok) {
        throw new Error(
          result.error || `The request failed (${response.status}).`,
        );
      }

      setForm(initialForm);

      setStatus({
        type: "success",
        message: result.message || "Thank you! Your message has been sent.",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  const isLoading = status.type === "loading";

  return (
    <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-10">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Have a project, a role, or a question? Send a note and I&apos;ll
          reply as soon as I can.
        </p>

        <dl className="divide-y divide-rule border-y border-rule font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <div className="flex justify-between gap-4 py-3">
            <dt>Location</dt>
            <dd className="normal-case tracking-normal text-ink">Philippines</dd>
          </div>

          <div className="flex justify-between gap-4 py-3">
            <dt>Open to</dt>
            <dd className="text-right normal-case tracking-normal text-ink">
              Full-stack &amp; web roles
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-10">
        {/* Honeypot field. Real users should never see or fill this. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 overflow-hidden"
        >
          <label htmlFor="hp-trap">Leave this field empty</label>

          <input
            id="hp-trap"
            name="hpTrap"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            value={form.hpTrap}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              01 — Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              02 — Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            03 — Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            maxLength={150}
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            04 — Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity…"
            className={`${fieldClass} resize-y`}
          />
        </div>

        {status.message && (
          <p
            role="status"
            className={`border-l-2 pl-4 text-sm leading-6 ${
              status.type === "success"
                ? "border-ink text-ink"
                : "border-accent text-accent"
            }`}
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isLoading ? (
            <>
              <LoaderCircle className="animate-spin" size={16} />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
