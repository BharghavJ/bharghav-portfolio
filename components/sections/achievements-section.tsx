"use client"

import { motion } from "framer-motion"
import { Star, Award, BadgeCheck } from "lucide-react"

const achievements = [
  {
    title: "Star of the Quarter",
    description: "Recognized for impactful delivery and engineering leadership at Tata Consultancy Services.",
    icon: Star,
  },
  {
    title: "Best Bachelor Thesis",
    description: "Awarded for engineering research, CAD optimization and manufacturing insights.",
    icon: Award,
  },
  {
    title: "ASME Professional Member",
    description: "Active contributor to professional engineering standards and industry best practices.",
    icon: BadgeCheck,
  },
  {
    title: "Lean Six Sigma Yellow Belt",
    description: "Certified in process improvement and manufacturing efficiency for product engineering teams.",
    icon: Award,
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Professional recognition</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Achievement highlights
          </h2>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="section-card p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/5 text-sky-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
