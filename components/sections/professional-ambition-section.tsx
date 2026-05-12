"use client"

import { motion } from "framer-motion"
import { Zap, Target, Award } from "lucide-react"

const deliveries = [
  "Automotive Product Development",
  "BIW Systems & Structures",
  "Advanced CAD Design (CATIA V6)",
  "DFMEA & Quality Management",
  "Structural Validation",
  "Manufacturing Coordination",
]

const pursuits = [
  "AI-Driven Production Systems",
  "Intelligent Manufacturing (IM)",
  "Industry 4.0 Transformation",
  "Digital Production Workflows",
  "Predictive Analytics",
  "Smart Factory Systems",
]

const careerGoals = [
  "AI-Enhanced Manufacturing Roles",
  "Intelligent Production Optimization",
  "Automotive Digital Innovation",
  "Advanced Manufacturing Engineering",
  "Process & Systems Engineering",
]

export default function ProfessionalAmbitionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="ambition" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="premium-label">Professional Direction</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-black">Delivered, Pursuing & Growth</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-black/70">
            What I bring to the table, what drives my current focus, and where I'm heading.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* What I've Delivered */}
          <motion.div variants={itemVariants} className="premium-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Award className="w-6 h-6 accent-text" />
              </div>
              <h3 className="text-xl font-bold text-black">Delivered</h3>
            </div>
            <ul className="space-y-3">
              {deliveries.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full mt-2 flex-shrink-0 accent-text bg-blue-500" />
                  <span className="text-sm text-black/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What I'm Pursuing */}
          <motion.div variants={itemVariants} className="premium-card p-8 border-2 accent-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full" style={{ backgroundColor: "var(--accent-blue-light)" }}>
                <Zap className="w-6 h-6 accent-text m-1.5" />
              </div>
              <h3 className="text-xl font-bold accent-text">Pursuing</h3>
            </div>
            <ul className="space-y-3">
              {pursuits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full mt-2 flex-shrink-0 accent-text bg-blue-500" />
                  <span className="text-sm text-black/70 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Career Growth */}
          <motion.div variants={itemVariants} className="premium-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                <Target className="w-6 h-6 accent-text" />
              </div>
              <h3 className="text-xl font-bold text-black">Growth</h3>
            </div>
            <ul className="space-y-3">
              {careerGoals.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full mt-2 flex-shrink-0 accent-text bg-blue-500" />
                  <span className="text-sm text-black/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
