"use client";
import { colorClasses2 } from "@/lib/colorClasses";
import {
  CreditCard,
  GraduationCap,
  AlertCircle,
  X,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { importantDates2027 } from "@/lib/timeline";

export default function RegistrationFees() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const feeCategories = [
    {
      category: "Registration Fee",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "blue",
      description:
        "Standard registration fee for all presenting authors and participants",
      fees: {
        amount: "₹8,000",
      },
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
              <CreditCard className="w-4 h-4 mr-2" />
              Registration Opening Soon
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Registration <span className="text-blue-200">Fees</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Register and secure your spot at IC-AISIS 2027.
            </p>
            {// Early bird rates available until 15 January 2027.
            }
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
              <p className="text-blue-100 text-sm">
                <AlertCircle className="w-4 h-4 inline mr-2" />
                Final registration fees as approved by the organizing committee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Registration Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the category that best describes you and view the
              corresponding registration fees
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 justify-items-center">
            {feeCategories.map((category, index) => {
              const colors =
                colorClasses2[category.color as keyof typeof colorClasses2];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-md"
                >
                  <div
                    className={`bg-gradient-to-r h-32 ${colors.gradient} p-6`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mr-4`}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {category.category}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-sm font-medium text-gray-700">
                          Registration Fee
                        </span>
                        <span className="text-xl font-bold text-blue-700">
                          {category.fees.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Student Author Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information for students submitting papers to IC-AISIS
              2027
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <p className="text-lg">
                  As this conference is dedicated to encouraging and showcasing
                  student-led research and innovation, the following guidelines
                  apply specifically to student paper submissions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Primary Authorship
                </h3>
                <p className="text-gray-700">
                  The primary (first) author must be a student enrolled in a
                  recognized university or academic institution at the time of
                  submission.
                </p>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Original Work
                </h3>
                <p className="text-gray-700">
                  The submitted work should reflect the original contributions
                  of the student, although faculty mentors and collaborators may
                  be listed as co-authors.
                </p>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Registration Requirements
                </h3>
                <p className="text-gray-700">
                  Student authors must complete registration under the student
                  category and be officially listed as the first author.
                </p>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Attendance
                </h3>
                <p className="text-gray-700">
                  Upon acceptance, the student author is required to attend the
                  conference in person and present their research.
                </p>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Verification
                </h3>
                <p className="text-gray-700">
                  Proof of student status (valid student ID or official letter)
                  may be requested during registration or conference
                  participation.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                <p>
                  This initiative aligns with our mission to foster a vibrant
                  community of young researchers, provide exposure to peer and
                  expert feedback, and build future leaders in science and
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Important Registration Dates
            </h2>
            <p className="text-xl text-gray-600">
              Mark your calendar and register early to save on fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {importantDates2027.map((date, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 bg-blue-50 border-blue-200 shadow-md transition-all duration-200"
              >
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {date.event}
                  </h3>
                  <p className="text-gray-600 mb-3 font-semibold">{date.date}</p>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    Upcoming
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Payment Information
              </h2>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">
                    Important Notes
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>
                      • Registration fees are non-refundable after payment
                      confirmation
                    </li>
                    <li>
                      • Student registrations require valid student ID
                      verification
                    </li>
                    <li>
                      • Author registration is mandatory for paper presentation
                    </li>
                    <li>
                      • Registration form will be available soon on our website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg py-16 px-5">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Ready to Register?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Register now and join us for this premier conference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-blue-600 outline px-8 py-4 rounded-xl font-semibold ">
              Register Now (Coming Soon)
            </div>
            <a
              href="/2027/contact"
              className="text-white bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:outline transition-colors"
            >
              Contact for Queries
            </a>
          </div>
        </div>
      </section>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`bg-gradient-to-r bg-blue-500 p-6 text-white`}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Student Author Guidelines
                </h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="w-8 h-8 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/90 mt-2">
                As this conference is dedicated to encouraging and showcasing
                student-led research and innovation, the following guidelines
                apply specifically to student paper submissions.
              </p>
            </div>

            <ul className="px-12 py-6 space-y-4 list-disc">
              <li>
                The{" "}
                <strong>primary (first) author author must be a student</strong>{" "}
                enrolled in a recognized university or academic institution at
                the time of submission.
              </li>
              <li>
                The submitted work should reflect the{" "}
                <strong>original contributions of the student</strong>, although
                faculty mentors and collaborators may be listed as co-authors.
              </li>
              <li>
                To qualify for student-specific recognition, awards, or
                registration categories, the student author must complete the
                <strong>registration process</strong> under the student category
                and be officially listed as the <strong>first author</strong>.
              </li>
              <li>
                Upon acceptance of the paper, the student author is required to{" "}
                <strong>attend the conference in person</strong> and present
                their research. This in-person participation is essential to
                ensure academic exchange and visibility of student work.
              </li>
              <li>
                Proof of student status (such as a valid student ID or an
                official letter from the institution) may be requested during
                registration or at the time of conference participation.
              </li>
            </ul>

            <div className={`bg-gradient-to-r bg-blue-200 p-6 text-black`}>
              <p className="mt-2">
                This initiative aligns with the conference&apos;s mission to{" "}
                <strong>foster a vibrant community of young researchers</strong>
                , provide exposure to peer and expert feedback, and build future
                leaders in science and technology.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
