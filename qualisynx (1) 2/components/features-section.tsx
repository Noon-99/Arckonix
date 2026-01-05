"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Shield, Sparkles, FileSearch } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Automated Plan Understanding",
    description: "Identifies relevant sheets, trades, and scope signals from construction drawings.",
    badge: "Automated",
  },
  {
    icon: Zap,
    title: "Structured Scope & Quantity Drafts",
    description: "Produces draft scopes and quantities aligned for estimating and bidding.",
    badge: "Structured",
  },
  {
    icon: Shield,
    title: "Bid Completeness Checks",
    description: "Highlights missing scope, unclear inputs, and risk areas before bids go out.",
    badge: "Validated",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a4d2e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2d7a4f]/5 rounded-full blur-3xl" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#1a4d2e]/20 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white text-black border-black font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Advanced Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black font-[var(--font-montserrat)] mb-4">
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Built for Estimating & Bidding
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-pretty">
            A focused platform designed to accelerate estimating, scope creation, and bid preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full border-black hover:border-[#1a4d2e] transition-all duration-500 group hover:shadow-2xl hover:shadow-[#1a4d2e]/10 bg-gradient-to-br from-white to-white relative overflow-hidden flex flex-col`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a4d2e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <CardHeader className="text-center pb-4 relative z-10 flex-1 flex flex-col justify-start">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#1a4d2e]/20 to-[#2d7a4f]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative">
                    <feature.icon className="h-10 w-10 text-[#1a4d2e]" />
                    <div className="absolute inset-0 bg-[#1a4d2e]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>
                  <Badge variant="secondary" className="mb-3 bg-white text-black border-black font-medium mx-auto">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-black font-[var(--font-montserrat)] mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-black leading-relaxed">{feature.description}</CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs text-black border-black">
                      In development
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-[#1a4d2e] bg-gradient-to-br from-[#1a4d2e]/5 to-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d7a4f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a4d2e] to-[#2d7a4f] rounded-lg flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">Example</CardTitle>
              </div>
              <CardDescription className="text-black">
                See how construction drawings become structured, bid-ready data
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="bg-white border-2 border-[#1a4d2e] rounded-lg p-6 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <p className="text-black font-semibold mb-2">Drawing Input</p>
                    <p className="text-black italic">"Replace Existing Windows – E-6"</p>
                  </div>
                  <div className="border-t-2 border-[#1a4d2e]/20 pt-4">
                    <p className="text-black font-semibold mb-3">Structured Output</p>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1a4d2e] rounded-full"></span>
                        <span>Trade identified</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1a4d2e] rounded-full"></span>
                        <span>Scope drafted</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1a4d2e] rounded-full"></span>
                        <span>Quantities prepared for bid review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border-2 border-black">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#1a4d2e]" />
              <h3 className="text-lg font-semibold text-black">Powered by Modern AI</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black font-medium">
              <div>Plan Analysis</div>
              <div>Language Understanding</div>
              <div>Trade Classification</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
