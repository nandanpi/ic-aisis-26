"use client";
import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  FileText,
  Calendar,
  Users,
  Mail,
  Compass,
} from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    {
      href: "/",
      label: "Home",
      description: "Return to the main page",
      icon: <Home className="w-5 h-5" />,
    },
    {
      href: "/about",
      label: "About Conference",
      description: "Learn about IC-AISIS 2027",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      href: "/topics",
      label: "Research Topics",
      description: "Explore conference topics",
      icon: <Search className="w-5 h-5" />,
    },
    {
      href: "/schedule",
      label: "Schedule",
      description: "View conference program",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      href: "/committees",
      label: "Committees",
      description: "Meet our organizing team",
      icon: <Users className="w-5 h-5" />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      description: "Get in touch with us",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-16 overflow-hidden">
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

        <div className="relative z-10 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-8xl lg:text-9xl font-bold text-white/20 mb-4 select-none">
                404
              </div>
              <div className="relative -mt-16">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/20">
                  <Compass
                    className="w-12 h-12 text-white animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Page <span className="text-blue-200">Not Found</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for seems to have wandered off.
              Don&apos;t worry, we&apos;ll help you find your way back to the
              conference information you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Where would you like to go?
            </h2>
            <p className="text-xl text-gray-600">
              Here are some popular sections of our conference website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Still can&apos;t find what you need?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you were looking for specific information about IC-AISIS 2027,
              try checking our main sections or contact us directly for
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Support
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Conference
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
