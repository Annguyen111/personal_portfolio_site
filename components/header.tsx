"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold text-primary">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Dev
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
          Get in Touch
        </button>
      </nav>
    </header>
  );
}
