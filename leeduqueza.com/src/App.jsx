import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

import ContactForm from "./components/ContactForm";

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~013d0481f75fae0190?mp_source=share";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/jlpduqueza", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jann-leerick-duqueza-204b8423b/",
    label: "LinkedIn",
  },
  { href: UPWORK_URL, label: "Upwork" },
];

const facts = [
  { label: "Based in", value: "Philippines" },
  { label: "Experience", value: "7 years" },
  { label: "Focus", value: "Java · Spring Boot · React" },
  { label: "Status", value: "Open to opportunities", live: true },
];

const skills = [
  {
    category: "Backend",
    technologies: ["Java", "Spring Boot", "GraphQL", "REST APIs", "Maven"],
  },
  {
    category: "Frontend",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Redux",
      "KendoReact",
    ],
  },
  {
    category: "AI-Assisted",
    technologies: ["Claude", "Claude Code"],
  },
  {
    category: "Data & Deployment",
    technologies: ["MySQL", "Strapi", "Vercel", "Heroku", "Git"],
  },
];

const projects = [
  {
    number: "01",
    title: "OmTrak",
    category: "Enterprise",
    role: "Full-Stack Software Engineer",
    description:
      "Contributed to the development and modernization of an enterprise construction and asset-management platform used for project communication, documentation, workflows, and facility operations.",
    contribution:
      "Developed and maintained frontend and backend functionality, implemented application workflows, integrated services, resolved defects, and supported ongoing platform upgrades.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "KendoReact UI",
      "PDFTron",
      "Keycloak",
    ],
    href: "https://www.omtrak.com/",
  },
  {
    number: "02",
    title: "MedSurf",
    category: "Freelance · Upwork",
    role: "Full-Stack Web Developer",
    description:
      "Participated in the development of a healthcare employment marketplace that connects healthcare professionals with employers, recruiters, and contract opportunities.",
    contribution:
      "Contributed to frontend and backend development, responsive user interfaces, application functionality, database integration, and the overall user experience.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
    href: "https://www.medsurf.co/",
  },
  {
    number: "03",
    title: "Marino World Online",
    category: "Freelance",
    role: "Full-Stack Web Developer",
    description:
      "Participated in the development of a digital maritime publication featuring industry news, feature stories, interviews, videos, and online magazine content.",
    contribution:
      "Contributed to frontend development, responsive layout, Strapi content integration, deployment, and the presentation of publication content.",
    technologies: ["Next.js", "Tailwind CSS", "Strapi", "Vercel", "Heroku"],
    href: "https://www.marinoworldonline.com/",
  },
];

const experience = [
  {
    period: "2019 — Now",
    role: "Mid-Level Software Engineer",
    company: "Qbryx Technology Solutions Corporation",
    description:
      "Develop and maintain features for OmTrak across a Java, Spring Boot, and GraphQL backend and a React.js, KendoReact, and Tailwind CSS front end. Migrate and upgrade existing modules, integrate services through GraphQL and REST APIs backed by MySQL, and resolve defects alongside developers and QA.",
  },
  {
    period: "2020 — 2022",
    role: "Freelance Full-Stack Web Developer",
    company: "Upwork",
    href: UPWORK_URL,
    description:
      "Delivered web projects for international and local clients, including applicant and employer dashboards for MedSurf and the front end of Marino World Online, using Next.js, Tailwind CSS, and Strapi.",
  },
  {
    period: "2015 — 2019",
    role: "B.S. Computer Science",
    company: "New Era University",
    label: "Education",
  },
];

function SectionHeader({ number, label, title }) {
  return (
    <div className="mb-12 grid gap-6 border-t border-ink pt-5 md:mb-16 md:grid-cols-[1fr_2fr]">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span className="text-accent">§ {number}</span> — {label}
      </p>

      <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.01em] md:text-7xl">
        {title}
      </h2>
    </div>
  );
}

function TextLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex items-center gap-1 underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      {external && (
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-serif text-2xl leading-none">
            Lee Duqueza<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.16em] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-1.5 bg-ink px-3.5 py-2 text-paper transition-colors hover:bg-accent"
            >
              Résumé
              <ArrowDown size={13} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-mr-2 p-2 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-rule md:hidden">
            {[...navLinks, { href: "/resume.pdf", label: "Résumé ↓" }].map(
              (link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-rule px-5 py-4 font-serif text-3xl last:border-b-0"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        )}
      </header>

      <main id="top">
        {/* Masthead */}
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:mb-16">
            <span>Portfolio — Full-Stack Software Engineer</span>
            <span>Est. 2019 · Philippines</span>
          </div>

          <h1 className="rise font-serif text-[clamp(3.6rem,11vw,10.5rem)] leading-[0.86] tracking-[-0.025em]">
            I build &amp;{" "}
            <em className="text-accent">modernize</em>
            <br className="hidden sm:block" /> enterprise software.
          </h1>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1fr_2fr] md:gap-10">
            <div
              className="rise font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
              style={{ animationDelay: "0.15s" }}
            >
              <dl className="divide-y divide-rule border-y border-rule">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt>{fact.label}</dt>
                    <dd className="flex items-center gap-2 text-right normal-case tracking-normal text-ink">
                      {fact.live && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                      )}
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rise" style={{ animationDelay: "0.25s" }}>
              <p className="max-w-2xl text-xl leading-relaxed md:text-2xl md:leading-relaxed">
                I&apos;m{" "}
                <span className="font-serif text-[1.2em] italic">Lee</span>, a
                software engineer who builds backend services with Java, Spring
                Boot, and GraphQL, and fast, accessible front ends with React and
                Next.js.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent"
                >
                  See selected work
                  <ArrowDown
                    size={15}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
                  {socialLinks.map((link) => (
                    <TextLink key={link.label} href={link.href} external>
                      {link.label}
                    </TextLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
          <SectionHeader
            number="01"
            label="Selected work"
            title={
              <>
                Professional &amp; <em>freelance</em> projects
              </>
            }
          />

          <ol className="border-b border-ink">
            {projects.map((project) => (
              <li key={project.title} className="group border-t border-rule">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} — visit website`}
                  className="grid gap-x-10 gap-y-5 py-9 transition-colors md:grid-cols-[1fr_2fr] md:py-12"
                >
                  <div className="flex items-start justify-between gap-6 md:block">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      <span className="text-accent">{project.number}</span> /{" "}
                      {project.category}
                    </p>

                    <ArrowUpRight
                      size={28}
                      strokeWidth={1.25}
                      className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:mt-10"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-5xl leading-none tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent md:text-7xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {project.role}
                    </p>

                    <div className="mt-6 grid gap-6 text-[15px] leading-7 lg:grid-cols-2">
                      <p>{project.description}</p>

                      <p className="text-muted">
                        <span className="font-serif text-lg italic text-ink">
                          My part —{" "}
                        </span>
                        {project.contribution}
                      </p>
                    </div>

                    <p className="mt-6 font-mono text-xs text-muted">
                      {project.technologies.join("  ·  ")}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>

          <p className="mt-5 max-w-2xl text-xs leading-5 text-muted">
            Products, websites, trademarks, and branding belong to their
            respective owners. Descriptions cover only the areas where I
            participated or contributed.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-y border-ink bg-ink text-paper"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_2fr]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
                <span className="text-accent">§ 02</span> — Toolkit
              </p>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.01em] md:text-7xl">
                Technologies I work with, <em>ranked</em>.
              </h2>
            </div>

            <div className="grid border-t border-paper/25 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((group, groupIndex) => (
                <div
                  key={group.category}
                  className={`border-b border-paper/25 py-8 lg:border-b-0 ${
                    groupIndex % 2 === 0
                      ? "sm:border-r sm:pr-6"
                      : "sm:pl-6 lg:pr-6"
                  } ${groupIndex === 2 ? "lg:pl-6" : ""} ${
                    groupIndex === 1 ? "lg:border-r" : ""
                  } ${groupIndex === 3 ? "lg:pr-0" : ""}`}
                >
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
                    {String.fromCharCode(65 + groupIndex)} — {group.category}
                  </p>

                  <ul className="space-y-1.5">
                    {group.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="font-serif text-3xl leading-tight"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
        >
          <SectionHeader
            number="03"
            label="Experience"
            title={
              <>
                Seven years, <em>two</em> tracks.
              </>
            }
          />

          <ol className="border-b border-rule">
            {experience.map((item) => (
              <li
                key={item.role}
                className="grid gap-x-10 gap-y-3 border-t border-rule py-9 md:grid-cols-[1fr_2fr]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {item.period}
                  {item.label && (
                    <span className="ml-3 text-accent">{item.label}</span>
                  )}
                </p>

                <div>
                  <h3 className="font-serif text-4xl leading-tight md:text-5xl">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-muted">
                    {item.href ? (
                      <TextLink href={item.href} external>
                        {item.company}
                      </TextLink>
                    ) : (
                      item.company
                    )}
                  </p>

                  {item.description && (
                    <p className="mt-5 max-w-3xl text-[15px] leading-7">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32"
        >
          <SectionHeader
            number="04"
            label="Contact"
            title={
              <>
                Let&apos;s build something <em>useful</em>.
              </>
            }
          />

          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-ink">
        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10">
          <div className="flex flex-col justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row">
            <p>© {new Date().getFullYear()} Jann Leerick &ldquo;Lee&rdquo; Duqueza</p>
            <p>Set in Instrument Serif &amp; Inter Tight</p>
            <a href="#top" className="transition-colors hover:text-accent">
              Back to top ↑
            </a>
          </div>

          <p
            aria-hidden="true"
            className="mt-8 select-none whitespace-nowrap font-serif text-[clamp(4rem,23vw,22rem)] leading-[0.75] tracking-[-0.04em]"
          >
            Lee Duqueza<span className="text-accent">.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
