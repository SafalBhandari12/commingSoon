"use client";

import {
  Mountain,
  Clock,
  MapPin,
  Sparkles,
  Bell,
  ArrowRight,
} from "lucide-react";

export default function ModernComingSoon() {
  return (
    <div className='min-h-screen bg-slate-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'></div>

        {/* Geometric Shapes */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20'></div>
        <div className='absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-25'></div>
        <div className='absolute bottom-32 left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-15'></div>
        <div className='absolute bottom-20 right-32 w-20 h-20 bg-cyan-100 rounded-full opacity-30'></div>

        {/* Floating Grid Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='grid grid-cols-12 h-full'>
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className='border border-gray-300'></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center px-4'>
        {/* Header Section */}
        <div className='text-center mb-16 max-w-4xl mx-auto'>
          {/* Logo/Brand */}
          <div className='flex items-center justify-center mb-8'>
            <div className='bg-white rounded-2xl p-4 shadow-lg border border-gray-100'>
              <Mountain className='w-12 h-12 text-indigo-600' />
            </div>
          </div>

          {/* Main Title */}
          <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight'>
            <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent'>
              NEPAL
            </span>
          </h1>

          <h2 className='text-2xl md:text-3xl font-medium text-gray-700 mb-8'>
            Your Ultimate Tourism Platform
          </h2>

          {/* Status Badge */}
          <div className='inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 mb-8'>
            <Clock className='w-5 h-5 text-indigo-600 mr-2' />
            <span className='text-gray-700 font-medium'>Coming Soon</span>
            <div className='w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse'></div>
          </div>

          {/* Description */}
          <p className='text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
            We're building something extraordinary for Nepal tourism. A platform
            that connects travelers with authentic experiences, from the peaks
            of Everest to the heart of Kathmandu.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16'>
          {[
            {
              icon: <Mountain className='w-8 h-8 text-indigo-600' />,
              title: "Adventure Planning",
              description:
                "Smart itineraries for trekking, mountaineering, and cultural exploration",
            },
            {
              icon: <MapPin className='w-8 h-8 text-purple-600' />,
              title: "Local Insights",
              description:
                "Connect with authentic experiences and hidden gems across Nepal",
            },
            {
              icon: <Sparkles className='w-8 h-8 text-blue-600' />,
              title: "Seamless Experience",
              description:
                "Modern, intuitive platform designed for today's travelers",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='bg-gray-50 rounded-xl p-3 w-fit mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Launch Info */}
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto mb-16'>
          <div className='text-center'>
            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
              Expected Launch
            </h3>
            <div className='text-4xl font-bold text-indigo-600 mb-6'>
              February 2026
            </div>

            {/* Progress Indicator */}
            <div className='mb-8'>
              <div className='flex justify-between text-sm text-gray-600 mb-2'>
                <span>Development Progress</span>
                <span>85%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-3'>
                <div
                  className='bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out'
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* CTA Button */}
            <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group'>
              <Bell className='inline-block w-5 h-5 mr-2' />
              Get Notified
              <ArrowRight className='inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center text-gray-500'>
          <p className='text-sm'>Crafted with ❤️ for Nepal Tourism | © 2025</p>
        </div>
      </div>
    </div>
  );
}
