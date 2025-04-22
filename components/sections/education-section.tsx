"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "@/lib/framer-motion";
import { Calendar, GraduationCap, School } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const educationData = [
  {
    degree: "B.Sc in Health Promotion",
    institution: "Rajarata University of Sri Lanka",
    period: "2021-2025",
    status: "Reading",
    icon: GraduationCap,
  },
  {
    degree: "Spoken English Course",
    institution: "British English Language Centre, Mullaitivu",
    period: "2021",
    status: "Completed",
    icon: School,
  },
  {
    degree: "Diploma in Human Resource Management",
    institution: "Comparative Analysis for Scientific Environmental Development (CASED)",
    period: "2025 - 2026",
    status: "Reading",
    icon: School,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <SectionTitle title="Education" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border">
                <CardHeader className="bg-muted/50 relative p-6">
                  <div className="absolute top-6 right-6 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {item.degree}
                    {item.status && (
                      <span className="text-sm font-medium ml-2 text-muted-foreground">
                        ({item.status})
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}