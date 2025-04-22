"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/lib/framer-motion";
import { ArrowDown, Download} from "lucide-react";
import Link from "next/link";
import { socialLinksData } from "@/data/socialLinks";
import { Mail, Github, Gitlab, Facebook, Twitter, Instagram, Linkedin} from "lucide-react";

const iconMap = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Github: Github,
  Linkedin: Linkedin,
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--gradient-start)_0%,var(--gradient-end)_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,var(--gradient-start-dark)_0%,var(--gradient-end-dark)_100%)] opacity-40" />
      
      <div className="container flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-primary">Kamsha Ponraj</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            B.Sc Health Promotion Undergraduate with a passion for improving community wellbeing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button asChild size="lg" className="text-base">
            <Link href="/#contact">Contact Me</Link>
          </Button>
          <Button variant="outline" asChild>
              <a href="/kamsha.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>

           

        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {socialLinksData.map(({ href, label, iconName }) => {
              const Icon = iconMap[iconName as keyof typeof iconMap];
              return (
                <Link key={href} href={href} target="_blank" aria-label={label}>
                  <Icon className="h-6 w-6 hover:text-primary transition-colors" />
                </Link>
              );
            })}
          </div>
        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Link href="/#about" scroll={false} aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}