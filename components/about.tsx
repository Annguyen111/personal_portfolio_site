"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border shadow-lg">
            <Image
              src="/CV.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                About me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Crafting digital experiences with precision
              </h2>
            </div>
          </div>

          <div className="space-y-6 md:col-span-1">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I&apos;m a passionate web developer with a deep commitment to
              creating accessible, pixel-perfect user interfaces that blend
              thoughtful design with robust engineering. My favorite work lies
              at the intersection of design and development, creating
              experiences that not only look great but are meticulously built
              for performance and usability.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Currently, I work as a Senior Developer, specializing in
              full-stack development. I contribute to the creation and
              maintenance of scalable applications, ensuring our platforms meet
              the highest standards of performance and accessibility while
              delivering exceptional user experiences.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              In the past, I&apos;ve had the opportunity to develop software
              across diverse settings—from advertising agencies and large
              corporations to innovative startups. I also created a
              comprehensive video course, guiding learners through building
              modern web applications.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What I do
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">→</span>
                  <span className="text-foreground/70">UI/UX Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">→</span>
                  <span className="text-foreground/70">Web Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">→</span>
                  <span className="text-foreground/70">Full-Stack Apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">→</span>
                  <span className="text-foreground/70">Performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
