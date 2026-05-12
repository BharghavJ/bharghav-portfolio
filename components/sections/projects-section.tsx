"use client"

import { motion } from "framer-motion"
import { Download, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Threshold-Based Predictive Maintenance System",
    objective: "Real-time anomaly detection for DC motors using embedded systems",
    description:
      "Developed a low-cost predictive maintenance system using vibration and temperature sensors integrated with Arduino-based monitoring. Applied Z-score standardisation, temporal validation, and threshold-based anomaly detection for real-time fault monitoring of rotating machinery.",

    technologies: [
      "Arduino Uno",
      "ADXL345",
      "DS18B20",
      "Python",
      "Signal Processing",
      "Predictive Maintenance",
      "Embedded Systems",
    ],

    result:
      "Successfully differentiated normal and faulty operating conditions using a unified statistical threshold and real-time monitoring logic.",

    impact:
      "Enabled reliable low-cost predictive maintenance for industrial motor monitoring.",

    report: "/reports/predictive-maintenance.pdf",
  },

  {
    id: 2,
    title: "NKD AI-Based Article Image Generation using SDXL",
    objective: "Automated fashion article image generation using Generative AI",

    description:
      "Designed and implemented an AI-driven image generation pipeline using Stable Diffusion XL (SDXL) and LoRA fine-tuning to automatically create high-quality product imagery from textual descriptions for NKD fashion workflows.",

    technologies: [
      "Stable Diffusion XL",
      "LoRA",
      "Python",
      "Diffusers",
      "Prompt Engineering",
      "Generative AI",
      "GPU Processing",
    ],

    result:
      "Achieved scalable AI-powered image generation with optimized prompt engineering and automated batch processing workflows.",

    impact:
      "Accelerated content creation and reduced manual product image generation effort.",

    report: "/reports/nkd-case-study.pdf",
  },
]

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >

      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-100/30 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/20 blur-3xl rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================================================= */}
        {/* SECTION HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-blue-600">
            Featured Projects
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-tight text-black">
            Engineering + AI Solutions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/70">
            Selected projects demonstrating automotive engineering,
            intelligent manufacturing systems, predictive maintenance,
            and AI-driven digital production workflows.
          </p>

        </motion.div>

        {/* ================================================= */}
        {/* PROJECT CARDS */}
        {/* ================================================= */}

        <motion.div
          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, amount: 0.2 }}

          className="grid gap-10 lg:grid-cols-2"
        >

          {projects.map((project) => (

            <motion.article
              key={project.id}

              variants={itemVariants}

              whileHover={{ y: -10 }}

              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-blue-100
                bg-white/90
                backdrop-blur-xl
                p-10
                shadow-[0_15px_60px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_80px_rgba(0,119,255,0.15)]
                transition-all
                duration-500
              "
            >

              {/* TOP ICON */}

              <div className="flex items-center justify-between mb-8">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">

                  <Zap className="w-7 h-7 text-white" />

                </div>

                <span className="text-xs uppercase tracking-[0.18em] text-black/40 font-semibold">
                  CASE STUDY
                </span>

              </div>

              {/* TITLE */}

              <h3 className="text-3xl font-black leading-tight text-black mb-5">
                {project.title}
              </h3>

              {/* OBJECTIVE */}

              <div className="inline-flex px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                {project.objective}
              </div>

              {/* DESCRIPTION */}

              <p className="text-black/70 leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}

              <div className="mb-8">

                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-black/40 mb-4">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}

                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-slate-100
                        text-sm
                        font-medium
                        text-black/70
                        border
                        border-black/5
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* IMPACT + RESULT */}

              <div className="grid md:grid-cols-2 gap-6 mb-10">

                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">

                  <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-semibold mb-3">
                    Impact
                  </p>

                  <p className="text-black font-semibold leading-relaxed">
                    {project.impact}
                  </p>

                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-black/5">

                  <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold mb-3">
                    Outcome
                  </p>

                  <p className="text-black/70 leading-relaxed">
                    {project.result}
                  </p>

                </div>

              </div>

              {/* DOWNLOAD BUTTON */}

              <a
                href={project.report}
                download
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-[0_10px_30px_rgba(0,119,255,0.25)]
                  hover:scale-[1.02]
                  hover:shadow-[0_15px_40px_rgba(0,119,255,0.35)]
                  transition-all
                  duration-300
                "
              >

                <Download className="w-5 h-5" />

                Download Report

              </a>

            </motion.article>

          ))}

        </motion.div>

        {/* ================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.4, duration: 0.6 }}

          viewport={{ once: true }}

          className="text-center mt-24"
        >

          <p className="text-black/60 text-lg mb-8">
            Interested in AI-driven manufacturing and intelligent production systems?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-5
              rounded-2xl
              bg-black
              text-white
              font-semibold
              hover:bg-blue-600
              transition-all
              duration-300
            "
          >
            Let’s Connect
          </a>

        </motion.div>

      </div>
    </section>
  )
}