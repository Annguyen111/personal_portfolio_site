'use client';

import { Card } from '@/components/ui/card';

const skills = {
  'Frontend': [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'HTML/CSS',
    'JavaScript',
    'Responsive Design',
  ],
  'Backend': [
    'Node.js',
    'Express',
    'PostgreSQL',
    'PHP Laravel',
    'MongoDB',
    'REST APIs',
    'Authentication',
    'Database Design',
  ],
  'Tools & DevOps': [
    'Git',
    'Docker',
    'Vercel',
    'GitHub Actions',
    'CI/CD',
    'Linux',
    'VS Code',
  ],
  'Specializations': [
    'Full-Stack Development',
    'UI/UX Implementation',
    'Performance Optimization',
    'Web Accessibility',
    'System Design',
    'API Development',
    'Component Architecture',
    'Testing & QA',
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            I work with a modern tech stack focused on creating scalable, performant, and maintainable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {items.map((skill, index) => (
                  <Card key={index} className="group p-3 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                    <p className="text-foreground/80 font-medium group-hover:text-primary transition-colors">
                      {skill}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Experience Timeline</h3>
          <div className="space-y-8">
            {[
              {
                period: '2022 - Present',
                role: 'Senior Full-Stack Developer',
                company: 'Tech Startup',
                description: 'Leading development of scalable web applications and mentoring junior developers.',
              },
            ].map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                  {index < 2 && <div className="w-0.5 h-16 bg-border"></div>}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-primary mb-1">{exp.period}</p>
                  <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                  <p className="text-sm text-foreground/60 mb-2">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
