"use client";

import { AccountButton } from "@/components/ui/AccountButton";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import InformationSection from "@/components/ui/InformationSection";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { ProjectCard } from "@/components/ui/ProjectsCard";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="bg-primary min-h-screen text-primary">
      <header className="w-full border-b border-white/10">
        <div className="mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="font-black text-[45px] tracking-tight">
            Yohan<span style={{ color: "#FF4433" }}>.</span>
          </div>
          <nav className="flex gap-3 md:gap-6 items-center">
            <PrimaryButton
              onClick={() =>
                document
                  .getElementById("hire")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Hire Me
            </PrimaryButton>
          </nav>
        </div>
      </header>

      <div className="px-6 md:px-12 py-12 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
          <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 badge-available">
            Available for new project
          </div>
          <div>
            <div className="heading-1">Hi There</div>
            <div className="heading-1">I'm Yohanes Raka Nugroho</div>
          </div>
          <div className="heading-3">
            An Informatics Students at Gunadarma University & <br />
            Data Enthusiast
          </div>
          <div className="flex gap-3">
            <PrimaryButton
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("work")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </PrimaryButton>
            <SecondaryButton
              className="border-2  bg-gray-800"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </SecondaryButton>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl w-[280px] h-[280px] md:w-[460px] md:h-[460px] flex-shrink-0">
          <Image
            src="/images/photo.jpg"
            alt="Yohanes Raka Nugroho"
            width={460}
            height={460}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div
        id="about"
        className="bg-secondary px-6 md:px-12 py-14 flex flex-col md:flex-row gap-12"
      >
        <div className="flex-2 gap-3">
          <div className="mb-10">
            <div className="heading-3">The Journey</div>
            <div className="text-body">
              I am an Informatics student at Gunadarma University, driven by a
              mission to solve real-world problems through creative
              technological solutions. I possess a versatile interest in
              Front-End, Back-End development, and Data science, constantly
              seeking ways to build efficient and impactful applications. <br />
              <br />
              Beyond technical expertise, I committed to professional growth by
              refining my public speaking, team coordination, and research
              skills. I thrive in collaborative environments where technology
              meets communication, aiming to contribute meaningfully to the
              digital landscape while continuously expanding my horizons.
            </div>
          </div>
          <div>
            <div className="heading-3 mb-2">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                Python
              </div>
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                Next JS
              </div>
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                React JS
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="heading-3 mb-5">Experience</div>
          {experiences.map((exp) => (
            <ExperienceCard
              title={exp.title}
              comp={exp.comp}
              key={exp.id}
              desc={exp.desc}
              image={exp.image}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-primary px-6 md:px-12 py-16">
        <div className="heading-2">What I Can Do</div>
        <div className="text-body mb-9">
          My specialized skill set across development and design disciplines.
        </div>
        <div className="flex flex-col sm:flex-row gap-8 md:gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="flex-1">
              <div className="heading-4 mb-4 flex items-center gap-2">
                <span>{skillGroup.icon}</span>
                <span>{skillGroup.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <div
                    key={item}
                    className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="work" className="w-full bg-secondary px-6 md:px-12 py-16">
        <div className="heading-2">Featured Project</div>
        <div className="text-body mb-9">
          A selection of recent projects that combine technical complexity with
          elegant aesthetics.
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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
            />
          ))}
        </div>
      </div>

      <div
        id="hire"
        className="w-full bg-primary px-6 md:px-12 py-14 flex flex-col items-center text-center"
      >
        <div className="heading-2 mb-4">
          Let's build <span className="blue">together.</span>
        </div>
        <div className="text-body mb-12 max-w-lg">
          I'm currently looking for new opportunities and collaborations. Have
          an idea? Let's discuss it over email or social media.
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 mb-10">
          <a
            target="_blank"
            className="group flex flex-col items-center gap-3 border-2 border-transparent hover:border-white/20 hover:bg-secondary px-6 py-4 rounded-xl transition-all duration-300"
            onClick={() => {
              navigator.clipboard.writeText("yohanesraka05@gmail.com");
              alert("Email copied to clipboard!");
            }}
          >
            <div className="bg-secondary group-hover:bg-primary p-4 rounded-xl transition-all duration-300">
              <Image
                src="/images/communication.png"
                alt="email"
                width={24}
                height={24}
              />
            </div>
            <div className="text-body text-xs tracking-widest opacity-60">
              EMAIL ME AT
            </div>
            <div className="text-body font-semibold">
              yohanesraka05@gmail.com
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/Depok,+Jawa+Barat,+Indonesia"
            target="_blank"
            className="group flex flex-col items-center gap-3 border-2 border-transparent hover:border-white/20 hover:bg-secondary px-6 py-4 rounded-xl transition-all duration-300"
          >
            <div className="bg-secondary group-hover:bg-primary p-4 rounded-xl transition-all duration-300">
              <Image
                src="/images/google-maps.png"
                alt="location"
                width={24}
                height={24}
              />
            </div>
            <div className="text-body text-xs tracking-widest opacity-60">
              LOCATION
            </div>
            <div className="text-body font-semibold">Depok, Jawa Barat</div>
          </a>
        </div>

        <div className="flex gap-3 mb-16">
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

        <div className="w-full border-t border-white/10 pt-6 flex justify-center text-body text-sm opacity-50">
          © 2024 Yohanes Raka. All rights reserved.
        </div>
      </div>
    </div>
  );
}