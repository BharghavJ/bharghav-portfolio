"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-minimal shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : "bg-white/50 backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <motion.div whileHover={{ scale: 1.02 }} className="text-sm font-semibold tracking-tight text-black">
          Bharghav Janapareddi
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-black/70 transition-colors hover:text-black"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-black/5">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-black/70 hover:text-black hover:bg-black/5" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
