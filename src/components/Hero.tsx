import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          Full-Stack Developer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" data-aos="fade-up">
          Hi, I'm <span className="text-cyan-600">Arwill Joshua</span> — I build
          scalable web apps with clean code & modern tools.
        </h1>

        <p className="text-lg text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
          I specialize in{" "}
          <span className="text-cyan-600 font-semibold">
            <Typewriter
              words={["React", "Angular", "ASP.NET", "Express.js", "Node.js", "Supabase", "Firebase", "MongoDB"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
            />
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <Button size="lg" className="px-6">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Download Resume Button */}
          <a
            href="/Polinag-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-50 transition text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
