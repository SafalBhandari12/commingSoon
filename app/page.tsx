"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Zap,
  Rocket,
  Code2,
  Sparkles,
  Coffee,
  ArrowRight,
  Star,
  Globe,
  Heart,
  Flame,
  MapPin,
  Eye,
  Bell,
} from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brutal entrance animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -100,
          rotation: -5,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.5,
          ease: "bounce.out",
        }
      );

      // Staggered card animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -200 : 200,
              rotation: index % 2 === 0 ? -10 : 10,
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              duration: 1,
              delay: 0.3 * index,
              ease: "power3.out",
            }
          );
        }
      });

      // Floating elements
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: -20,
            rotation: 360,
            duration: 2 + index * 0.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-lime-400 relative overflow-hidden'
    >
      {/* Floating geometric shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) floatingElementsRef.current[i] = el;
            }}
            className={`absolute w-8 h-8 ${
              i % 4 === 0
                ? "bg-black"
                : i % 4 === 1
                ? "bg-red-500"
                : i % 4 === 2
                ? "bg-blue-500"
                : "bg-purple-500"
            } ${i % 2 === 0 ? "rounded-full" : "transform rotate-45"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8'>
        {/* Brutal Header */}
        <div ref={titleRef} className='text-center mb-12'>
          <div className='bg-black brutal-shadow-large brutal-border p-8 mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300'>
            <h1 className='text-6xl md:text-9xl font-black text-lime-400 brutal-text mb-4 glitch'>
              NEPAL
            </h1>
            <div className='bg-red-500 brutal-border p-4 transform rotate-1'>
              <h2 className='text-2xl md:text-4xl font-black text-white brutal-text'>
                COMING SOON!
              </h2>
            </div>
          </div>

          <div className='bg-purple-500 brutal-shadow brutal-border p-6 transform rotate-1 hover:-rotate-1 transition-transform duration-300'>
            <p className='text-xl md:text-2xl font-bold text-white'>
              THE ULTIMATE TOURISM PLATFORM IS BEING COOKED!
            </p>
          </div>
        </div>

        {/* Brutal Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12'>
          {/* Card 1 */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className='bg-red-500 brutal-shadow brutal-border p-6 transform hover:scale-105 transition-all duration-300 hover:rotate-2'
          >
            <div className='bg-white brutal-border p-3 w-fit mb-4'>
              <Rocket className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-2xl font-black text-white mb-3 brutal-text'>
              EPIC ADVENTURES
            </h3>
            <p className='text-white font-semibold'>
              Trekking, mountaineering, and extreme sports in the Himalayas!
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className='bg-blue-500 brutal-shadow brutal-border p-6 transform hover:scale-105 transition-all duration-300 hover:-rotate-2'
          >
            <div className='bg-yellow-400 brutal-border p-3 w-fit mb-4'>
              <Code2 className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-2xl font-black text-white mb-3 brutal-text'>
              SMART PLANNING
            </h3>
            <p className='text-white font-semibold'>
              AI-powered itineraries that know Nepal better than locals!
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className='bg-purple-600 brutal-shadow brutal-border p-6 transform hover:scale-105 transition-all duration-300 hover:rotate-1'
          >
            <div className='bg-lime-400 brutal-border p-3 w-fit mb-4'>
              <Globe className='w-8 h-8 text-black' />
            </div>
            <h3 className='text-2xl font-black text-white mb-3 brutal-text'>
              LOCAL VIBES
            </h3>
            <p className='text-white font-semibold'>
              Connect with authentic Nepal culture and hidden gems!
            </p>
          </div>
        </div>

        {/* Mountains Calling GIF Section */}
        <div className='bg-orange-500 brutal-shadow brutal-border p-6 mb-12 transform rotate-2 hover:-rotate-1 transition-transform duration-300 max-w-4xl mx-auto'>
          <div className='flex items-center justify-center mb-4'>
            <MapPin className='w-8 h-8 text-white mr-3' />
            <h3 className='text-2xl font-black text-white brutal-text'>
              THE MOUNTAINS ARE CALLING!
            </h3>
            <Eye className='w-8 h-8 text-white ml-3' />
          </div>
          <div className='bg-white brutal-border p-2 brutal-image-frame'>
            <img
              src='/mountainsAreCalling.gif'
              alt='Mountains are calling'
              className='w-full h-auto max-h-96 object-contain brutal-border hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>

        {/* Cooking Status */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[3] = el;
          }}
          className='bg-black brutal-shadow-large brutal-border p-8 max-w-2xl mx-auto mb-12 transform hover:scale-105 transition-all duration-300'
        >
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-orange-500 brutal-border p-3 mr-4 brutalpulse'>
              <Coffee className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-3xl font-black text-lime-400 brutal-text'>
              WE'RE COOKING!
            </h3>
            <div className='bg-yellow-400 brutal-border p-3 ml-4 brutalpulse'>
              <Sparkles className='w-8 h-8 text-black' />
            </div>
          </div>

          <p className='text-white text-xl font-bold mb-6 text-center'>
            Our team is crafting the ultimate Nepal adventure platform with
            cutting-edge technology and local expertise!
          </p>

          {/* Brutal Progress Bar */}
          <div className='mb-6'>
            <div className='bg-gray-800 brutal-border h-6 mb-2'>
              <div
                className='bg-lime-400 h-full brutal-border'
                style={{ width: "85%" }}
              >
                <div
                  className='h-full bg-yellow-400 animate-pulse'
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div className='flex justify-between text-white font-black text-sm brutal-text'>
              <span>STARTED</span>
              <span className='text-lime-400'>85% COOKED!</span>
              <span>LAUNCH!</span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            <button className='bg-lime-400 hover:bg-yellow-400 text-black font-black py-4 px-6 brutal-shadow brutal-border text-lg brutal-text transform hover:scale-105 transition-all duration-300'>
              <Bell className='inline-block mr-2 w-5 h-5' />
              NOTIFY ME!
            </button>
            <button className='bg-red-500 hover:bg-red-400 text-white font-black py-4 px-6 brutal-shadow brutal-border text-lg brutal-text transform hover:scale-105 transition-all duration-300'>
              <Flame className='inline-block mr-2 w-5 h-5' />
              PREVIEW NOW!
            </button>
          </div>
        </div>

        {/* Brutal Footer */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[4] = el;
          }}
          className='bg-yellow-400 brutal-shadow brutal-border p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300'
        >
          <div className='flex items-center justify-center space-x-3'>
            <Star className='w-6 h-6 text-black' />
            <span className='text-black font-black text-lg brutal-text'>
              LAUNCH: FEB 2026
            </span>
            <Heart className='w-6 h-6 text-red-500' />
            <span className='text-black font-black text-lg brutal-text'>
              MADE FOR NEPAL!
            </span>
            <Star className='w-6 h-6 text-black' />
          </div>
        </div>

        {/* Launch Countdown */}
        <div className='bg-pink-400 brutal-shadow brutal-border p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 max-w-lg mx-auto mb-12'>
          <h4 className='text-2xl font-black text-black mb-4 brutal-text text-center'>
            LAUNCH COUNTDOWN
          </h4>
          <div className='grid grid-cols-3 gap-2 text-center'>
            <div className='bg-black brutal-border p-3 hover:brutal-bounce'>
              <div className='text-2xl font-black text-pink-400 countdown-flip'>
                90
              </div>
              <div className='text-sm font-bold text-white'>DAYS</div>
            </div>
            <div className='bg-black brutal-border p-3 hover:brutal-bounce'>
              <div className='text-2xl font-black text-pink-400 countdown-flip'>
                8
              </div>
              <div className='text-sm font-bold text-white'>HOURS</div>
            </div>
            <div className='bg-black brutal-border p-3 hover:brutal-bounce'>
              <div className='text-2xl font-black text-pink-400 countdown-flip'>
                25
              </div>
              <div className='text-sm font-bold text-white'>MINS</div>
            </div>
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className='fixed bottom-8 right-8 space-y-4'>
          <div className='bg-red-500 brutal-shadow brutal-border p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer group'>
            <Zap className='w-8 h-8 text-white group-hover:animate-bounce' />
          </div>
          <div className='bg-orange-500 brutal-shadow brutal-border p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer'>
            <Flame className='w-6 h-6 text-white' />
          </div>
        </div>

        <div className='fixed top-8 right-8 space-y-4'>
          <div className='bg-blue-500 brutal-shadow brutal-border p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer group'>
            <Rocket className='w-8 h-8 text-white group-hover:animate-pulse' />
          </div>
          <div className='bg-purple-500 brutal-shadow brutal-border p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer'>
            <Star className='w-6 h-6 text-white' />
          </div>
        </div>

        <div className='fixed bottom-8 left-8'>
          <div className='bg-green-500 brutal-shadow brutal-border p-4 transform rotate-45 hover:rotate-90 transition-transform duration-500 cursor-pointer'>
            <Globe className='w-8 h-8 text-white' />
          </div>
        </div>
      </div>
    </div>
  );
}
