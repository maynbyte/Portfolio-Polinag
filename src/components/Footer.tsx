import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if user is near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200; // 200px from bottom
      setShowScrollToTop(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="border-t bg-background py-10 px-4 text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 text-muted-foreground text-sm">
        {/* Branding */}
        <div>
          <p>&copy; {new Date().getFullYear()} Arwill Joshua | All rights reserved.</p>
          <p className="text-xs mt-1">
            Built with <span className="font-medium text-foreground">ReactJS</span>,{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>, and{" "}
            <span className="font-medium text-foreground">Shadcn UI</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/maynbyte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/arwill-joshua-polinag-6167ba330"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Back to Top Button (conditionally visible) */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 md:right-10 z-50 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/90 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
