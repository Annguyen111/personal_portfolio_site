'use client';

import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully functional e-commerce platform with payment integration, inventory management, and advanced search capabilities.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '🛍️',
    href: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A selection of recent projects that showcase my expertise in full-stack development, UI design, and technical problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden border-b border-border">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
