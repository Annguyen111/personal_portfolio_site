'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Let&apos;s work together
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <Input
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input
                type="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <Input
                type="text"
                required
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <Textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" className="w-full">
              {submitted ? 'Message Sent! ✨' : 'Send Message'}
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Connect with me</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I&apos;m always open to new opportunities, collaborations, and interesting conversations. Don&apos;t hesitate to reach out if you&apos;d like to work together or just chat about web development.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:anvy1791@gmail.com"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-secondary/5 hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-semibold text-foreground">anvy1791@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-secondary/5 hover:border-primary/50 transition-all group"
                >
                  
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <p className="font-semibold text-foreground">https://github.com/Annguyen111</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Mail, href: 'mailto:hello@example.com' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
