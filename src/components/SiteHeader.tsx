import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Scale className="h-4 w-4" />
          </span>
          SheriaGuide
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link to="/topics" className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }}>Topics</Link>
          <Link to="/chat" search={{}} className="rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground hover:bg-primary/90">Ask a question</Link>
        </nav>
      </div>
    </header>
  );
}
