"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

const categories = [
  {
    title: "AI & Data",
    icon: "🤖",
    items: ["Python", "Machine Learning", "Power BI", "Data Analysis"],
  },
  {
    title: "CAD & Engineering Tools",
    icon: "🎯",
    items: ["CATIA V5/V6", "UGNX", "SolidWorks", "AutoCAD", "ENOVIA"],
  },
  {
    title: "Automotive Engineering",
    icon: "🚗",
    items: ["BIW Design", "DFMEA", "APQP", "PLM", "Product Design"],
  },
  {
    title: "Manufacturing & Industry 4.0",
    icon: "⚙️",
    items: ["Digital Manufacturing", "Cyber Physical Systems", "Production Data Management", "Automation Systems"],
  },
  {
    title: "Business & Management",
    icon: "📊",
    items: ["Supplier Coordination", "Manufacturing Optimization", "BOM Management", "Project Delivery"],
  },
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="premium-label">Core Capabilities</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Skills Built for Engineering & Production Intelligence
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70">
            A strategic skills set designed for premium automotive engineering, digital manufacturing, and AI-enabled decision making.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="premium-card p-6 flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-black leading-tight flex-1">{category.title}</h3>
                <span className="text-2xl flex-shrink-0 ml-2">{category.icon}</span>
              </div>
              <div className="space-y-2 flex-grow">
                {category.items.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-black/8 bg-black/2 px-3 py-2 text-sm text-black/70 font-medium group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 premium-card p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-5 h-5 accent-text" />
            <p className="text-lg font-semibold accent-text">Full-Stack Engineering Expertise</p>
          </div>
          <p className="text-black/70 max-w-2xl mx-auto">
            From concept design and CAD mastery to production-ready systems, combined with modern AI/ML capabilities and Industry 4.0 architectural knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
