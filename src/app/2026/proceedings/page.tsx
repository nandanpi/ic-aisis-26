"use client";

import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  FileCheck,
  FileSpreadsheet,
} from "lucide-react";

export default function Proceedings2026() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen bg-gray-50/50">
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
                  The papers presented at IC-AISIS 2026, conducted under the <strong className="text-gray-900 font-semibold">ACT Conference banner</strong>, have been successfully published by our publishing partner, <strong className="text-gray-900 font-semibold">Hinweis Publisher</strong>, in <strong className="text-blue-700 font-semibold">Grenze International Journal</strong> as part of the official conference proceedings.
                </p>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Your paper was accepted and published as part of the <strong>IC-AISIS Conference</strong> (under the <strong>ACT Conference banner</strong>) in <strong>Grenze International Journal</strong> as part of the conference proceedings. Therefore, it should be considered a <strong>conference publication (conference proceedings paper)</strong> rather than a regular journal article.
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
                    Hinweis Publisher
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Indexing Status Card - Scopus Indexed */}
          <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-green-50/60 rounded-3xl p-8 md:p-10 border border-emerald-200/80 shadow-md relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-300/60 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                  Scopus Indexing Complete
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                  All Papers are Now Indexed in Scopus
                </h3>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  We are pleased to announce that all accepted and published papers for IC-AISIS 2026 have been successfully indexed in <strong className="text-emerald-800 font-semibold">Scopus</strong>. You can view and verify the full list of papers along with their indexed Scopus IDs in the official spreadsheet below.
                </p>

                <div className="pt-2">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1gvY1l4WdybLLvZARtP1X5F8Zp31Ad7L0/edit?usp=sharing&ouid=118121981205328594627&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
                  >
                    <FileSpreadsheet className="w-5 h-5 mr-2.5 text-emerald-100" />
                    <span>View Scopus Indexed Paper List &amp; IDs</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm text-center min-w-[220px] w-full lg:w-auto">
                <FileCheck className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Indexing Status</p>
                <p className="text-xl font-bold text-emerald-700 mt-1">Scopus Indexed</p>
                <span className="inline-block mt-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                  Verified &amp; Active
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
