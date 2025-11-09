"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ConstructionPage() {
  const [warningFlash, setWarningFlash] = useState(false);
  const [constructionText, setConstructionText] =
    useState("UNDER CONSTRUCTION");

  const constructionVariations = [
    "UNDER CONSTRUCTION",
    "W0RK 1N PR0GR3SS",
    "⚠️ DANGER ZONE ⚠️",
    "BUILDING CHAOS...",
    "CONSTRUCTION SITE",
  ];

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setWarningFlash((prev) => !prev);
    }, 800);

    const textInterval = setInterval(() => {
      setConstructionText(
        constructionVariations[
          Math.floor(Math.random() * constructionVariations.length)
        ]
      );
    }, 3000);

    return () => {
      clearInterval(flashInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-br from-orange-600 via-yellow-500 to-orange-400 relative overflow-hidden'>
      {/* Warning stripes background */}
      <div className='absolute inset-0'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.1) 20px,
            rgba(0,0,0,0.1) 40px
          )`,
          }}
        />
      </div>

      {/* Animated construction elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 bg-black border-2 border-yellow-400 animate-bounce ${
            i % 2 === 0 ? "rotate-45" : "-rotate-45"
          }`}
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + Math.sin(i) * 20}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${1.5 + Math.random()}s`,
          }}
        />
      ))}

      <div className='relative z-10 p-8'>
        {/* Header */}
        <header className='mb-16'>
          <div className='inline-block'>
            <div className='bg-yellow-400 text-black px-6 py-3 transform rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
              <span className='font-black text-xl'>YETI CODE CREW</span>
            </div>
          </div>
        </header>

        {/* Warning Banner */}
        <div
          className={`mb-12 ${
            warningFlash ? "bg-red-600" : "bg-yellow-400"
          } transition-colors duration-200`}
        >
          <div className='bg-black text-white text-center py-4 border-8 border-current transform -rotate-1'>
            <h2 className='text-2xl lg:text-4xl font-black animate-pulse'>
              ⚠️ DANGER ZONE - HARD HATS REQUIRED ⚠️
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
          {/* Left Side - Construction GIF */}
          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              <div className='bg-yellow-400 p-6 transform -rotate-2 border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]'>
                <div className='bg-white p-4 border-4 border-black transform rotate-3'>
                  <Image
                    src='/giphy.gif'
                    alt='Construction Animation'
                    width={400}
                    height={400}
                    className='w-full max-w-md border-4 border-orange-500'
                    unoptimized
                  />
                </div>
              </div>

              {/* Construction elements around GIF */}
              <div className='absolute -top-12 -right-12 bg-red-600 text-white px-4 py-2 font-black border-4 border-black transform rotate-12 animate-bounce'>
                🚧 WORK ZONE
              </div>
              <div className='absolute -bottom-8 -left-8 w-16 h-16 bg-orange-500 border-4 border-black transform rotate-45 animate-spin' />
              <div className='absolute top-1/2 -left-16 w-8 h-24 bg-yellow-400 border-4 border-black animate-pulse' />
            </div>
          </div>

          {/* Right Side - Text and Info */}
          <div className='flex-1 space-y-8'>
            <div className='relative'>
              <h1 className='text-6xl lg:text-8xl font-black text-black transform rotate-2 leading-tight'>
                {constructionText}
              </h1>
              <div className='absolute -top-6 -right-6 w-20 h-20 bg-red-600 border-4 border-black transform -rotate-12' />
              <div className='absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 border-4 border-black transform rotate-45' />
            </div>

            <div className='bg-black text-white border-8 border-yellow-400 p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_rgba(255,212,0,1)]'>
              <h2 className='text-4xl font-black mb-4 text-yellow-400'>
                WE'RE BUILDING SOMETHING CRAZY!
              </h2>
              <p className='text-xl font-bold leading-tight mb-6'>
                Our website is under BRUTAL construction! We're hammering out
                something ABSOLUTELY INSANE that will blow your mind! Stay tuned
                for the CHAOS!
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-orange-500 text-black px-4 py-2 font-black border-4 border-white transform rotate-1'>
                  🔨 HAMMERING CODE
                </div>
                <div className='bg-yellow-400 text-black px-4 py-2 font-black border-4 border-white transform -rotate-1'>
                  ⚡ WIRING FEATURES
                </div>
                <div className='bg-red-600 text-white px-4 py-2 font-black border-4 border-white transform rotate-2'>
                  🚧 CONSTRUCTION ZONE
                </div>
                <div className='bg-white text-black px-4 py-2 font-black border-4 border-yellow-400 transform -rotate-2'>
                  💥 EXPLOSIVE LAUNCH
                </div>
              </div>
            </div>

            {/* Construction Progress */}
            <div className='bg-white border-4 border-black p-4 transform rotate-1'>
              <h3 className='font-black text-xl mb-2'>
                CONSTRUCTION PROGRESS:
              </h3>
              <div className='bg-black h-8 border-2 border-gray-400 relative overflow-hidden'>
                <div className='bg-linear-to-r from-yellow-400 to-orange-500 h-full w-3/4 animate-pulse' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='font-black text-white text-sm'>
                    75% COMPLETE - ALMOST THERE!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Section */}
        <div className='mt-16 text-center'>
          <div className='bg-red-600 text-white p-8 transform rotate-1 border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,212,0,1)]'>
            <h3 className='text-3xl font-black mb-4'>
              CONSTRUCTION NEVER STOPS!
            </h3>
            <p className='text-xl font-bold mb-6'>
              We're building something ABSOLUTELY MENTAL! Get ready for the most
              BRUTAL website experience ever created!
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <button className='bg-yellow-400 text-black px-8 py-4 font-black border-4 border-white transform hover:scale-110 transition-transform duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
                NOTIFY ME!
              </button>
              <button className='bg-orange-500 text-white px-8 py-4 font-black border-4 border-white transform hover:scale-110 transition-transform duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
                COMING SOON →
              </button>
            </div>
          </div>
        </div>

        {/* Floating Warning Signs */}
        <div className='fixed top-20 right-8 bg-yellow-400 text-black p-2 border-4 border-black transform rotate-12 animate-bounce'>
          <span className='font-black text-sm'>⚠️ CAUTION</span>
        </div>
        <div className='fixed bottom-20 left-8 bg-red-600 text-white p-2 border-4 border-black transform -rotate-12 animate-pulse'>
          <span className='font-black text-sm'>🚧 WORK ZONE</span>
        </div>
      </div>

      {/* Static noise overlay */}
      <div className='absolute inset-0 opacity-30 bg-[url(&apos;data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E&apos;)] pointer-events-none' />
    </div>
  );
}
