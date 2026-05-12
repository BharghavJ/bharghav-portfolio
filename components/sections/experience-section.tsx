"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const roles = [
  {
    title: "Product Engineer",
    company: "Tata Consultancy Services",
    client: "Citroën",
    dates: "2022 — 2025",
    highlights: [
      "Led BIW underbody and upper body component development for premium passenger vehicles.",
      "Integrated 6-airbag systems with safety architecture and manufacturing constraints.",
      "Delivered structural failure root cause analysis and corrective design updates.",
    ],
    skills: ["CATIA V6", "DFMEA", "PLM", "Supplier Coordination"],
  },
  {
    title: "CAD Engineer",
    company: "Tata Consultancy Services",
    client: "Citroën",
    dates: "2021 — 2022",
    highlights: [
      "Created premium structural CAD models and BOM packages for manufacturing release.",
      "Supported APQP activities, design reviews, and cross-site coordination.",
      "Optimized supplier handoff and manufacturing readiness through data-driven review.",
    ],
    skills: ["UGNX", "BOM Management", "Design Validation", "Manufacturing Optimization"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.08em] font-semibold text-black/50">Professional experience</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-black sm:text-5xl">
            Automotive product engineering journey
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base lg:text-lg leading-8 text-black/70 sm:text-lg">
            A clean, vertical timeline of high-impact roles at Tata Consultancy Services supporting Citroën vehicle engineering and digital production workflows.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-black/10" />
          <div className="space-y-10 pl-14 lg:pl-20">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="timeline-dot absolute left-0 top-4" />
                <div className="premium-card p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/50">{role.dates}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-black">{role.title}</h3>
                      <p className="mt-2 text-sm text-black/50">
                        {role.company} — Client: {role.client}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/3 px-4 py-2 text-sm font-medium text-black/70">
                      <Briefcase className="h-4 w-4 text-black/50" />
                      Automotive Product Design
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-black/70">
                    {role.highlights.map((highlight) => (
                      <p key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-black" />
                        {highlight}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {role.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-black/10 bg-black/3 px-4 py-2 text-sm text-black/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
