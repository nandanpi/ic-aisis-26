"use client";

import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  FileCheck,
} from "lucide-react";

export default function Proceedings2026() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50/50">
      {/* Hero Header Section */}
      <section className="relative py-16 md:py-20 overflow-hidden px-5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
          <div className="absolute inset-0 opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="proceedings-grid"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <path
                    d="M 0 0 L 0 1 L 8 1"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#proceedings-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              IC-AISIS 2026 • Official Publication
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              2026 <span className="bg-gradient-to-r from-blue-200 via-indigo-100 to-white bg-clip-text text-transparent">Conference Proceedings</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore the published research papers from the International Conference on Artificial Intelligence for Sustainability and Intelligent Systems (IC-AISIS 2026).
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Publication Main Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Published
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-600 text-sm font-medium">Grenze Scientific Society</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 leading-snug">
                  Papers Published in Grenze Publication
                </h2>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Currently, the papers presented at IC-AISIS 2026 have been successfully published by our publishing partner, <strong className="text-gray-900 font-semibold">Hinweis Research</strong>, in the prestigious <strong className="text-blue-700 font-semibold">Grenze Publication</strong>.
                </p>

                {/* Call to Action Button */}
                <div className="pt-2">
                  <a
                    href="https://thegrenze.com/journals/1?volume=16&issue=36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    <span>Access Published Papers</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Partner Logo Column */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 text-center w-full max-w-xs shadow-inner">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Publishing Partner
                  </p>
                  <div className="relative h-20 w-full flex items-center justify-center mb-2">
                    <Image
                      src="/2026/hinweis_logo.png"
                      alt="Hinweis Research Logo"
                      width={220}
                      height={90}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Hinweis Research
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Indexing Status Card */}
          <div className="bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-yellow-50/50 rounded-3xl p-8 md:p-10 border border-amber-200/80 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-full">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
                  Indexing Status Update
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                  Scopus Indexing Applied
                </h3>

                <p className="text-gray-700 leading-relaxed text-base">
                  Scopus Indexing has been formally applied for the published volume. The proceedings are currently under evaluation/processing and are expected to be fully indexed on <strong className="text-gray-900">Scopus around the end of November</strong>.
                </p>
              </div>

              <div className="flex-shrink-0 bg-white p-5 rounded-2xl border border-amber-200/60 shadow-sm text-center min-w-[200px]">
                <FileCheck className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Expected Scopus Indexing</p>
                <p className="text-lg font-bold text-amber-700 mt-0.5">End of November</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
