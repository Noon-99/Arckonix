"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-metallic" />

        {/* Floating glass elements with logo-based styling */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 glass-effect rounded-2xl float-animation glow-border"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 glass-effect rounded-full pulse-glow"
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 glass-effect rounded-xl glow-border"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black text-balance leading-tight"
          >
            Plan-First Construction
            <br />
            <span className="text-gradient bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-black max-w-4xl mx-auto text-pretty leading-relaxed font-medium"
          >
            From Drawings to Bid-Ready Scopes
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-black max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Turn construction drawings into structured scopes, quantities, and trade-ready bid packages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 shadow-lg glow-border">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] rounded-full animate-pulse" />
              <span className="text-black font-medium">Launching 2026</span>
              <div className="w-1 h-4 bg-black rounded-full" />
              <span className="text-black font-medium">Platform in development</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
