"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "@/lib/framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe } from "lucide-react";

const languages = [
  { name: "Tamil", level: "Native", icon: Globe },
  { name: "English", level: "Proficient", icon: Globe },
  { name: "Sinhala", level: "Intermediate", icon: Globe },
];

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/10 to-muted/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Language Proficiency" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card border border-border/50">
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {languages.map((language, index) => {
                  const Icon = language.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center justify-between p-4 bg-muted/10 rounded-lg hover:bg-accent/20 transition-all duration-300 border border-border/20"
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="h-7 w-7 text-primary flex-shrink-0" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {language.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {language.level}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {language.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}