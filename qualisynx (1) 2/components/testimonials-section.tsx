"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "MDS Coordinator",
    facility: "Sunrise Manor",
    content:
      "Qualisynx has transformed our compliance process. We went from dreading surveys to feeling completely prepared.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    title: "Administrator",
    facility: "Heritage Care Center",
    content:
      "The F-Tag dashboard gives us real-time visibility into our compliance status. No more surprises during surveys.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    title: "DON",
    facility: "Oakwood Nursing Home",
    content: "The automated survey binders save us countless hours. Everything is organized and ready when we need it.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground font-[var(--font-montserrat)] mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4f] bg-clip-text text-transparent">
              Healthcare Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See what nursing home professionals are saying about Qualisynx
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.facility}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
