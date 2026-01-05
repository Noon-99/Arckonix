"use client"

import { Zap, Target, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Zap,
    title: "Faster bid preparation",
    description: "Reduce time from drawings to estimates.",
  },
  {
    icon: Target,
    title: "Fewer missed scope items",
    description: "Automated detection of trade requirements.",
  },
  {
    icon: Shield,
    title: "More consistent estimates",
    description: "Standardized approach across all projects.",
  },
  {
    icon: TrendingUp,
    title: "Scale bidding without scaling headcount",
    description: "Handle more opportunities efficiently.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-black font-[var(--font-montserrat)] mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              ConstructionArchonix
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-pretty">
            Measurable improvements to your estimating and bidding workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-[var(--font-montserrat)] mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
