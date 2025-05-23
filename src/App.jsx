import React from "react";
import { Github, Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";
import "./index.css";
import DeveloperBio from "./components/developerBio";
import { Link } from "react-scroll";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-800 text-white font-sans">
      {/* HERO SECTION */}
      <section className="pt-24 pb-8 px-4 max-w-screen-md mx-auto text-center flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hey, I'm <span className="text-teal-500">[George Koxenoglou]</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-lg mx-auto"
        >
          I build websites & web experiences that feel{" "}
          <span className="text-2xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text">
            alive
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto"
        >
          <div
            className="bg-cover rounded-full w-20 h-20 sm:w-28 sm:h-28 pointer-events-none"
            style={{
              backgroundImage: "url('/bongocat1.png')",
            }}
          ></div>

          <Link to="projects" smooth={true} duration={120} offset={-70}>
            <button className="relative px-6 py-2 rounded-full text-black font-medium shadow-lg bg-white overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-700 ease-in-out origin-bottom"></span>
              <span className="relative z-10">View Projects</span>
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={120} offset={-70}>
            <button className="relative px-6 py-2 rounded-full text-black font-medium shadow-lg bg-white overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-700 ease-in-out origin-bottom"></span>
              <span className="relative z-10">Contact Me</span>
            </button>
          </Link>

          <div
            className="bg-cover rounded-full w-20 h-20 sm:w-28 sm:h-28 pointer-events-none"
            style={{
              backgroundImage: "url('')",
            }}
          ></div>
        </motion.div>
      </section>

      {/* DEVELOPER BIO */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <section className="px-6 py-20 max-w-3xl mx-auto">
          <DeveloperBio />
        </section>
      </motion.div>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Let's see it!
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-gray-800 py-4 rounded-xl shadow-inner"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="px-20 w-md object-center mx-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* CONTACT */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <section id="contact" className="px-6 py-20 bg-gray-900 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="text-gray-400 mb-4">
            Got a project or want to collaborate? Let's talk!
          </p>
          <div className="flex justify-center gap-6 text-gray-300">
            <a href="tel:+306983650338" className="hover:text-white">
              <Phone />
            </a>
            <a href="mailto:koxegeorge@email.com" className="hover:text-white">
              <Mail />
            </a>
            <a
              href="https://github.com/GeoKoxe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/george-koxenoglou/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
          </div>
        </section>
      </motion.div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-600">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} George Koxenoglou. All rights
          reserved. By me. For now.
        </motion.div>
      </footer>
    </main>
  );
}

const projects = [
  {
    title: "Weather App",
    description:
      "A simple weather app that utilizes the OpenWeather API. Experimentation with Tailwind CSS.",
    codeLink: "https://github.com/GeoKoxe/Weather-App",
  },
  {
    title: "Memory Game",
    description:
      "A more JavaScript-reliant project that handles conditions. A fun challenge",
    codeLink: "https://github.com/GeoKoxe/MemoryGame-React",
  },
  {
    title: "Poulios.eu",
    description:
      "This is a website for a local business. It was built during my time at a web development studio.",
    codeLink: "https://www.poulios.eu",
  },
  {
    title: "RPG Game",
    description:
      "This started as a joke... and it ended as a joke. Try to find the easter egg!",
    codeLink: "https://github.com/GeoKoxe/RPG-Javascript",
  },
];

const skills = [
  {
    title: "HTML",
    icon: "html.png",
  },
  {
    title: "CSS",
    icon: "css.png",
  },
  {
    title: "JavaScript",
    icon: "js.png",
  },
  {
    title: "React",
    icon: "react.png",
  },
  {
    title: "Tailwind CSS",
    icon: "wind.png",
  },
  {
    title: "WordPress",
    icon: "wp.png",
  },
  {
    title: "Photoshop",
    icon: "photoshop (1).png",
  },
  {
    title: "Illustrator",
    icon: "illustrator (1).png",
  },
];
