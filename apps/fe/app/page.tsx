"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { memes } from "@/lib/memes";
import { MemeButton } from "@/components/meme-buttons";
import { ZoomButton } from "@/components/zoom-button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for skeleton effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  // Shuffle memes and assign completely random positions/styles/colors
  // Ensure at least 40 memes are visible
  const memeButtons = useMemo(() => {
    const shuffled = [...memes].sort(() => Math.random() - 0.5);
    // Take at least 40, but can show more if available
    const countToShow = Math.max(40, shuffled.length);
    const memesToShow = shuffled.slice(0, countToShow);
    
    return memesToShow.map((meme) => {
      const rand = Math.random();
      return {
        meme,
        // Completely random position across entire page height
        top: Math.random() * 300, // Spread across ~300% of viewport height
        left: Math.random() * 95, // Random horizontal, leave some margin
        // Random button style (0-7)
        style: Math.floor(Math.random() * 8),
        // More varied size distribution
        size: rand > 0.85 ? "xl" : rand > 0.65 ? "lg" : rand > 0.4 ? "md" : rand > 0.2 ? "sm" : "xs",
        // Random rotation (more varied)
        rotation: (Math.random() - 0.5) * 20,
        // Random z-index for layering (some can overlap panel which is z-50)
        zIndex: Math.floor(Math.random() * 60) + 1, // 1-60, so some buttons (40+) can overlap panel
        // Always assign a color variant (0-5) - ensure no white buttons
        colorVariant: Math.floor(Math.random() * 6),
      };
    });
  }, []);
  
  const getSizeClass = (size: string) => {
    if (size === "xl") return "text-xl px-10 py-5 font-bold";
    if (size === "lg") return "text-lg px-7 py-3.5 font-semibold";
    if (size === "md") return "text-base px-5 py-2.5 font-medium";
    if (size === "sm") return "text-sm px-3.5 py-2";
    return "text-xs px-2.5 py-1.5";
  };

  useEffect(() => {
    // Reverse scroll direction - scroll up to see more
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = -e.deltaY * 0.7;
      window.scrollBy(0, scrollAmount);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div 
          className="w-full p-2"
          style={{
            borderRadius: 0,
            background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          }}
        >
          <div className="bg-background/90 backdrop-blur-md px-6 py-6" style={{ borderRadius: 0 }}>
            <div className="flex justify-between items-center">
              <div className="flex-1"></div>
              <h2 className="text-3xl font-bold text-center font-mono">яαη∂σм ¢σιη</h2>
              <div className="flex-1 flex justify-end">
                <a 
                  href="https://x.com/randomnioc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-5xl hover:scale-110 transition-transform duration-200 leading-none"
                  aria-label="Follow on X"
                  style={{ fontFeatureSettings: '"liga" off' }}
                >
                  <span className="inline-block">😠</span><span className="inline-block">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* All buttons randomly scattered across entire page */}
      <div className="absolute inset-0 w-full" style={{ height: '300vh' }}>
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 40 }).map((_, idx) => {
            const randomTop = Math.random() * 300;
            const randomLeft = Math.random() * 95;
            const randomSize = Math.floor(Math.random() * 4);
            const sizes = ['w-16 h-8', 'w-24 h-10', 'w-32 h-12', 'w-20 h-9'];
            return (
              <Skeleton
                key={`skeleton-${idx}`}
                className={cn("absolute", sizes[randomSize])}
                style={{
                  top: `${randomTop}vh`,
                  left: `${randomLeft}%`,
                  transform: `rotate(${(Math.random() - 0.5) * 20}deg)`,
                  zIndex: Math.floor(Math.random() * 20) + 1,
                }}
              />
            );
          })
        ) : (
          memeButtons.map((btn, idx) => {
          // Randomly decide if this should be a zoom button (20% chance)
          const isZoomButton = Math.random() > 0.8;
          
          if (isZoomButton) {
            // Create a zoom button linking to a random meme
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            const zoomSize = btn.size as "xs" | "sm" | "md" | "lg" | "xl";
            return (
              <ZoomButton
                key={`zoom-${btn.meme.id}-${idx}`}
                href={randomMeme.url}
                colorVariant={btn.colorVariant}
                size={zoomSize}
                className={cn(
                  "absolute",
                  "transition-all hover:scale-125 hover:z-50 cursor-pointer"
                )}
                inlineStyle={{
                  top: `${btn.top}vh`,
                  left: `${btn.left}%`,
                  transform: `rotate(${btn.rotation}deg)`,
                  zIndex: btn.zIndex,
                }}
              />
            );
          }
          
          // Regular meme button
          // Randomly decide if button shows name or symbol
          const showSymbol = Math.random() > 0.6;
          const symbolTypes = ['arrow', 'search', 'w', 'f'];
          const symbolType = symbolTypes[Math.floor(Math.random() * symbolTypes.length)];
          
          // Random emojis to add to memes
          const emojis = ['🚀', '💎', '🔥', '⚡', '🎯', '💸', '🎲', '🎪', '🌈', '⭐', '✨', '🎨', '🎭', '🎪', '🎬', '🎮', '🎯', '💫', '🌟', '🎊', '🎉', '🎈', '🎁', '💰', '💵', '💴', '💶', '💷', '🪙', '💳', '💎', '🔮', '🎰', '🎲', '🃏', '🎴', '🀄', '🎯', '🎪'];
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          const addEmoji = Math.random() > 0.5; // 50% chance to add emoji
          
          let displayText = btn.meme.name;
          if (showSymbol) {
            switch(symbolType) {
              case 'arrow':
                displayText = '→';
                break;
              case 'search':
                displayText = '🔍';
                break;
              case 'w':
                displayText = 'W';
                break;
              case 'f':
                displayText = 'F';
                break;
            }
          }
          
          // Add emoji to display text (either before or after)
          if (addEmoji && !showSymbol) {
            displayText = Math.random() > 0.5 
              ? `${randomEmoji} ${displayText}` 
              : `${displayText} ${randomEmoji}`;
          } else if (addEmoji && showSymbol) {
            // For symbols, add emoji after
            displayText = `${displayText} ${randomEmoji}`;
          }
          
          return (
            <MemeButton
              key={btn.meme.id}
              meme={btn.meme}
              style={btn.style}
              colorVariant={btn.colorVariant}
              displayText={displayText}
              className={cn(
                "absolute",
                getSizeClass(btn.size),
                "transition-all hover:scale-125 hover:z-50 cursor-pointer"
              )}
              inlineStyle={{
                top: `${btn.top}vh`,
                left: `${btn.left}%`,
                transform: `rotate(${btn.rotation}deg)`,
                zIndex: btn.zIndex, // Buttons can overlap panel if z-index allows
              }}
            />
          );
          })
        )}
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-background/95 via-muted/10 to-background/95">
        <div 
          className="max-w-4xl space-y-8 relative z-50 p-1 shadow-2xl"
          style={{
            borderRadius: 0,
            background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          }}
        >
          <div className="bg-background/90 backdrop-blur-md p-8" style={{ borderRadius: 0 }}>
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-16 w-64 mx-auto" />
              <Skeleton className="h-8 w-96 mx-auto" />
              <div className="space-y-3 mt-8">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
                <Skeleton className="h-4 w-4/6 mx-auto" />
              </div>
            </div>
          ) : (
            <>
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              яαη∂σм ¢σιη
            </h1>
            <p className="text-2xl text-muted-foreground md:text-3xl font-semibold mt-6">
              𝒢ℯ𝓉𝓉𝒾𝓃𝑔 𝓇𝒾𝒸𝒽 ℴ𝒻𝒻 ℛ𝒶𝓃𝒹ℴ𝓂𝓃ℯ𝓈𝓈
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-foreground max-w-4xl mx-auto font-mono leading-relaxed" style={{ wordSpacing: '0.1em', letterSpacing: '0.02em' }}>
              <span className="inline-block">T̨͈͗̌ͥḣ̖̻͛̓ỉ͔͖̜͌s̠҉͍͊ͅ</span> <span className="inline-block">ỉ͔͖̜͌s̠҉͍͊ͅ</span> <span className="inline-block">ẹ̿͋̒̕x̛̘̠̹͋ā̤̓̍͘c͕͗ͤ̕̕t̲̂̓ͩ̑l̙͖̑̾ͣy҉̃̀̋̑</span> <span className="inline-block">ḣ̖̻͛̓o̯̱̊͊͢w̦̺̐̐͟</span> <span className="inline-block">t̲̂̓ͩ̑ḣ̖̻͛̓ẹ̿͋̒̕</span> <span className="inline-block">s̠҉͍͊ͅp̞̈͑̚͞ā̤̓̍͘c͕͗ͤ̕̕ẹ̿͋̒̕</span> <span className="inline-block">w̦̺̐̐͟o̯̱̊͊͢r̴̨̦͕̝ḳ̯͍̑ͦs̠҉͍͊ͅ.</span><br />
              <span className="inline-block">R͉̜̎͡͠ā̤̓̍͘ṇ̤͛̒̍ḑ̴̞͛̒o̯̱̊͊͢ḿ̬̏ͤͅ</span> <span className="inline-block">b̬͖̏́͢ư̡͕̭̇t̲̂̓ͩ̑t̲̂̓ͩ̑o̯̱̊͊͢ṇ̤͛̒̍s̠҉͍͊ͅ.</span> <span className="inline-block">R͉̜̎͡͠ā̤̓̍͘ṇ̤͛̒̍ḑ̴̞͛̒o̯̱̊͊͢ḿ̬̏ͤͅ</span> <span className="inline-block">ḿ̬̏ͤͅẹ̿͋̒̕ḿ̬̏ͤͅẹ̿͋̒̕s̠҉͍͊ͅ.</span><br />
              <span className="inline-block">R͉̜̎͡͠ā̤̓̍͘ṇ̤͛̒̍ḑ̴̞͛̒o̯̱̊͊͢ḿ̬̏ͤͅ</span> <span className="inline-block">p̞̈͑̚͞r̴̨̦͕̝o̯̱̊͊͢f̵͖̜̉ͅỉ͔͖̜͌t̲̂̓ͩ̑s̠҉͍͊ͅ.</span> <span className="inline-block">W̯ͤ̾ͣ͝ẹ̿͋̒̕l̙͖̑̾ͣc͕͗ͤ̕̕o̯̱̊͊͢ḿ̬̏ͤͅẹ̿͋̒̕</span> <span className="inline-block">t̲̂̓ͩ̑o̯̱̊͊͢</span> <span className="inline-block">t̲̂̓ͩ̑ḣ̖̻͛̓ẹ̿͋̒̕</span> <span className="inline-block">c͕͗ͤ̕̕ḣ̖̻͛̓ā̤̓̍͘o̯̱̊͊͢s̠҉͍͊ͅ.</span>
            </p>
            <p className="text-base text-muted-foreground italic">
              Scroll up ↑ to discover memes scattered randomly across the page
            </p>
          </div>
          </>
          )}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative min-h-[50vh] flex items-center justify-center px-4 py-10">
        <div 
          className="max-w-2xl mx-auto text-center relative z-50 p-1 shadow-2xl"
          style={{
            borderRadius: 0,
            background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          }}
        >
          <div className="bg-background/80 backdrop-blur-md p-8" style={{ borderRadius: 0 }}>
            <p className="text-sm text-muted-foreground font-mono">
              address contract:
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
