"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "@/lib/framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const experienceData = [
  {
    title: "Health Promotion Facilitator",
    company: "Mihintale, Anuradhapura District",
    period: "March 2023 - February 2025",
    description: "2 years of community-based field experience, worked with children, women, mothers, and men to improve overall health and wellbeing.",
  },
  {
    title: "University Student Ambassador",
    company: "National Child Protection Authority",
    period: "2023 - present",
    description: "Working with stakeholders to create child friendly and protective environment for children.",
  },
  {
    title: "District Leader (Mullativu)",
    company: "National Child Protection Authority",
    period: "March 2025 - present",
    description: "Coordinating the Mullaitivu district university student ambassadors to work with schools.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <SectionTitle title="Work Experience" />
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg">
                <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300">
                  <CardHeader className="bg-muted/50 p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}