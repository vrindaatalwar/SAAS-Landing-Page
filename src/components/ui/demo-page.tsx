"use client"
import React, { useState } from "react";
import { IsometricDashboard } from "@/components/ui/isometric-dashboard";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field-1"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import logo from '@/assets/chainforcastlogo.png'

export function DemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-white selection:bg-sky-500 selection:text-white">
      <div className="flex flex-col gap-4 p-6 md:p-10 relative z-10 w-full">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" aria-label="home" className="flex gap-2 items-center group">
             <div className="w-10 h-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <img 
                 src={logo} 
                 alt="Interfere Logo" 
                 className="w-full h-full object-contain scale-[3] mix-blend-multiply" 
               />
             </div>
             <span className="font-bold tracking-tight text-xl">Interfere</span>
          </a>
        </div>
        <div className="flex flex-1 w-full items-center justify-center">
          <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="flex flex-col items-center gap-1 text-center mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Request a demo</h1>
                        <p className="text-muted-foreground text-sm text-balance">
                          Get a specialized walkthrough of our platform
                        </p>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="name">Full Name</FieldLabel>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          required 
                          className="h-11 rounded-xl"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Work Email</FieldLabel>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="name@company.com" 
                          required 
                          className="h-11 rounded-xl"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your needs..." 
                          className="min-h-[120px] rounded-xl resize-none py-3"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </Field>
                      <Field className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-sky-500 text-white hover:bg-sky-600 h-12 rounded-xl font-bold shadow-xl shadow-sky-100/50 transition-all active:scale-[0.98]"
                        >
                          Request Demo
                        </Button>
                      </Field>
                    </FieldGroup>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-10"
                >
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Request Sent</h2>
                    <p className="text-slate-500 text-sm max-w-[280px] mx-auto leading-relaxed">
                      Thanks for reaching out! Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = "/"}
                    className="mt-4 rounded-xl px-8 h-12 border-slate-200 hover:bg-slate-50 font-bold"
                  >
                    Back to Home
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Right Side - Interactive Isometric Dashboard */}
      <div className="bg-slate-50/50 relative hidden lg:flex flex-col items-center justify-center overflow-hidden border-l border-slate-100">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-50/50 via-slate-50 to-slate-50 z-0" />
         <IsometricDashboard />
      </div>
    </div>
  );
}
