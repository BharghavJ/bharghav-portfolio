"use client"

import { motion } from "framer-motion"
import { Cpu, Layers, Activity, Settings, Globe2 } from "lucide-react"

const interests = [
  { title: "ADAS", description: "Advanced driver assistance systems for safer vehicle design.", icon: Cpu },
  { title: "Intelligent Automotive Systems", description: "Smart vehicle control and connected mobility workflows.", icon: Layers },
  { title: "Industry 4.0", description: "Integrated digital production and intelligent factory systems.", icon: Activity },
  { title: "AI in Manufacturing", description: "Data-driven process optimization for production reliability.", icon: Settings },
  { title: "Automation Systems", description: "Factory automation and engineering control architecture.", icon: Globe2 },
  { title: "Digital Engineering", description: "Digital workflows, CAD collaboration and PLM-driven delivery.", icon: Globe2 },
]

export default function InterestsSection() {
  return (
    <section id="interests" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Technical interests</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Engineering-focused areas of passion
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interests.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="section-card p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/5 text-slate-950 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
