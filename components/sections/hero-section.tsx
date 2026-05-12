"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowDown,
  Download,
  Briefcase,
  Cpu,
  Factory,
  MapPin,
} from "lucide-react"

export default function HeroSection() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const infoCards = [
    {
      label: "Experience",
      value: "3.5+ Years",
      icon: Briefcase,
    },
    {
      label: "Focus",
      value: "Automotive Engineering",
      icon: Cpu,
    },
    {
      label: "Current",
      value: "AI & Digital Production",
      icon: Factory,
    },
    {
      label: "Location",
      value: "Germany",
      icon: MapPin,
    },
  ]

  return (
    <>
      {/* ================================================= */}
      {/* PREMIUM STICKY NAVBAR */}
      {/* ================================================= */}

      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* NAME / LOGO */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-black"
          >
            Bharghav Janapareddi
          </a>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-black/70 hover:text-blue-600 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden pt-36 pb-24 flex items-center bg-white"
      >

        {/* ================================================= */}
        {/* PREMIUM AI + MANUFACTURING BACKGROUND */}
        {/* ================================================= */}

        <div className="absolute inset-0 overflow-hidden">

          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

          {/* Glow Effects */}
          <div className="absolute top-24 left-0 w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full" />

          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-200/20 blur-3xl rounded-full" />

          <div className="absolute bottom-0 left-1/3 w-[700px] h-[300px] bg-blue-100/20 blur-3xl rounded-full" />

          {/* Technical Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #2563eb 1px, transparent 1px),
                linear-gradient(to bottom, #2563eb 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* AI Circuit SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              d="M0 200 Q 400 100 800 300 T 1600 250"
              stroke="#2563eb"
              strokeWidth="2"
              fill="none"
            />

            <path
              d="M200 600 Q 600 500 1000 700 T 1800 650"
              stroke="#06b6d4"
              strokeWidth="2"
              fill="none"
            />

            <circle cx="300" cy="180" r="6" fill="#2563eb" />

            <circle cx="900" cy="280" r="6" fill="#06b6d4" />

            <circle cx="1200" cy="600" r="6" fill="#2563eb" />

          </svg>

          {/* Circular Design Elements */}
          <div className="absolute top-32 right-40 w-72 h-72 border border-blue-200/30 rounded-full" />

          <div className="absolute top-40 right-48 w-56 h-56 border border-cyan-200/30 rounded-full" />

          <div className="absolute bottom-20 left-20 w-40 h-40 border border-blue-100/30 rounded-full" />

          {/* Floating Blur */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-200/10 rounded-full blur-2xl animate-pulse" />

          <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-blue-200/10 rounded-full blur-2xl animate-pulse" />

        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >

              {/* TOP TAG */}
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 backdrop-blur-xl px-5 py-2 shadow-sm mb-8">

                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-black">
                  Automotive × AI × Manufacturing
                </span>

              </div>

              {/* MAIN NAME */}
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.92]">

                <span className="text-black">
                  Bharghav
                </span>

                <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Janapareddi
                </span>

              </h1>

              {/* TITLE */}
              <p className="mt-8 text-2xl lg:text-3xl font-semibold text-black/80 leading-snug max-w-2xl">
                Automobile Design Engineer | AI for Digital Production Management
              </p>

              {/* INTRO */}
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-black/70 font-light">
                Bridging Automotive Engineering, AI, and Intelligent Manufacturing Systems.
                Mechanical Engineer with 3.5+ years of experience in automotive product development,
                currently specializing in AI-driven production systems and Industry 4.0 technologies.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-6 mt-12">

                {/* EXPLORE PROJECTS */}
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-2xl bg-white border border-black/10 text-black font-semibold shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Projects
                </a>

                {/* CONTACT */}
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl bg-white border border-black/10 text-black font-semibold shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Me
                </a>

                {/* DOWNLOAD RESUME */}
                <a
                  href="/Bharghav-Janapareddi-Resume.pdf"
                  download="Bharghav-Janapareddi-Resume.pdf"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_10px_30px_rgba(0,119,255,0.3)] hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(0,119,255,0.4)] transition-all duration-300"
                >

                  <Download className="w-5 h-5" />

                  Download Resume

                </a>

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* RIGHT PROFILE IMAGE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center"
            >

              {/* BLUE GLOW */}
              <div className="absolute w-[320px] h-[320px] bg-blue-200/30 blur-3xl rounded-full" />

              {/* IMAGE CONTAINER */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4 }}
                className="relative w-[300px] h-[380px] lg:w-[340px] lg:h-[440px]"
              >

                {/* PROFILE IMAGE */}
                <Image
                  src="/profile.png"
                  alt="Bharghav Janapareddi"
                  fill
                  priority
                  className="
                    object-cover
                    rounded-[32px]
                    shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              </motion.div>

            </motion.div>

          </div>

          {/* ================================================= */}
          {/* INFO CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">

            {infoCards.map((card) => {
              const Icon = card.icon

              return (
                <motion.div
                  key={card.label}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-7 shadow-[0_10px_40px_rgba(0,119,255,0.08)] hover:shadow-[0_20px_60px_rgba(0,119,255,0.18)] transition-all duration-500"
                >

                  <div className="flex items-start gap-4">

                    {Icon && (
                      <Icon className="w-7 h-7 text-cyan-600 mt-1 flex-shrink-0" />
                    )}

                    <div>

                      <p className="text-xs uppercase tracking-[0.15em] text-black/45 font-semibold">
                        {card.label}
                      </p>

                      <p className="mt-3 text-2xl font-bold text-black leading-snug">
                        {card.value}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )
            })}

          </div>

        </div>

        {/* ================================================= */}
        {/* SCROLL INDICATOR */}
        {/* ================================================= */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >

          <div className="flex flex-col items-center gap-2">

            <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold">
              Explore Journey
            </p>

            <ArrowDown className="w-4 h-4 text-black/40" />

          </div>

        </motion.div>

      </section>
    </>
  )
}