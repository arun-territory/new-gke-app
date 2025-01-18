// src/components/ui/Card.tsx
import * as React from "react"
import { cn } from "../lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  feature?: Feature
  icon?: LucideIcon
  title?: string
  description?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, icon: Icon, title, description, feature, ...props }, ref) => {
    const displayIcon = feature?.icon || Icon
    const displayTitle = feature?.title || title
    const displayDescription = feature?.description || description

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {displayIcon && (
            <div className="p-6">
              {React.isValidElement(displayIcon) 
                ? displayIcon 
                : displayIcon && React.createElement(displayIcon as LucideIcon, {
                    className: "w-6 h-6"
                  })
              }
            </div>
          )}
          {displayTitle && (
            <h3 className="text-lg font-semibold px-6">{displayTitle}</h3>
          )}
          {displayDescription && (
            <p className="text-sm text-muted-foreground px-6 pb-6">{displayDescription}</p>
          )}
          {children}
        </motion.div>
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
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