import { motion } from "framer-motion";
import {
  Code2,
  Laptop,
  Server,
  BrainCircuit,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub",
  "Responsive UI",
  "LLM Integration",
  "OpenAI APIs",
  "Google Gemini",
  "Prompt Engineering",
  "UI/UX Design",
];

const highlights = [
  {
    icon: <Laptop size={28} />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and visually engaging web applications with React, Tailwind CSS, and Framer Motion while maintaining clean architecture and excellent user experience.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Integration",
    description:
      "Comfortable working with REST APIs, Express.js backends, authentication systems, databases, and integrating frontend applications with scalable backend services.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI & LLM Applications",
    description:
      "Experience integrating Large Language Models into applications using APIs, prompt engineering, AI-powered workflows, and intelligent content generation.",
  },
];

const values = [
  "Clean, maintainable code",
  "Attention to detail",
  "Strong communication",
  "Performance-first development",
  "Scalable architecture",
  "On-time delivery",
];

export default function About() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700">
            <Sparkles size={16} />
            Available for Freelance • Internships • Full-Time Roles
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
            Building Products That
            <span className="block bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Users Love To Use.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            I specialize in developing modern, responsive, and high-performance
            web applications with a strong focus on user experience, clean code,
            and scalable architecture. Every project I work on is built with
            attention to detail, maintainability, and long-term reliability in
            mind.
          </p>

        </motion.div>

        {/* Why Work With Me */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {highlights.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Why Hire Me */}

        <div className="mt-28 grid gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-black text-slate-900">
              Why Work With Me?
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              I believe great software is more than writing code—it's about
              understanding the problem, designing thoughtful solutions, and
              delivering a polished experience that users enjoy.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              I enjoy taking ownership of projects, learning new technologies
              when required, and continuously improving both the product and my
              development process. Whether it's creating beautiful frontend
              interfaces, integrating REST APIs, working with backend services,
              or incorporating AI capabilities into applications, I approach
              every task with curiosity, discipline, and a commitment to quality.
            </p>

            <div className="mt-10 space-y-4">

              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-emerald-500"
                    size={22}
                  />

                  <span className="text-slate-700">
                    {value}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* Skills */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">

              <div className="flex items-center gap-4">

                <Code2 className="text-sky-600" size={30} />

                <h3 className="text-3xl font-black text-slate-900">
                  Technical Skills
                </h3>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* Closing Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[40px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-14 text-center text-white"
        >

          <Rocket
            className="mx-auto text-sky-400"
            size={54}
          />

          <h2 className="mt-8 text-4xl font-black">
            My Commitment
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            When I commit to a project, I focus on understanding its goals,
            communicating clearly throughout the process, and delivering work
            that is reliable, maintainable, and aligned with professional
            standards. I value quality, continuous improvement, and meeting
            agreed timelines, with the aim of creating solutions that provide
            lasting value.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Let's Build Something Great
            <ArrowRight size={20} />
          </button>

        </motion.div>

      </div>
    </section>
  );
}