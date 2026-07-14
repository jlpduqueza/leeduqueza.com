import { useState } from "react";
import { LoaderCircle, Mail, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

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

      console.log("Contact API status:", response.status);
      console.log("Contact API response:", responseText);

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
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
          <Mail size={23} />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          Let&apos;s work together
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          Have a project, job opportunity, or question? Send me a message and
          I&apos;ll respond as soon as possible.
        </p>

        <div className="mt-7 space-y-3 text-sm text-slate-400">
          <p>
            <span className="text-slate-500">Location:</span> Philippines
          </p>

          <p>
            <span className="text-slate-500">Availability:</span> Full-stack and
            web-development opportunities
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
      >
        {/* Honeypot field. Real users should never see or fill this. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 overflow-hidden"
        >
          <label htmlFor="company">Company website</label>

          <input
            id="company"
            name="company"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Name
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
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email
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
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Subject
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
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={5000}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        {status.message && (
          <div
            role="status"
            className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-red-400/20 bg-red-400/10 text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isLoading ? (
            <>
              <LoaderCircle className="animate-spin" size={18} />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
