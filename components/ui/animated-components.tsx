"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Fade up animation
export const FadeUp = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation
export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation wrapper
export const StaggerContainer = ({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use with StaggerContainer
export const StaggerItem = ({
  children,
  className,
  yOffset = 20,
  ...props
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale on hover animation
export const ScaleOnHover = ({
  children,
  className,
  scale = 1.03,
  ...props
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Pulse animation
export const PulseAnimation = ({
  children,
  className,
  duration = 2,
  ...props
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  [key: string]: any;
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
