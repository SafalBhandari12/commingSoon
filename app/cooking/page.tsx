"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookingPage() {
  const [glitchText, setGlitchText] = useState("COOKING");
  const [isAnimating, setIsAnimating] = useState(false);

  const glitchVariations = ["C00K1NG", "C∅∅K1NG", "ÇØØK!NG", "COOKING"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setGlitchText(
          glitchVariations[Math.floor(Math.random() * glitchVariations.length)]
        );
        setIsAnimating(false);
      }, 100);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-br from-yellow-400 via-orange-500 to-red-600 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='grid grid-cols-12 h-full'>
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className='border border-black/20 animate-pulse'
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className='absolute w-4 h-4 bg-black rotate-45 animate-bounce'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className='relative z-10 p-8'>
        {/* Header */}
        <header className='mb-16'>
          <div className='inline-block'>
            <div className='bg-black text-white px-6 py-3 transform -rotate-2 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
              <span className='font-black text-xl'>YETI CODE CREW</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
          {/* Left Side - GIF and Text */}
          <div className='flex-1 space-y-8'>
            <div className='relative'>
              <h1
                className={`text-8xl lg:text-9xl font-black text-black transform -rotate-3 transition-all duration-300 ${
                  isAnimating ? "animate-pulse scale-110" : ""
                }`}
              >
                {glitchText}
              </h1>
              <div className='absolute -top-4 -right-4 w-16 h-16 bg-white border-4 border-black transform rotate-45' />
              <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 border-4 border-black transform -rotate-12' />
            </div>

            <div className='bg-white border-8 border-black p-8 transform rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'>
              <h2 className='text-4xl font-black mb-4 text-black'>
                WE'RE COOKING SOMETHING CRAZY!
              </h2>
              <p className='text-xl font-bold text-black leading-tight mb-6'>
                Our kitchen is ON FIRE! We're cooking up the most INSANE website
                experience you've ever tasted! The ingredients are WILD and the
                recipe is BRUTAL!
              </p>
              <div className='flex flex-wrap gap-4'>
                <div className='bg-yellow-400 text-black px-4 py-2 font-black border-4 border-black transform -rotate-1'>
                  🔥 HOT FEATURES
                </div>
                <div className='bg-red-500 text-white px-4 py-2 font-black border-4 border-black transform rotate-2'>
                  ⚡ SPICY DESIGN
                </div>
                <div className='bg-green-500 text-black px-4 py-2 font-black border-4 border-black transform -rotate-2'>
                  💥 EXPLOSIVE UX
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cooking GIF */}
          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              <div className='bg-black p-4 transform rotate-3 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
                <div className='bg-white p-4 border-8 border-black transform -rotate-6'>
                  <Image
                    src='/cooking.gif'
                    alt='Cooking Animation'
                    width={400}
                    height={400}
                    className='w-full max-w-md border-4 border-black'
                    unoptimized
                  />
                </div>
              </div>
              {/* Decorative elements around GIF */}
              <div className='absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 border-4 border-black transform rotate-45 animate-spin' />
              <div className='absolute -bottom-8 -right-8 w-12 h-12 bg-red-500 border-4 border-black transform -rotate-45 animate-bounce' />
              <div className='absolute top-1/2 -right-12 w-8 h-8 bg-orange-500 border-4 border-black animate-pulse' />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-16 text-center'>
          <div className='bg-black text-white p-8 transform -rotate-1 border-8 border-white shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
            <h3 className='text-3xl font-black mb-4'>
              THE RECIPE IS ALMOST READY!
            </h3>
            <p className='text-lg font-bold mb-6'>
              We're cooking up something ABSOLUTELY INSANE! The kitchen is on
              fire and the flavors are BRUTAL! Get ready to taste the CHAOS!
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <button className='bg-yellow-400 text-black px-8 py-4 font-black border-4 border-white transform hover:scale-110 transition-transform duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
                TASTE TEST SOON!
              </button>
              <button className='bg-orange-500 text-white px-8 py-4 font-black border-4 border-white transform hover:scale-110 transition-transform duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
                SECRET RECIPE →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Noise overlay for brutalism effect */}
      <div className='absolute inset-0 opacity-20 bg-[url(&apos;data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E&apos;)] pointer-events-none' />
    </div>
  );
}
