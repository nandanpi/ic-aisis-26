"use client";
import type React from "react";

import { Mail, MapPin, Building, Globe } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const generalChairs = [
    {
      name: "Dr. Niranjan N Chiplunkar",
      title: "General Chair",
      department: "Principal",
      institution: "NMAM Institute of Technology, Nitte",
      email: "principal_nmamit@nitte.edu.in",
      image:
        "https://res.cloudinary.com/dqtyllykk/image/upload/v1748665152/niranjan_Large_snbysb.jpg",
    },
    {
      name: "Dr. Shashank Shetty",
      title: "General Co-Chair",
      department: "Associate Professor, Dept. of CSE",
      institution: "NMAM Institute of Technology, Nitte",
      email: "shashankshetty@nitte.edu.in",
      image:
        "https://res.cloudinary.com/dqtyllykk/image/upload/v1748665153/shashankShetty_Large_rurgwa.jpg",
    },
    {
      name: "Dr. Mangala Shetty",
      title: "General Co-Chair",
      department: "Associate Professor, Dept. of MCA",
      institution: "NMAM Institute of Technology, Nitte",
      email: "mangalapshetty@nitte.edu.in",
      image:
        "https://res.cloudinary.com/dqtyllykk/image/upload/v1748665133/mangalaShetty_Large_rd68u3.jpg",
    },
    {
      name: "Dr. N S S RAMAKRISHNA",
      title: "General Co-Chair",
      department: "Associate Professor, Dept. of EEE",
      institution: "NMAM Institute of Technology, Nitte",
      email: "ramakrishna.n@nitte.edu.in",
      image:
        "https://nitte.edu.in/admin/photo/3/faculty/6/2811.jpg",
    },
  ];

  const studentChairs = [
    {
      name: "Mr. Paripoorna B",
      title: "Student Chair",
      department: "Department of Computer Science",
      institution: "NMAM Institute of Technology, Nitte",
      email: "nnm23cs124@nmamit.in",
      image:
        "https://res.cloudinary.com/dstpdenfa/image/upload/v1764619910/profile_pictures/profile_158_1764619910.jpg",
    },
  ];

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
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch • We&apos;re Here to Help
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Contact <span className="text-blue-200">Us</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about IC-AISIS 2027? We&apos;re here to help. Reach
              out to us for any inquiries about submissions, registration, or
              conference details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Conference Chairs
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with our conference leadership team
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {generalChairs.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <Image
                    width={100}
                    height={100}
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-gray-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {person.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {person.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      {person.department}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {person.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3" />
                    <a
                      href={`mailto:${person.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {person.email}
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Student Chairs
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with our student chairs
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {studentChairs.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <Image
                    width={100}
                    height={100}
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-gray-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {person.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {person.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      {person.department}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {person.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3" />
                    <a
                      href={`mailto:${person.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {person.email}
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-gray-600">
              NMAM Institute of Technology, Nitte, Karnataka, India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                  Location Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        NMAM Institute of Technology
                      </p>
                      <p className="text-gray-600 text-sm">
                        Nitte, Udupi District
                      </p>
                      <p className="text-gray-600 text-sm">
                        Karnataka 574110, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Nearest Airport
                      </p>
                      <p className="text-gray-600 text-sm">
                        Mangaluru International Airport (45 km)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Nearest Railway Stations
                      </p>
                      <p className="text-gray-600 text-sm">
                        Udupi (40 km) • Mangaluru (50 km)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-full ">
                <iframe
                  title="NMAMIT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6730533394866!2d74.93141407627081!3d13.183002587152153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sNitte%20Mahalinga%20Adyantaya%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1748431361119!5m2!1sen!2sin"
                  className="w-full h-96 lg:h-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg py-16 px-5">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is ready to assist you with any inquiries about IC-AISIS
            2027. Don&apos;t hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ic-aisis@nmamit.in"
              className="text-white flex justify-center items-center bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:outline transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
            <a
              href="/fee"
              className="outline text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Registration Fees
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
