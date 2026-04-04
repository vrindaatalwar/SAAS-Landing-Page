"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion"
import Balancer from "react-wrap-balancer"
import { cn } from "../../lib/utils"

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface Step {
  id: string
  name: string
  title: string
  description: string
  content: React.ReactNode
}

interface FeatureCarouselProps {
  steps: readonly Step[]
  title?: string
  description?: string
  bgClass?: string
}

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
} as const

function useNumberCycler(
  totalSteps: number,
  interval: number = 3000
) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>(null)

  const setupTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
      setupTimer()
    }, interval)
  }, [interval, totalSteps])

  const increment = useCallback(() => {
    setCurrentNumber((prev) => (prev + 1) % totalSteps)
    setupTimer()
  }, [totalSteps, setupTimer])

  const setStepIdx = useCallback((idx: number) => {
    setCurrentNumber(idx)
    setupTimer()
  }, [setupTimer])

  useEffect(() => {
    setupTimer()
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [setupTimer])

  return {
    currentNumber,
    increment,
    setStepIdx
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    setIsMobile(isSmall)
  }, [])
  return isMobile
}

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
}

function FeatureCard({
  bgClass,
  children,
  currentStep,
  steps
}: {
  bgClass?: string
  children?: React.ReactNode
  currentStep: number
  steps: readonly Step[]
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
        <div
          className={cn(
            "group relative w-full overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 p-8 md:p-16 transition duration-300",
            bgClass
          )}
        >
        <div className="flex flex-col md:flex-row gap-12 min-h-[480px]">
          <div className="flex flex-col justify-center flex-1 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                <div className="text-sky-600 font-mono text-sm tracking-widest uppercase">
                  Pillar 0{currentStep + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  <Balancer>{steps[currentStep].title}</Balancer>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                  <Balancer>{steps[currentStep].description}</Balancer>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 relative flex items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                {...ANIMATION_PRESETS.fadeInScale}
                className="w-full h-full flex items-center justify-center p-4"
              >
                <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                  {steps[currentStep].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StepsNav({
  steps: stepData,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="flex justify-center mt-6 px-4">
      <ol
        className="flex w-full flex-wrap items-center justify-center gap-3"
        role="list"
      >
        {stepData.map((step, stepIdx) => {
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          const isFuture = !isCompleted && !isCurrent

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative z-50 rounded-full px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer",
                isCurrent ? "bg-sky-500/10 border border-sky-500/20" : "bg-black/5 border border-black/5 hover:bg-black/10"
              )}
              onClick={() => onChange(stepIdx)}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold duration-300",
                    isCurrent ? "bg-sky-500 text-white" : "bg-black/10 text-slate-600"
                  )}
                >
                  {isCompleted ? (
                    <IconCheck className="h-3 w-3" />
                  ) : (
                    <span>{stepIdx + 1}</span>
                  )}
                </span>
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest duration-300",
                    isCurrent ? "text-sky-600" : "text-slate-600"
                  )}
                >
                  {step.name}
                </span>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

export const FeatureCarousel = ({
  steps,
  bgClass
}: FeatureCarouselProps) => {
  const { currentNumber: currentIdx, increment, setStepIdx } = useNumberCycler(steps.length)

  return (
    <div className="w-full mx-auto">
      <FeatureCard steps={steps} currentStep={currentIdx} bgClass={bgClass}>
        {/* The content is rendered inside FeatureCard now for better layout control */}
      </FeatureCard>
      
      <div className="relative mt-4">
        <StepsNav current={currentIdx} onChange={setStepIdx} steps={steps} />
        
        {/* Interaction layer to manually advance */}
        <div
          className="absolute inset-0 z-0 cursor-pointer hidden md:block"
          onClick={increment}
          title="Click to advance"
        />
      </div>
    </div>
  )
}

FeatureCarousel.displayName = "FeatureCarousel"
