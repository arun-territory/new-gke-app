// src/components/ui/Card.tsx
import * as React from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: React.ElementType;  // Changed from LucideIcon
  title: string;
  description: string;
}

interface CardProps {
  feature?: Feature;
  icon?: React.ElementType;  // Changed to match Feature icon type
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const MotionCard = motion.div;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, icon: Icon, title, description, feature, ...props }, ref) => {
    const DisplayIcon = feature?.icon || Icon;

    return (
      <MotionCard
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        {DisplayIcon && (
          <div className="p-6">
            <DisplayIcon className="w-6 h-6" />
          </div>
        )}
        {(feature?.title || title) && (
          <h3 className="text-lg font-semibold px-6">
            {feature?.title || title}
          </h3>
        )}
        {(feature?.description || description) && (
          <p className="text-sm text-muted-foreground px-6 pb-6">
            {feature?.description || description}
          </p>
        )}
        {children}
      </MotionCard>
    )
  }
)
Card.displayName = "Card"

// Rest of the components remain the same...

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  type Feature,
  type CardProps
}