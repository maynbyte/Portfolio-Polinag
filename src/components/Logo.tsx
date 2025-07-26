import logo from "@/assets/favicon.png"; // or .svg

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Arwill Joshua - Home">
      <img
        src={logo}
        alt="Arwill Joshua logo"
        className="h-7 w-7"
      />
      {/* Keep the text for screen readers only */}
      <span className="sr-only">Arwill Joshua</span>
    </a>
  );
}
