"use client"

import { motion } from "framer-motion"

const highlights = [
  "3.5 years of automotive product development expertise",
  "Mechanical foundation in BIW design, CAD, DFMEA and APQP",
  "Current Master’s in AI for Digital Production Management in Germany",
  "Passion for intelligent manufacturing, automation, and digital engineering workflows",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.08em] font-semibold text-black/50">Professional Story</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-black sm:text-5xl">
            Engineering a premium career journey
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base lg:text-lg leading-8 text-black/70 sm:text-lg">
            From mechanical engineering to automotive product design and an advanced AI master’s focus, this portfolio tells a concise story of systems thinking, technical depth, and manufacturing intelligence.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="premium-card p-10"
          >
            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-black/3 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-black/50">Career Focus</p>
                <p className="mt-2 text-xl font-semibold text-black">Automotive Product Engineering & AI-enabled Manufacturing</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-black/70">
                I deliver precise automotive design and digital production management by bridging vehicle structure engineering with intelligent manufacturing systems. My work strengthens product quality, reduces complexity, and creates pathways for Industry 4.0 adoption.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/10 bg-black/3 p-4">
                    <p className="text-sm text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="grid gap-6"
          >
            <div className="premium-card p-8">
              <div className="mb-5 flex items-center gap-3 text-black">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-black/50">Design Systems</p>
                  <p className="mt-1 font-semibold">BIW, CAD, DFMEA</p>
                </div>
              </div>
              <p className="text-black/70 leading-7">
                Delivered body-in-white development and structural validation with CATIA V6, enabling robust passenger safety and manufacturing readiness.
              </p>
            </div>

            <div className="section-card p-8">
              <div className="mb-5 flex items-center gap-3 text-slate-950">

                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">AI & Production</p>
                  <p className="mt-1 font-semibold">Digital Manufacturing</p>
                </div>
              </div>
              <p className="text-slate-600 leading-7">
                Focused on production data management, cyber-physical systems and intelligent factory workflows as part of a German AI master’s program.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
