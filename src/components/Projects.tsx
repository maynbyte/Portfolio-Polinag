import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const projects = [
    {
      title: "Fleet Management System — Fuel Theft Detection and GPS Tracking",
      description:
        "A comprehensive system for fleet operators to track vehicles via GPS, detect fuel theft in real-time, and monitor performance through a secure dashboard with live maps and analytics.",
      tech: ["React", "Tailwind", "Shadcn UI", "Chart.js", "Leaflet", "Express.js", "Node.js", "Firebase"],
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
            <Card
              key={project.title}
              className="overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
