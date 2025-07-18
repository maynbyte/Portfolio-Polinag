import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, } from "lucide-react";
import profilePic from "@/assets/profile.jpg"; 

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 px-6 text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div data-aos="zoom-in">
          <img
            src={profilePic}
            alt="Arwill Joshua"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Bio */}
        <p
          className="text-lg leading-relaxed mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I'm a <strong>Full-stack Web Developer</strong> focused on
          building scalable web applications with technologies like{" "}
          <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Node.js</strong>. I enjoy turning ideas into reality and
          solving real-world problems through clean, efficient code.
        </p>
        <p
          className="text-lg leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I value simplicity, accessibility, and developer experience. I'm also
          passionate about continuous learning and sharing knowledge with the
          community.
        </p>

        {/* Socials */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <div className="flex gap-4 text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/maynbyte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
          ].map((tech) => (
            <div
              key={tech}
              className="py-3 px-4 bg-white/70 dark:bg-white/10 rounded-lg shadow-sm text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
