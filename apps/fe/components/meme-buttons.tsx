"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Meme } from "@/lib/memes";

interface MemeButtonProps {
  meme: Meme;
  style: number; // 0-7 for different button styles
  className?: string;
  inlineStyle?: React.CSSProperties;
  colorVariant?: number; // 0-5 for color variations
  displayText?: string; // Optional custom display text (defaults to meme.name)
}

export function MemeButton({ meme, style, className, inlineStyle, colorVariant = 0, displayText }: MemeButtonProps) {
  const buttonText = displayText || meme.name;
  const baseProps = {
    href: meme.url,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      window.open(meme.url, "_blank");
    },
    style: inlineStyle,
  };

  // Color variations for different styles
  const colorPalettes = {
    blue: { bg: "bg-blue-500", hover: "hover:bg-blue-600", text: "text-white", border: "border-blue-600" },
    purple: { bg: "bg-purple-500", hover: "hover:bg-purple-600", text: "text-white", border: "border-purple-600" },
    pink: { bg: "bg-pink-500", hover: "hover:bg-pink-600", text: "text-white", border: "border-pink-600" },
    green: { bg: "bg-green-500", hover: "hover:bg-green-600", text: "text-white", border: "border-green-600" },
    orange: { bg: "bg-orange-500", hover: "hover:bg-orange-600", text: "text-white", border: "border-orange-600" },
    yellow: { bg: "bg-yellow-500", hover: "hover:bg-yellow-600", text: "text-black", border: "border-yellow-600" },
  };
  
  const colors = [colorPalettes.blue, colorPalettes.purple, colorPalettes.pink, colorPalettes.green, colorPalettes.orange, colorPalettes.yellow];
  const selectedColor = colors[colorVariant % colors.length] || colors[0];

  // Style 0: Default shadcn button - always colored (never white)
  if (style === 0) {
    return (
      <Button
        variant="default"
        size="sm"
        className={cn(
          `${selectedColor.bg} ${selectedColor.hover} ${selectedColor.text} border-2 ${selectedColor.border}`,
          className
        )}
        asChild
        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
    );
  }

  // Style 1: Outline button - with color variation
  if (style === 1) {
    const outlineColors = [
      "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white",
      "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white",
      "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white",
      "border-green-500 text-green-600 hover:bg-green-500 hover:text-white",
      "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    ];
    const outlineClass = outlineColors[colorVariant % outlineColors.length] || outlineColors[0];
    return (
      <Button variant="outline" size="sm" className={cn(outlineClass, className)} asChild        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
    );
  }

  // Style 2: Secondary button - always colored (never white)
  if (style === 2) {
    return (
      <Button
        variant="secondary"
        size="sm"
        className={cn(
          `${selectedColor.bg}/30 ${selectedColor.hover}/40 ${selectedColor.text} border-2 ${selectedColor.border}/40`,
          "bg-opacity-30",
          className
        )}
        asChild
        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
    );
  }

  // Style 3: Ghost button - always colored background (never white)
  if (style === 3) {
    const ghostStyles = [
      { bg: "bg-primary/20", text: "text-primary-foreground", hover: "hover:bg-primary/30" },
      { bg: "bg-blue-500/20", text: "text-blue-700 dark:text-blue-300", hover: "hover:bg-blue-500/30" },
      { bg: "bg-purple-500/20", text: "text-purple-700 dark:text-purple-300", hover: "hover:bg-purple-500/30" },
      { bg: "bg-pink-500/20", text: "text-pink-700 dark:text-pink-300", hover: "hover:bg-pink-500/30" },
      { bg: "bg-green-500/20", text: "text-green-700 dark:text-green-300", hover: "hover:bg-green-500/30" },
      { bg: "bg-orange-500/20", text: "text-orange-700 dark:text-orange-300", hover: "hover:bg-orange-500/30" },
    ];
    const ghostStyle = ghostStyles[colorVariant % ghostStyles.length] || ghostStyles[0];
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn(`${ghostStyle.bg} ${ghostStyle.text} ${ghostStyle.hover}`, className)}
        asChild
        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
    );
  }

  // Style 4: Gradient button (Aceternity style) - with color variation
  if (style === 4) {
    const gradients = [
      "from-primary via-primary/80 to-primary hover:from-primary/90 hover:via-primary/70 hover:to-primary/90",
      "from-blue-500 via-blue-600 to-blue-500 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600",
      "from-purple-500 via-purple-600 to-purple-500 hover:from-purple-600 hover:via-purple-700 hover:to-purple-600",
      "from-pink-500 via-pink-600 to-pink-500 hover:from-pink-600 hover:via-pink-700 hover:to-pink-600",
      "from-green-500 via-green-600 to-green-500 hover:from-green-600 hover:via-green-700 hover:to-green-600",
      "from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600",
    ];
    const gradientClass = gradients[colorVariant % gradients.length] || gradients[0];
    return (
      <Button
        variant="default"
        size="sm"
        className={cn(
          `bg-gradient-to-r ${gradientClass} text-white transition-all duration-300 shadow-lg hover:shadow-xl`,
          className
        )}
        asChild
        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
    );
  }

  // Style 5: Animated border button (Animate UI style) - always colored (never white)
  if (style === 5) {
    const borderColors = [
      { border: "border-primary/60", hover: "hover:border-primary", bg: "bg-primary/20", text: "text-primary-foreground" },
      { border: "border-blue-500/60", hover: "hover:border-blue-500", bg: "bg-blue-500/20", text: "text-blue-900 dark:text-blue-100" },
      { border: "border-purple-500/60", hover: "hover:border-purple-500", bg: "bg-purple-500/20", text: "text-purple-900 dark:text-purple-100" },
      { border: "border-pink-500/60", hover: "hover:border-pink-500", bg: "bg-pink-500/20", text: "text-pink-900 dark:text-pink-100" },
      { border: "border-green-500/60", hover: "hover:border-green-500", bg: "bg-green-500/20", text: "text-green-900 dark:text-green-100" },
      { border: "border-orange-500/60", hover: "hover:border-orange-500", bg: "bg-orange-500/20", text: "text-orange-900 dark:text-orange-100" },
    ];
    const borderStyle = borderColors[colorVariant % borderColors.length] || borderColors[0];
    return (
      <a
        {...baseProps}
        className={cn(
          "relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium",
          `border-2 ${borderStyle.border} ${borderStyle.hover} ${borderStyle.bg} ${borderStyle.text}`,
          "hover:shadow-lg transition-all duration-300",
          "before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          className
        )}
      >
        <span className="relative z-10">{buttonText}</span>
      </a>
    );
  }

  // Style 6: Retro 8-bit style button (8bitcn style) - with color variation
  if (style === 6) {
    const retroStyles = [
      { bg: "bg-primary", text: "text-primary-foreground", shadow: "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]" },
      { bg: "bg-blue-600", text: "text-white", shadow: "shadow-[4px_4px_0px_0px_rgba(30,64,175,0.5)]" },
      { bg: "bg-purple-600", text: "text-white", shadow: "shadow-[4px_4px_0px_0px_rgba(126,34,206,0.5)]" },
      { bg: "bg-pink-600", text: "text-white", shadow: "shadow-[4px_4px_0px_0px_rgba(219,39,119,0.5)]" },
      { bg: "bg-green-600", text: "text-white", shadow: "shadow-[4px_4px_0px_0px_rgba(22,163,74,0.5)]" },
      { bg: "bg-orange-600", text: "text-white", shadow: "shadow-[4px_4px_0px_0px_rgba(234,88,12,0.5)]" },
    ];
    const retro = retroStyles[colorVariant % retroStyles.length] || retroStyles[0];
    return (
      <a
        {...baseProps}
        className={cn(
          "inline-flex items-center justify-center px-4 py-2 text-sm font-bold",
          `${retro.bg} ${retro.text}`,
          "border-4 border-b-4 border-r-4",
          "hover:translate-x-[2px] hover:translate-y-[2px] transition-all",
          "active:translate-x-0 active:translate-y-0",
          "font-mono uppercase tracking-wider",
          retro.shadow,
          className
        )}
        style={{
          ...inlineStyle,
          borderBottomColor: "rgba(0,0,0,0.3)",
          borderRightColor: "rgba(0,0,0,0.3)",
        } as React.CSSProperties}
      >
        {buttonText}
      </a>
    );
  }

  // Style 7: Glass morphism button (8StarLabs style) - always colored (never white)
  if (style === 7) {
    const glassStyles = [
      { bg: "bg-primary/30", border: "border-primary/40", hover: "hover:border-primary/60", text: "text-primary-foreground" },
      { bg: "bg-blue-500/30", border: "border-blue-500/40", hover: "hover:border-blue-500/60", text: "text-blue-900 dark:text-blue-100" },
      { bg: "bg-purple-500/30", border: "border-purple-500/40", hover: "hover:border-purple-500/60", text: "text-purple-900 dark:text-purple-100" },
      { bg: "bg-pink-500/30", border: "border-pink-500/40", hover: "hover:border-pink-500/60", text: "text-pink-900 dark:text-pink-100" },
      { bg: "bg-green-500/30", border: "border-green-500/40", hover: "hover:border-green-500/60", text: "text-green-900 dark:text-green-100" },
      { bg: "bg-orange-500/30", border: "border-orange-500/40", hover: "hover:border-orange-500/60", text: "text-orange-900 dark:text-orange-100" },
    ];
    const glassStyle = glassStyles[colorVariant % glassStyles.length] || glassStyles[0];
    return (
      <a
        {...baseProps}
        className={cn(
          "inline-flex items-center justify-center px-4 py-2 text-sm font-medium",
          `backdrop-blur-md border ${glassStyle.bg} ${glassStyle.border} ${glassStyle.hover} ${glassStyle.text}`,
          "hover:shadow-lg transition-all duration-300",
          className
        )}
      >
        {buttonText}
      </a>
    );
  }

  // Fallback
  return (
    <Button variant="default" size="sm" className={className} asChild        >
          <a {...baseProps}>{buttonText}</a>
        </Button>
  );
}
