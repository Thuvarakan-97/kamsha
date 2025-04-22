"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "@/lib/framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Languages", href: "/#languages" },
    { name: "Contact", href: "/#contact" },
  ];

  const quickLinksPart1 = quickLinks.slice(0, 4); // Home, About, Education, Experience
  const quickLinksPart2 = quickLinks.slice(4); // Skills, Languages, Contact

  return (
    <footer className="w-full bg-gradient-to-b from-muted/20 to-muted/40 py-12 mt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-primary">Kamsha Ponraj</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Empowering Health, Inspiring Wellness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-base font-semibold text-primary mb-3">Quick Links</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {quickLinksPart1.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary hover:underline transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {quickLinksPart2.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary hover:underline transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-base font-semibold text-primary mb-3">Connect With Me</h4>
            <div className="flex space-x-4">
              <Link
                href="mailto:kamshaponraj@gmail.com"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
              <Link
                href="https://github.com/Kamsha-Ponraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kamsha-ponraj-8b8a70337/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="tel:766823180"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={24} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {year} Kamsha Ponraj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}