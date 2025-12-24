"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ZoomIn } from "lucide-react";

interface ZoomButtonProps {
  href: string;
  className?: string;
  inlineStyle?: React.CSSProperties;
  colorVariant?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function ZoomButton({ href, className, inlineStyle, colorVariant = 0, size = "md" }: ZoomButtonProps) {
  const baseProps = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      window.open(href, "_blank");
    },
    style: inlineStyle,
  };

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

  const sizeClasses = {
    xs: "h-6 w-6 p-1",
    sm: "h-8 w-8 p-1.5",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5",
    xl: "h-14 w-14 p-3",
  };

  const iconSizes = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  };

  return (
    <Button
      variant="default"
      className={cn(
        `${selectedColor.bg} ${selectedColor.hover} ${selectedColor.text} border-2 ${selectedColor.border}`,
        sizeClasses[size],
        "rounded-none",
        className
      )}
      asChild
    >
      <a {...baseProps}>
        <ZoomIn className={iconSizes[size]} />
      </a>
    </Button>
  );
}

