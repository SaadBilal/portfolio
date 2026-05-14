"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Layers,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
  ExternalLink,
  Search,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface CommandItem {
  label: string;
  href: string;
  icon: LucideIcon;
  shortcut?: string;
  external?: boolean;
}

const commands: { group: string; items: CommandItem[] }[] = [
  {
    group: "Navigation",
    items: [
      { label: "Home", href: "/", icon: Home, shortcut: "G H" },
      { label: "About", href: "/about", icon: User, shortcut: "G A" },
      { label: "Experience", href: "/experience", icon: Briefcase, shortcut: "G E" },
      { label: "Projects", href: "/projects", icon: Code2, shortcut: "G P" },
      { label: "Tech Stack", href: "/tech-stack", icon: Layers, shortcut: "G T" },
      { label: "Blog", href: "/blog", icon: BookOpen, shortcut: "G B" },
      { label: "Contact", href: "/contact", icon: Mail, shortcut: "G C" },
    ],
  },
  {
    group: "Links",
    items: [
      { label: "GitHub", href: "https://github.com/saadbilal", icon: Github, external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/saadbilal", icon: Linkedin, external: true },
      { label: "Download Resume", href: "/Saad-Bilal-Resume.pdf", icon: Download, external: true },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [open]);

  const allItems: CommandItem[] = [
    ...commands.flatMap((g) => g.items),
    {
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      href: "#theme",
      icon: theme === "dark" ? Sun : Moon,
      shortcut: "⌘T",
    },
  ];

  const filtered = query
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  const run = (item: CommandItem) => {
    setOpen(false);
    if (item.href === "#theme") {
      setTheme(theme === "dark" ? "light" : "dark");
    } else if (item.external) {
      window.open(item.href, "_blank");
    } else {
      router.push(item.href);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, pages, links..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded border border-border bg-muted text-xs text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filtered ? (
            filtered.length > 0 ? (
              <div className="px-2">
                {filtered.map((item) => (
                  <PaletteItem key={item.href} item={item} onSelect={() => run(item)} />
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No results for &ldquo;{query}&rdquo;
              </div>
            )
          ) : (
            <>
              {commands.map((group) => (
                <div key={group.group} className="px-2 mb-2">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {group.group}
                  </div>
                  {group.items.map((item) => (
                    <PaletteItem key={item.href} item={item} onSelect={() => run(item)} />
                  ))}
                </div>
              ))}
              <div className="px-2 mb-2">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Theme
                </div>
                <PaletteItem
                  item={{
                    label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
                    href: "#theme",
                    icon: theme === "dark" ? Sun : Moon,
                    shortcut: "⌘T",
                  }}
                  onSelect={() => {
                    setOpen(false);
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↑↓</kbd> navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↵</kbd> select
            </span>
          </div>
          <span>⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}

function PaletteItem({ item, onSelect }: { item: CommandItem; onSelect: () => void }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onSelect}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted transition-colors duration-150 group"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-150">
        <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
      </div>
      <span className="flex-1 text-left">{item.label}</span>
      {item.external && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
      {item.shortcut && (
        <kbd className="hidden sm:inline text-xs text-muted-foreground px-1.5 py-0.5 rounded border border-border bg-muted">
          {item.shortcut}
        </kbd>
      )}
      <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
