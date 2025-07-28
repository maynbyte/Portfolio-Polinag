import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const projects = [
    {
      title: "Fleet Management System — Fuel Theft Detection and GPS Tracking",
      description:
        "A comprehensive system for fleet operators to track vehicles via GPS, detect fuel theft in real-time, and monitor performance through a secure dashboard with live maps and analytics.",
      tech: [
        "React",
        "Tailwind",
        "Shadcn UI",
        "Chart.js",
        "Leaflet",
        "Express.js",
        "Node.js",
        "Firebase",
      ],
      live: "https://fleet-management-kappa.vercel.app/",
      image: "/images/fleet-thumb.png",
    },
    {
      title: "Virtual Office — A booking system for office spaces",
      description:
        "A web application that allows teams and employees to book shared office spaces and meeting rooms. Includes role-based access, calendar view, availability tracking, and real-time booking management.",
      tech: ["React", "Tailwind", "Shadcn UI", "Node.js", "Supabase"],
      live: "https://book.incub8.space",
      image: "/images/vo-thumb.png",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="relative group overflow-hidden rounded-xl shadow-md h-72 md:h-80"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm underline hover:text-cyan-300"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
