import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold tracking-tight text-blue-600">
          Arwill Joshua
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-black transition"
            >
              {link.name}
            </a>
          ))}
          <Button className="ml-4">Resume</Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="rounded-b-2xl shadow-xl max-w-sm mx-auto mt-4 p-6 bg-white border"
              
            >
              {/* Header: Logo + Close */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-blue-600">
                  Arwill Joshua
                </span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close">
                    <X className="w-5 h-5" />
                  </Button>
                </SheetClose>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col items-center gap-4 text-center">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-gray-800 hover:text-blue-600 font-medium transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <Button className="w-full mt-4">Resume</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
