"use client";

import * as React from "react";
import { Card as BaseCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  glass: "border-white/20 bg-white/8 backdrop-blur-xl",
  frosted: "border-white/25 bg-white/12 backdrop-blur-2xl",
  fluted: "border-white/20 bg-white/8 backdrop-blur-xl [background-image:repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(255,255,255,.04)_7px)]",
  crystal: "border-cyan-200/30 bg-cyan-100/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.25)]",
};

export function Card({ className, variant = "glass", gradient = false, animated = false, hover = "none", glass, style, children, ...props }: CardProps) {
  return <BaseCard {...props} style={{ ...getGlassStyles(glass), ...style }} className={cn("relative overflow-hidden border text-card-foreground", variantClasses[variant], gradient && "bg-gradient-to-br from-violet-400/15 via-cyan-300/10 to-emerald-300/10", animated && "transition-transform duration-300 hover:scale-[1.01]", hoverEffects({ hover }), className)}>{children}</BaseCard>;
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
