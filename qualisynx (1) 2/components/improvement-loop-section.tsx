"use client"

import { motion } from "framer-motion"
import { Upload, Cpu, FileCheck } from "lucide-react"

export function ImprovementLoopSection() {
  const steps = [
    {
      icon: Upload,
      title: "Plans In",
      description: "Upload drawings and schedules.",
      color: "from-[#1a4d2e] to-[#2d7a4f]",
    },
    {
      icon: Cpu,
      title: "Analysis",
      description: "Relevant trades, scopes, and quantities identified.",
      color: "from-primary to-secondary",
    },
    {
      icon: FileCheck,
      title: "Bid-Ready Output",
      description: "Structured scopes and takeoffs prepared for estimator review.",
      color: "from-[#1a4d2e] to-[#2d7a4f]",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(26, 77, 46, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 77, 46, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Construction Intelligence{" "}
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Simple, focused workflow from drawings to bid-ready outputs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 text-center">
                    {/* Icon with Animated Ring */}
                    <div className="relative mx-auto mb-6 w-16 h-16">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      />
                      <div
                        className={`absolute inset-2 bg-gradient-to-br ${step.color} rounded-full opacity-10 animate-pulse`}
                      />
                      <div className="relative w-full h-full bg-card border border-border rounded-full flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Step Number */}
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #1a4d2e, #2d7a4f)",
                      boxShadow: "0 2px 8px rgba(26, 77, 46, 0.3)",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Upload className="h-6 w-6 text-primary" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full">
            <Cpu className="h-4 w-4 text-primary animate-spin" />
            <span className="text-sm font-semibold text-primary">
              Continuous processing ensures accuracy and efficiency
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
