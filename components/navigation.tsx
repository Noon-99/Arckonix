"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    setTimeout(() => {
      const targetId = href.replace("#", "")
      const target = document.getElementById(targetId)

      if (target) {
        const navHeight = 80
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }, 150)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 relative">
          <div className="absolute left-0 flex items-center">
            <Image
              src="/arckonix-logo.png"
              alt="Arckonix"
              width={280}
              height={112}
              className="h-20 w-auto object-contain bg-transparent"
              priority
            />
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "#features")}
                className="text-black hover:text-black transition-all duration-300 hover:drop-shadow-sm font-medium"
              >
                Features
              </a>
              <a
                href="#benefits"
                onClick={(e) => handleNavClick(e, "#benefits")}
                className="text-black hover:text-black transition-all duration-300 hover:drop-shadow-sm font-medium"
              >
                Benefits
              </a>
              <a
                href="#early-access"
                onClick={(e) => handleNavClick(e, "#early-access")}
                className="text-black hover:text-black transition-all duration-300 hover:drop-shadow-sm font-medium"
              >
                Early Access
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-black hover:text-black transition-all duration-300 hover:drop-shadow-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-black transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect mt-2 rounded-lg">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "#features")}
                className="block px-3 py-2 text-black hover:text-black transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#benefits"
                onClick={(e) => handleNavClick(e, "#benefits")}
                className="block px-3 py-2 text-black hover:text-black transition-colors font-medium"
              >
                Benefits
              </a>
              <a
                href="#early-access"
                onClick={(e) => handleNavClick(e, "#early-access")}
                className="block px-3 py-2 text-black hover:text-black transition-colors font-medium"
              >
                Early Access
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block px-3 py-2 text-black hover:text-black transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
