"use client";

import {
  Calendar,
  MapPin,
  Users,
  Award,
} from "lucide-react";

export default function Schedule() {

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-16 overflow-hidden px-5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
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
                  id="grid"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <path
                    d="M 0 0 L 0 1 L 8 1"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <Calendar className="w-4 h-4 mr-2" />
              July 2<sup>nd</sup> and 3<sup>rd</sup>, 2027 • 2 Days • Hybrid Mode
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Conference <span className="text-blue-200">Schedule</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for two days of cutting-edge research presentations,
              keynote speeches, and networking opportunities in AI and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center max-w-md mx-auto mb-12">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The detailed program schedule for IC-AISIS 2027 will be announced closer to the conference date. Please check back later.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Venue Information
              </h3>
              <p className="text-gray-600 text-sm">
                NMAM Institute of Technology, Nitte, Karnataka, India. All
                sessions will be held in the main conference complex with offline
                participation options.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Networking Opportunities
              </h3>
              <p className="text-gray-600 text-sm">
                Multiple networking sessions, coffee breaks, and informal
                discussions are scheduled throughout the day to facilitate
                collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Awards & Recognition
              </h3>
              <p className="text-gray-600 text-sm">
                Best paper awards, outstanding poster presentations, and student
                research excellence will be recognized during the closing
                ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg py-16 px-5">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Register now to secure your spot at this premier conference on AI
            and sustainability.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center w-full">
            <a
              href="/2027/fee"
              className="text-blue-600 outline px-8 py-4 rounded-xl font-semibold w-full"
            >
              View Registration Fees
            </a>
            <a
              href="/2027/contact"
              className="text-white bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:outline transition-colors w-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
