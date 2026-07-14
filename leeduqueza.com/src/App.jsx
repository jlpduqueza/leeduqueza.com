import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  FileText,
  Mail,
  Server,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "./components/ContactForm";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "KendoReact",
      "Redux",
      "Apollo Client",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      "Java",
      "Spring Boot",
      "GraphQL",
      "REST APIs",
      "Maven",
      "Keycloak",
    ],
  },
  {
    category: "Data & Documents",
    icon: Database,
    technologies: [
      "MySQL",
      "PDFTron",
      "Document Management",
      "PDF Export",
      "File Workflows",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "OmTrak",
    category: "Professional Work",
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
    category: "Freelance Work",
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
    category: "Freelance Work",
    role: "Full-Stack Web Developer",
    description:
      "Participated in the development of a digital maritime publication featuring industry news, feature stories, interviews, videos, and online magazine content.",
    contribution:
      "Contributed to frontend development, responsive layout, Strapi content integration, deployment, and the presentation of publication content.",
    technologies: ["Next.js", "Tailwind CSS", "Strapi"],
    platforms: ["Vercel", "Heroku"],
    href: "https://www.marinoworldonline.com/",
  },
];

const experience = [
  {
    period: "Present",
    role: "Full-Stack Software Engineer",
    company: "Enterprise Software Development",
    description:
      "Developing and maintaining production applications using Java, Spring Boot, GraphQL, React, KendoReact, MySQL, and document-management technologies.",
  },
  {
    period: "7+ years",
    role: "Software & Web Development",
    company: "Professional Experience",
    description:
      "Experience building application features, modernizing legacy components, investigating defects, integrating APIs, and collaborating with developers and QA.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a11] text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070a11]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-3 text-lg font-semibold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-mono text-sm font-bold text-slate-950">
              LD
            </span>

            <span>Lee Duqueza</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#projects">
              Work
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Contact me
          </a>
        </nav>
      </header>

      <main className="relative">
        <section
          id="home"
          className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32"
        >
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to software-engineering opportunities
              </div>

              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Full-Stack Software Engineer
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
                I build and modernize{" "}
                <span className="text-slate-500">
                  enterprise web applications.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                I&apos;m Lee, a software engineer specializing in Java, Spring
                Boot, GraphQL, React, and document-management workflows.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View my work
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  <Download size={18} />
                  Download résumé
                </a>
              </div>

              <div className="mt-9 flex items-center gap-5 text-slate-400">
                <a
                  href="https://github.com/jlpduqueza"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="transition hover:text-white"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jann-leerick-duqueza-204b8423b/"
                  aria-label="LinkedIn profile"
                  className="transition hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="#contact"
                  aria-label="Email"
                  className="transition hover:text-white"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-cyan-400/15 to-blue-600/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c111c]/90 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />

                  <span className="ml-3 font-mono text-xs text-slate-500">
                    engineer.js
                  </span>
                </div>

                <div className="space-y-2 p-6 font-mono text-sm leading-7">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">engineer</span>{" "}
                    <span className="text-slate-500">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-blue-300">name</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;Lee Duqueza&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-blue-300">focus</span>: [
                  </p>

                  <p className="pl-12 text-emerald-300">
                    &quot;Java&quot;, &quot;Spring Boot&quot;,
                  </p>

                  <p className="pl-12 text-emerald-300">
                    &quot;GraphQL&quot;, &quot;React&quot;
                  </p>

                  <p className="pl-6">],</p>

                  <p className="pl-6">
                    <span className="text-blue-300">experience</span>:{" "}
                    <span className="text-amber-300">&quot;7+ years&quot;</span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-blue-300">builds</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;production software&quot;
                    </span>
                  </p>

                  <p className="text-slate-300">{"};"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-white/5 bg-white/[0.015] py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Professional and freelance projects"
              description="A selection of websites and software products I have contributed to through professional employment and freelance development."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {skills.map(({ category, icon: Icon, technologies }) => (
                <article
                  key={category}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects and engineering experience"
              description="A selection of enterprise features and workflows I have developed, maintained, or modernized."
            />

            <div className="space-y-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group grid gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 md:grid-cols-[80px_1fr_auto] md:items-center md:p-8"
                >
                  <p className="font-mono text-xl text-cyan-400">
                    {project.number}
                  </p>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <p className="mb-3 text-sm font-medium text-cyan-300">
                      {project.role}
                    </p>

                    <p className="max-w-3xl leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-white/5 bg-black/10 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        My contribution
                      </p>

                      <p className="leading-6 text-slate-400">
                        {project.contribution}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-cyan-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    {project.platforms && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Deployment:
                        </span>

                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-400"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit the ${project.title} website`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300 md:self-center"
                  >
                    Visit website
                    <ArrowUpRight size={18} />
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">
              The products, websites, trademarks, and branding shown above
              belong to their respective owners. My portfolio describes only the
              areas where I participated or contributed.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-white/5 bg-white/[0.015] py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Experience"
              title="Professional background"
              description="My experience focuses on full-stack application development, modernization, debugging, and enterprise software maintenance."
            />

            <div className="max-w-4xl">
              {experience.map((item) => (
                <article
                  key={item.role}
                  className="grid gap-4 border-l border-white/10 pb-12 pl-7 last:pb-0 md:grid-cols-[140px_1fr]"
                >
                  <div>
                    <div className="-ml-[33px] mb-4 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#070a11] md:absolute" />
                    <p className="font-mono text-sm text-cyan-400">
                      {item.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 flex items-center gap-2 text-slate-500">
                      <BriefcaseBusiness size={15} />
                      {item.company}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="contact" className="py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <FileText size={26} />
            </div>

            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
              Get in touch
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m open to full-stack, Java, React, and backend-focused
              software-engineering opportunities.
            </p>
          </div>
        </section> */}

        <section id="contact" className="py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Contact"
              title="Start a conversation"
              description="Send me a message regarding software-development opportunities, freelance work, or project collaboration."
            />

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Lee Duqueza</p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
