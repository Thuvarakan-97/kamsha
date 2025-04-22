"use client";

import SectionTitle from "@/components/section-title";
import { motion } from "@/lib/framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden shadow-xl border-4 border-primary/10"
          >
           <Image
              src="/profile.jpeg"
              alt="Kamsha Ponraj"
              width={800}
              height={1200}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 mx-4">
              B.Sc Health Promotion Undergraduate
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              I am a dedicated health promotion professional with a passion for improving community wellbeing. With 2 years of experience working with diverse populations, I have developed a strong foundation in health education, community engagement, and program development.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              As a University Student Ambassador for the National Child Protection Authority, I work closely with stakeholders to create safe environments for children. My recent appointment as District Leader for Mullativu allows me to coordinate university student ambassadors in their work with schools.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I am committed to using evidence-based approaches to address health disparities and promote wellbeing across diverse communities. My combination of academic knowledge and practical experience enables me to develop and implement effective health promotion strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}