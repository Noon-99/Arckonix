"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, AlertTriangle } from "lucide-react"

export function ProofAuthoritySection() {
  const principles = [
    {
      icon: FileText,
      title: "Drafts, not final answers",
      description: "All outputs are designed for estimator review and refinement.",
    },
    {
      icon: CheckCircle,
      title: "Human review always required",
      description: "AI assists but never replaces professional judgment.",
    },
    {
      icon: AlertTriangle,
      title: "Every output tied back to the drawing",
      description: "Full traceability ensures accountability and accuracy.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Built for{" "}
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Real Estimators
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-pretty">
            Clear principles that guide every feature and output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-white border-2 border-black rounded-2xl hover:border-[#1a4d2e] transition-all duration-300 hover:shadow-lg h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 bg-[#1a4d2e]/10 rounded-full flex items-center justify-center">
                    <principle.icon className="h-8 w-8 text-[#1a4d2e]" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{principle.title}</h3>

                  <p className="text-black leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
