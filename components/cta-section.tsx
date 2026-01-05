"use client"
import { Sparkles, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-white/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-semibold text-lg">Launching Soon</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-[var(--font-montserrat)] text-balance drop-shadow-lg">
            Prepare Better Bids, Faster
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            Join the waitlist for early access.
          </p>

          <div className="pt-8">
            <a
              href="mailto:info@constructionarchonix.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              }}
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <p className="text-white/60 text-sm mt-4">info@constructionarchonix.com</p>
          </div>

          <div className="pt-4 text-white/80 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Priority access • No commitment • Launch 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
