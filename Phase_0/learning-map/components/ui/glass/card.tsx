"use client";

import * as React from "react";
import {
  Card as BaseCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getGlassStyles, type GlassCustomization } from "@/lib/glass-utils";
import { hoverEffects, type HoverEffect } from "@/lib/hover-effects";

type GlassVariant = "glass" | "frosted" | "fluted" | "crystal";
export interface CardProps extends React.ComponentProps<typeof BaseCard> {
  gradient?: boolean;
  animated?: boolean;
  hover?: HoverEffect;
  glass?: GlassCustomization;
  variant?: GlassVariant;
}

const variantClasses: Record<GlassVariant, string> = {
  glass: "glass-bg",
  frosted: "glass-frosted",
  fluted: "glass-fluted",
  crystal: "glass-crystal",
};

export function Card({
  className,
  variant = "glass",
  gradient = false,
  animated = false,
  hover = "none",
  glass,
  style,
  children,
  ...props
}: CardProps) {
  return (
    <BaseCard
      {...props}
      style={{ ...getGlassStyles(glass), ...style }}
      className={cn(
        "relative overflow-hidden border text-card-foreground",
        variantClasses[variant],
        gradient &&
          "bg-gradient-to-br from-violet-400/15 via-cyan-300/10 to-emerald-300/10",
        animated && "transition-transform duration-300 hover:scale-[1.01]",
        hoverEffects({ hover }),
        className,
      )}
    >
      {children}
    </BaseCard>
  );
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
