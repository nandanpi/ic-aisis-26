"use client";
import type React from "react";
import {
  Calendar,
  MapPin,
  Download,
  Clock,
  Award,
  Notebook,
} from "lucide-react";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import { useState } from "react";
import PageLoader from "@/components/layout/PageLoader";
import Link from "next/link";
import PartnerAssociation from "@/components/PartnerAssociation";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <PageLoader onComplete={handleLoadingComplete} />
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              width={1000}
              height={500}
              src="/nitte-campus.jpeg"
              alt="NMAMIT Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-600/10 to-transparent"></div>
          </div>

          <div className="relative z-10 mx-5 pt-20 pb-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-white">
                  <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-xs font-medium mb-3 border border-white/20">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    March 8<sup>th</sup> and 9<sup>th</sup>, 2027 • Offline Mode
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-display font-bold mb-4 leading-tight">
                    2nd International Conference on{" "}
                    <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                      Artificial Intelligence
                    </span>{" "}
                    for Sustainability and Intelligent Systems
                  </h1>

                  <p className="text-lg text-blue-100 mb-6 max-w-2xl leading-relaxed">
                    Join researchers, academicians, and professionals from
                    around the world to explore how AI can shape a sustainable
                    future at NMAM Institute of Technology, Nitte.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <button className="bg-white text-blue-600 px-6 py-3 w-full rounded-xl font-semibold cursor-not-allowed inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-85" disabled>
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure (Coming Soon)
                    </button>
                    <button
                      className="border-2 border-white/80 text-white px-6 py-3 w-full rounded-xl font-semibold cursor-not-allowed inline-flex items-center justify-center backdrop-blur-sm disabled:opacity-60" disabled
                    >
                      <Notebook className="w-4 h-4 mr-2" />
                      Submit Paper (Coming Soon)
                    </button>
                  </div>

                  <div className="mt-2">
                    <PartnerAssociation variant="hero" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="space-y-4">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Conference Details
                          </h3>
                          <p className="text-xs text-gray-500">IC-AISIS 2027</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700 text-sm">
                          <MapPin className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium">
                              NMAM Institute of Technology, Nitte
                            </p>
                            <p className="text-xs text-gray-500">
                              Karnataka, India
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Clock className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium">March 8<sup>th</sup> and 9<sup>th</sup>, 2027</p>
                            <p className="text-xs text-gray-500">
                              Two day conference
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Award className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Publishing Partner: Coming Soon</p>
                            <p className="text-xs text-gray-500">
                              Scopus Indexed (Details will be updated)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-150 mt-4 pt-4">
                        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-2">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <a
                            href="/2027/submission-guidelines"
                            className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 p-2 rounded-lg transition-colors border border-gray-100 font-medium"
                          >
                            Submission Guidelines
                          </a>
                          <a
                            href="/2027/schedule"
                            className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 p-2 rounded-lg transition-colors border border-gray-100 font-medium"
                          >
                            View Schedule
                          </a>
                          <a
                            href="/2027/topics"
                            className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 p-2 rounded-lg transition-colors border border-gray-100 font-medium"
                          >
                            Research Topics
                          </a>
                          <span
                            className="bg-gray-50 text-gray-400 p-2 rounded-lg border border-gray-100 font-medium opacity-60 cursor-not-allowed"
                          >
                            Submit Paper (Soon)
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link href={"/2027/about?tab=theme"}>
                      <div className="bg-white/95 cursor-pointer hover:bg-gray-50 transition-colors backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <Image
                              src="/sdg-9-logo.png"
                              alt="SDG 9 - Industry, Innovation and Infrastructure"
                              width={44}
                              height={44}
                              className="rounded-lg shadow-sm"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm truncate">
                              SDG 9: Industry, Innovation & Infrastructure
                            </h4>
                            <p className="text-xs text-gray-500">
                              Primary Focus of IC-AISIS&apos;27 (Click to read more)
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Timeline />

        <div className="max-w-6xl mx-auto mb-32 px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Attend IC-AISIS 2027?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge research, network with global experts, and
              contribute to a sustainable future through AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Keynote Speakers",
                description:
                  "Learn from world-renowned experts in AI and sustainability",
                icon: "🎤",
              },
              {
                title: "Research Presentations",
                description: "Present your work and get feedback from peers",
                icon: "📊",
              },
              {
                title: "Networking Opportunities",
                description:
                  "Connect with researchers and industry professionals",
                icon: "🤝",
              },
              {
                title: "Publication Opportunities",
                description:
                  <span>Get your research published with <u>(Coming Soon)</u> (Scopus Indexed)</span>,
                icon: "📚",
              },
              {
                title: "Offline Participation",
                description: "In-person and virtual presentation and participation options",
                icon: "🌐",
              },
              {
                title: "Student Forum",
                description: "Special sessions dedicated to student research",
                icon: "🎓",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
