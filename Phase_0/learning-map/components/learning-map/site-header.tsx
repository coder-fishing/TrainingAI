import { Radar } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
const links = [
  ["Path", "#path"],
  ["Books", "#books"],
  ["Mindsets", "#mindsets"],
  ["Complexity", "#hardest"],
  ["Relationships", "#relationships"],
];
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold text-foreground"
        >
          <Radar aria-hidden className="size-5 text-primary" />
          AI Learning Map
        </a>
        <div className="hidden gap-5 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#path"
            className="rounded-md border border-primary/50 px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Trace the map
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
