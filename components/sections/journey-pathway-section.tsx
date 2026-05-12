"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Cpu, Zap } from "lucide-react"

const milestones = [
  {
    year: "2017",
    title: "Mechanical Engineering",
    organization: "University",
    description: "Foundation in mechanical design, thermodynamics, and manufacturing processes",
    achievement: "Core engineering fundamentals",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2021",
    title: "CAD Engineer",
    organization: "Tata Consultancy Services • Citroën",
    description: "Transitioned to automotive with focus on BIW structural design and CAD modeling",
    achievement: "CATIA V6, UGNX, BOM Management",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2022",
    title: "Product Engineer",
    organization: "Tata Consultancy Services • Citroën",
    description: "Advanced to product engineering with responsibility for safety systems and validation",
    achievement: "Airbag Systems Integration, DFMEA, Manufacturing Readiness",
    icon: Cpu,
    type: "work",
  },
  {
    year: "2025",
    title: "Master's in AI for Digital Production",
    organization: "Germany",
    description: "Advanced specialization in AI-driven manufacturing systems and Industry 4.0",
    achievement: "Production Data Systems, Cyber-Physical Systems, Smart Factory Architecture",
    icon: Zap,
    type: "education",
  },
]

export default function JourneyPathwaySection() {
  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="premium-label">Career Evolution</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-black">Professional Journey</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-black/70">
            From mechanical engineering fundamentals to AI-driven digital production systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 lg:w-0.5 milestone-line opacity-30 lg:opacity-20" />

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className={`relative flex ${isLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-1/2 top-4 w-full lg:w-auto flex justify-start lg:justify-center">
                    <div className="milestone-dot relative z-10 shadow-lg" />
                  </div>

                  {/* Content */}
                  <div className={`w-full ${isLeft ? "lg:w-1/2 lg:pr-12" : "lg:w-1/2 lg:pl-12"} pl-10 lg:pl-0`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="premium-card p-8 h-full"
                    >
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 accent-text" />
                          </div>
                          <span className="text-sm font-bold accent-text uppercase tracking-wide">{milestone.year}</span>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "var(--accent-blue-light)", color: "var(--accent-blue)" }}>
                          {milestone.type === "education" ? "Education" : "Experience"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-black mb-2">{milestone.title}</h3>

                      {/* Organization */}
                      <p className="text-sm font-semibold text-black/60 mb-4">{milestone.organization}</p>

                      {/* Description */}
                      <p className="text-base text-black/70 leading-relaxed mb-6">{milestone.description}</p>

                      {/* Achievement */}
                      <div className="pt-4 border-t border-black/5">
                        <p className="text-xs uppercase tracking-[0.06em] font-semibold text-black/50 mb-2">Key Focus</p>
                        <p className="text-sm font-medium text-black">{milestone.achievement}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-black/60 mb-6">Interested in collaborating on intelligent manufacturing projects?</p>
          <a href="#contact" className="premium-button-accent">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
