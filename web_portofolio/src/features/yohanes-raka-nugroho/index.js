"use client";

import { AccountButton } from "@/components/ui/AccountButton";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import MarqueeText from "@/components/ui/MarqueeText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { ProjectCard } from "@/components/ui/ProjectsCard";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. Intersection Observer untuk mendeteksi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 2. INI BAGIAN YANG HILANG: Inisialisasi Theme dari LocalStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Hanya jadi dark jika localStorage secara eksplisit berisi "dark"
    const shouldBeDark = savedTheme === "dark";

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Helper function untuk menentukan class link
  const getLinkClass = (sectionId) => {
    const baseClass =
      "uppercase tracking-widest font-label-mono text-label-mono transition-all duration-300 pb-1";
    // Kita hapus 'dark:text-on-surface' karena CSS Variable di globals.css sudah menanganinya
    const activeClass =
      "text-primary font-bold border-b-2 border-secondary-fixed";
    const inactiveClass =
      "text-on-surface-variant hover:text-secondary-fixed border-b-2 border-transparent";

    return activeSection === sectionId
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  return (
    // Hapus class 'dark:' yang redundan, biarkan CSS Variable di globals.css yang bekerja
    <div className="bg-background text-on-background selection:bg-secondary-fixed selection:text-primary transition-colors duration-300">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-on-background/10 transition-colors duration-300">
        <div className="flex justify-between items-center py-6 px-6 gap-2 md:px-12 max-w-full mx-auto">
          <div className="font-black text-[45px] tracking-tight text-primary">
            Yohan<span style={{ color: "#FF4433" }}>.</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#home"
              className={getLinkClass("home")}
              onClick={() => setActiveSection("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={getLinkClass("about")}
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
            <a
              href="#skills"
              className={getLinkClass("skills")}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </a>
            <a
              href="#experience"
              className={getLinkClass("experience")}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={getLinkClass("projects")}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </a>
            <a
              href="#hire"
              className={getLinkClass("hire")}
              onClick={() => setActiveSection("hire")}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-on-background/20 hover:border-secondary-fixed transition-colors flex items-center justify-center text-on-background"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <PrimaryButton
              onClick={() => {
                setActiveSection("hire");
                document
                  .getElementById("hire")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-on-primary py-2 font-label-mono text-label-mono uppercase hover:bg-secondary-fixed hover:text-primary transition-all duration-300 border-0"
            >
              Hire Me
            </PrimaryButton>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen px-6 md:px-12 pt-12 pb-20 md:pb-32 overflow-hidden relative bg-background transition-colors duration-300"
        >
          <div className="relative z-10">
            <h1 className="font-display-xl text-5xl md:text-7xl lg:text-[120px] uppercase leading-none break-all md:break-normal tracking-tight text-on-surface">
              YOHANES RAKA <br /> NUGROHO
              <span className="text-secondary-fixed">.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 items-end gap-8">
              <div className="md:col-span-4 space-y-6">
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                  An Informatics Student at Gunadarma University & Data
                  Enthusiast, driven to solve real-world problems through
                  creative technological solutions.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <span className="font-label-mono text-label-mono border border-primary px-3 py-1 uppercase rounded-xl text-on-surface">
                    Depok, Jawa Barat
                  </span>
                  <span className="font-label-mono text-label-mono border border-primary px-3 py-1 uppercase rounded-xl badge-available text-on-surface">
                    Available for new project
                  </span>
                </div>
                <div className="flex gap-3 pt-4">
                  <PrimaryButton
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-primary bg-primary text-on-primary hover:bg-secondary-fixed hover:text-primary transition-all duration-300"
                  >
                    View Work
                  </PrimaryButton>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end mt-12 md:mt-0">
                <div className="w-72 h-72 md:w-96 md:h-96 relative grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 overflow-hidden rounded-xl border border-on-background/10">
                  <Image
                    src="/images/photo.jpg"
                    alt="Yohanes Raka Nugroho"
                    width={460}
                    height={460}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-4 hidden md:flex flex-col items-end gap-2">
                <p
                  className={`font-label-mono text-body-lg uppercase duration-300 hover:font-bold hover:scale-105 ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Front-End Developer
                </p>
                <p
                  className={`font-label-mono text-body-lg uppercase duration-300 hover:font-bold hover:scale-105 ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  QA Engineer
                </p>
                <p
                  className={`font-label-mono text-body-lg uppercase duration-300 hover:font-bold hover:scale-105 ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Data Engineer
                </p>
                <p
                  className={`font-label-mono text-body-lg uppercase duration-300 hover:font-bold hover:scale-105 ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Data Analyst
                </p>
              </div>
            </div>
          </div>
          <MarqueeText text="BUILDING SCALABLE SOLUTIONS • " speed={25} />
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 md:py-32 px-6 md:px-12 transition-colors duration-300 ${isDarkMode ? "bg-surface-container text-on-surface" : "bg-primary text-on-primary"}`}
        >
          <div className="max-w-full grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <h2 className="font-label-mono text-label-mono uppercase text-secondary-fixed mb-8">
                (About Me)
              </h2>
              <h3 className="font-display-lg text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
                The Journey <br /> meets Visual <br /> Refinement.
              </h3>
            </div>
            <div className="md:col-span-7 flex flex-col justify-end">
              <div className="max-w-2xl space-y-8">
                <p
                  className={`font-body-lg text-body-lg ${isDarkMode ? "text-on-surface/80" : "text-on-primary/80"}`}
                >
                  I am an Informatics student at Gunadarma University, driven by
                  a mission to solve real-world problems through creative
                  technological solutions. I possess a versatile interest in
                  Front-End, Back-End development, and Data science, constantly
                  seeking ways to build efficient and impactful applications.
                </p>
                <p
                  className={`font-body-md text-body-md ${isDarkMode ? "text-on-surface/60" : "text-on-primary/60"}`}
                >
                  Beyond technical expertise, I am committed to professional
                  growth by refining my public speaking, team coordination, and
                  research skills. I thrive in collaborative environments where
                  technology meets communication, aiming to contribute
                  meaningfully to the digital landscape while continuously
                  expanding my horizons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise / Skills Section */}
        <section
          id="skills"
          className="py-20 md:py-32 px-6 md:px-12 bg-background transition-colors duration-300"
        >
          <div className="mb-20">
            <p className="font-label-mono text-label-mono uppercase text-on-tertiary-container mb-4">
              What I Can Do
            </p>
            <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl max-w-3xl text-on-surface">
              Specialized skill set across development and design disciplines.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="border border-on-background/10 bg-surface-container-high p-8 flex flex-col h-full hover:border-secondary-fixed hover:scale-105 duration-300 ease-in-out transition-all group rounded-xl"
              >
                <span className="text-4xl mb-12 text-on-surface group-hover:text-secondary-fixed transition-colors">
                  {skillGroup.icon}
                </span>
                <h4 className="font-headline-md text-2xl mb-4 text-on-surface">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="font-label-mono text-xs uppercase tracking-tighter border border-on-background/30 px-2 py-0.5 rounded text-on-surface-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`py-20 md:py-32 px-6 md:px-12 transition-colors duration-300 ${isDarkMode ? "bg-surface-container text-on-surface" : "bg-primary text-on-primary"}`}
        >
          <div className="mb-12">
            <p className="font-label-mono text-label-mono uppercase text-on-tertiary-container mb-4">
              Experience
            </p>
            <h2
              className={`font-display-lg text-3xl md:text-4xl lg:text-5xl max-w-3xl ${isDarkMode ? "text-on-surface" : "text-white"}`}
            >
              Professional Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                comp={exp.comp}
                desc={exp.desc}
                image={exp.image}
                periode={exp.periode}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-display-lg text-4xl md:text-6xl lg:text-8xl uppercase leading-none text-on-surface">
              Featured
              <br />
              Project
            </h2>
            <div className="max-w-md">
              <p
                className={`font-body-lg text-body-lg mb-6 ${isDarkMode ? "text-on-surface-variant" : "text-on-surface-variant"}`}
              >
                A selection of recent projects that combine technical complexity
                with elegant aesthetics.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((pro) => (
              <ProjectCard
                key={pro.id}
                title={pro.title}
                desc={pro.shortDesc}
                image={pro.image}
                type={pro.role}
                tech={pro.tech}
                action={pro.action}
                link={pro.link}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section
          id="hire"
          className="px-6 md:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-background overflow-hidden transition-colors duration-300"
        >
          <div className="bg-secondary-fixed p-8 md:p-24 relative overflow-hidden flex flex-col items-center text-center rounded-xl">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 40px, #000 40px, #000 80px)",
              }}
            ></div>

            {/* Container "Let's Build Together" dengan blur */}
            <div
              className={`py-10 px-12 flex flex-col items-center text-center rounded-2xl mb-12 backdrop-blur-xl border shadow-2xl transition-colors duration-300 ${
                isDarkMode
                  ? "bg-black/40 border-outline/30"
                  : "bg-white/30 border-white/40"
              }`}
            >
              {/* TEKS: hitam di light mode, PUTIH di dark mode */}
              <h2
                className={`font-display-lg text-4xl md:text-6xl lg:text-8xl uppercase relative z-10 mb-8 max-w-4xl ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Let's build{" "}
                <span className={isDarkMode ? "text-white" : "text-black"}>
                  together.
                </span>
              </h2>
              <p
                className={`font-body-lg text-body-lg max-w-lg relative z-10 ${
                  isDarkMode ? "text-white/80" : "text-black/80"
                }`}
              >
                I'm currently looking for new opportunities and collaborations.
                Have an idea? Let's discuss it over email or social media.
              </p>
            </div>

            {/* Email & Location Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12 relative z-10">
              {/* Email Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yohanesraka05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 border-2 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  isDarkMode
                    ? "border-white/20 bg-black/40 hover:bg-black/60 hover:border-white"
                    : "border-black/20 bg-white/30 hover:bg-white/50 hover:border-black"
                }`}
              >
                <div
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white group-hover:bg-black"
                      : "bg-black group-hover:bg-white"
                  }`}
                >
                  <Image
                    src="/images/communication.png"
                    alt="email"
                    width={24}
                    height={24}
                    className={isDarkMode ? "" : "invert"}
                  />
                </div>
                <div
                  className={`text-body text-xs tracking-widest opacity-60 uppercase font-label-mono ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  EMAIL ME AT
                </div>
                <div
                  className={`text-body font-semibold font-label-mono ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  yohanesraka05@gmail.com
                </div>
              </a>

              {/* Location Button */}
              <a
                href="https://www.google.com/maps/search/Depok,+Jawa+Barat,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 border-2 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? "border-white/20 bg-black/40 hover:bg-black/60 hover:border-white"
                    : "border-black/20 bg-white/30 hover:bg-white/50 hover:border-black"
                }`}
              >
                <div
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white group-hover:bg-black"
                      : "bg-black group-hover:bg-white"
                  }`}
                >
                  <Image
                    src="/images/google-maps.png"
                    alt="location"
                    width={24}
                    height={24}
                    className={isDarkMode ? "" : "invert"}
                  />
                </div>
                <div
                  className={`text-body text-xs tracking-widest opacity-60 uppercase font-label-mono ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  LOCATION
                </div>
                <div
                  className={`text-body font-semibold font-label-mono ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Depok, Jawa Barat
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-16 relative z-10">
              <AccountButton
                icon="/images/linkedin.png"
                link="https://www.linkedin.com/in/yohanesrakanugroho"
                textAlt="linkedin"
              />
              <AccountButton
                icon="/images/github.png"
                link="https://github.com/YohanesRakaN"
                textAlt="github"
              />
              <AccountButton
                icon="/images/instagram.png"
                link="https://www.instagram.com/yoran.ins"
                textAlt="instagram"
              />
            </div>

            {/* Copyright */}
            <div className="w-full border-t border-black/10 pt-6 flex justify-center text-body text-sm opacity-50 font-label-mono relative z-10 text-black">
              © 2024 Yohanes Raka. All rights reserved.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
