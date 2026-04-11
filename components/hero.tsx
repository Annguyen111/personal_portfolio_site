"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-pretty">
                <span className="text-foreground">Building Digital</span>
                <br />
                <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl text-pretty">
              I&apos;m a full-stack web developer passionate about creating
              beautiful, performant, and accessible digital experiences. With
              expertise in modern web technologies and a keen eye for design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-foreground/20 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors">
                Download Resume
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-foreground/60">Projects Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">8+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-foreground/60">Client Satisfied</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 w-full aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 blur-2xl"></div>
            <div className="relative w-full aspect-square rounded-2xl border border-border overflow-hidden">
              <Image
                src="/CV.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
