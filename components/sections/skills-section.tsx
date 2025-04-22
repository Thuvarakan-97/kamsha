"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "@/lib/framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MessageSquare,
  Users,
  Brain,
  Lightbulb,
  Clock,
  UserCheck,
  RefreshCw,
  BookOpen,
  Globe,
  Heart,
  FileText,
  Search,
  Layers,
  BarChart,
  Briefcase,
  Database,
  Clipboard,
  Calculator,
  Mic,
  Layout,
} from "lucide-react";

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Leadership", icon: Users },
  { name: "Decision-Making", icon: Brain },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Collaboration", icon: UserCheck },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Critical Thinking", icon: BookOpen },
  { name: "Cultural Awareness", icon: Globe },
  { name: "Empathy", icon: Heart },
];

const technicalSkills = [
  { name: "Microsoft Office", icon: FileText },
  { name: "Research", icon: Search },
  { name: "Interdisciplinary Skills", icon: Layers },
  { name: "Data Analysis", icon: BarChart },
  { name: "Project Management", icon: Briefcase },
  { name: "Health Informatics", icon: Database },
  { name: "Survey Design", icon: Clipboard },
  { name: "Statistical Software", icon: Calculator },
  { name: "Public Speaking " , icon: Mic },
  { name: "Content Management Systems", icon: Layout },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20 bg-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-primary">Soft Skills</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technicalSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}