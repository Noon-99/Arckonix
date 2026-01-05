"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Users } from "lucide-react"

export function TechStackSection() {
  const foundations = [
    {
      icon: Shield,
      title: "Secure project handling",
      description: "All construction data processed with enterprise-grade security.",
    },
    {
      icon: FileText,
      title: "Clear traceability to drawings",
      description: "Every output links back to source drawings for verification.",
    },
    {
      icon: Users,
      title: "Designed for estimator workflows",
      description: "Built specifically for construction estimating and bidding teams.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Circuit-style Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h20v-20h60v20h20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary"
              />
              <path
                d="M50 0v20h-20v60h20v20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary"
              />
              <circle cx="20" cy="30" r="2" fill="currentColor" className="text-primary" />
              <circle cx="80" cy="70" r="2" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 text-balance">
            Platform{" "}
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Foundations
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-pretty">
            Core capabilities that support reliable construction intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foundations.map((foundation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-white border-2 border-black rounded-2xl hover:border-[#1a4d2e] transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 bg-[#1a4d2e]/10 rounded-full flex items-center justify-center">
                    <foundation.icon className="h-8 w-8 text-[#1a4d2e]" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{foundation.title}</h3>

                  <p className="text-black leading-relaxed">{foundation.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
