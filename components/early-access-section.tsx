"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Zap, Users, ArrowRight, Sparkles, Clock, Target } from "lucide-react"
import { useState } from "react"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const benefits = [
    {
      icon: Zap,
      title: "Early platform access",
      description: "Be among the first to test the platform.",
    },
    {
      icon: Users,
      title: "Direct feedback to the team",
      description: "Influence product direction and features.",
    },
    {
      icon: Target,
      title: "Priority onboarding",
      description: "Dedicated support during early access.",
    },
  ]

  const timeline = [
    { phase: "Early Access", date: "2026", status: "upcoming" },
    { phase: "Expanded Capabilities", date: "Post-launch", status: "planned" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("Thank you! We'll contact you soon.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to submit. Please try again.")
    }
  }

  return (
    <section id="early-access" className="py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white text-black border-black">
            <Sparkles className="w-4 h-4 mr-2" />
            Early Access Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Early Access Program
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-pretty">
            Help shape the future of AI-assisted estimating and bidding.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
                Platform Benefits
              </span>
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
                        {benefit.title}
                      </span>
                    </h4>
                    <p className="text-black">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Launch Timeline</h3>
                </div>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                      <div>
                        <div className="font-semibold text-foreground">{item.phase}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <Badge
                        variant={item.status === "upcoming" ? "default" : "secondary"}
                        className={item.status === "upcoming" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
                  Join the Waitlist
                </span>
              </h3>
              <p className="text-black mb-6">Get early access when the platform launches in 2026.</p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-background"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading" || status === "success"}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                  >
                    {status === "loading" ? "Submitting..." : status === "success" ? "Submitted!" : "Join Waitlist"}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {message && (
                  <p className={`text-sm mb-2 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                  </p>
                )}
              </form>

              <p className="text-xs text-black/60 mt-4">No commitment • Early access only</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
