"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Download, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project inquiry",
    message: "",
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:bharghavjb02@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    toast({
      title: "Email composer opened",
      description: "Your message is ready to send through your email client.",
    })
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="premium-label">Get In Touch</p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Let's Connect & Collaborate
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70">
            Interested in discussing AI-driven manufacturing,
            automotive innovation, or intelligent production systems?
            Let's talk.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr]">

          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="premium-card p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
              />

              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[220px] w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
              />

              <button
                type="submit"
                className="premium-button-primary inline-flex items-center gap-2"
              >
                Send Email
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >

            {/* Contact Info */}
            <div className="premium-card p-8">

              <div className="mb-6">
                <h3 className="text-black flex items-center gap-3 text-lg font-semibold">
                  <Mail className="h-5 w-5 accent-text" />
                  Let's Connect
                </h3>
              </div>

              <div className="space-y-4 text-black/70">

                <p className="leading-relaxed">
                  I'm always interested in discussing AI-driven manufacturing,
                  automotive innovation, and intelligent production systems.
                </p>

                <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                  <p className="text-sm font-semibold accent-text mb-1">
                    Email
                  </p>

                  <p className="font-semibold text-black">
                    bharghavjb02@gmail.com
                  </p>
                </div>

                <div className="rounded-lg border border-black/10 bg-black/2 p-4">
                  <p className="text-sm font-semibold text-black/50 mb-1">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/bharghav-janapareddi-15a574181"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold accent-text hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

              </div>
            </div>

            {/* Resume Download Card */}
            <div className="premium-card p-8 text-center">

              <a
                href="/Bharghav-Janapareddi-Resume.pdf"
                download
                className="premium-button-accent inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}