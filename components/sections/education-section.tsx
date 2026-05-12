"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    title: "Master's in AI for Digital Production Management",
    school: "Technische Hochschule Deggendorf, Germany",
    keyPoints: ["Machine Learning", "Cyber Physical Production Systems", "Production Data Management", "Digital Manufacturing"],
  },
  {
    title: "Bachelor's in Mechanical Engineering",
    school: "Anil Neerukonda Institute of Technology, India",
    keyPoints: ["CAD Modeling", "Structural Design", "Manufacturing Systems", "Product Development"],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Academic foundation</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Academic milestones in engineering and AI
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            The combination of mechanical engineering fundamentals and advanced digital production studies forms the core of my approach.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.1 }}
              className="section-card p-8"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
                  {index === 0 ? <GraduationCap className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{index === 0 ? "Master's" : "Bachelor's"}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{item.title}</h3>
                </div>
              </div>

              <p className="mt-6 text-slate-600 leading-7">{item.school}</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {item.keyPoints.map((point) => (
                  <div key={point} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
