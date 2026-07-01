"use client";

import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Upload,
  Users,
  Eye,
  Download,
  ExternalLink,
  Clock,
  Shield,
  Globe,
  Award,
} from "lucide-react";

export default function SubmissionGuidelines() {
  const guidelines = [
    {
      number: "1",
      title: "Formatting",
      icon: <FileText className="w-5 h-5" />,
      content:
        "Authors are required to format their manuscripts using the official Full Paper Template, available for download below.",
      color: "blue",
      hasDownload: true,
    },
    {
      number: "2",
      title: "Originality",
      icon: <Shield className="w-5 h-5" />,
      content:
        "Submissions must be original and unpublished. Papers currently under review or previously submitted to other conferences or journals will not be accepted.",
      color: "green",
    },
    {
      number: "3",
      title: "Plagiarism Policy",
      icon: <AlertTriangle className="w-5 h-5" />,
      content:
        "The similarity index (plagiarism) must be below 10%. Papers failing to meet this criterion will be rejected without review.",
      color: "red",
      highlight: true,
    },
    {
      number: "4",
      title: "File Format",
      icon: <Upload className="w-5 h-5" />,
      content:
        "Submit your full paper in Microsoft Word format (.doc or .docx) only.",
      color: "purple",
    },
    {
      number: "5",
      title: "Language Quality",
      icon: <Globe className="w-5 h-5" />,
      content:
        "Please ensure that your manuscript is written in clear, concise, and grammatically correct English. If English is not your first language, we recommend a thorough review or professional editing before submission.",
      color: "orange",
    },
    {
      number: "6",
      title: "Author Registration",
      icon: <Users className="w-5 h-5" />,
      content: [
        "At least one author must register for the conference in order for the paper to be included in the proceedings.",
        "Only registered and presenting authors will receive conference certificates.",
        "Only papers that are presented at the conference will be considered for publication.",
      ],
      color: "indigo",
      isList: true,
    },
    {
      number: "7",
      title: "Presentation Limit",
      icon: <Award className="w-5 h-5" />,
      content: [
        "A maximum of two presentations per author is allowed to encourage broader participation and inclusivity.",
        "No paper may list more than six authors.",
      ],
      color: "teal",
      isList: true,
    },
  ];

  const reviewSteps = [
    {
      step: "1",
      title: "Plagiarism Check",
      description: "Similarity index must be below 10%",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Peer Review Process",
      description: "Evaluation by Technical Committee",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Decision Notification",
      description: "Accept, Minor Revisions, or Reject",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-100 text-blue-600",
      number: "bg-blue-600 text-white",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-100 text-green-600",
      number: "bg-green-600 text-white",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "bg-red-100 text-red-600",
      number: "bg-red-600 text-white",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-100 text-purple-600",
      number: "bg-purple-600 text-white",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "bg-orange-100 text-orange-600",
      number: "bg-orange-600 text-white",
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "bg-indigo-100 text-indigo-600",
      number: "bg-indigo-600 text-white",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: "bg-teal-100 text-teal-600",
      number: "bg-teal-600 text-white",
    },
  };

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
            <div className="inline-flex flex-col gap-1 items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <FileText className="w-4 h-4 mr-2 inline" />
              Paper Submission • Deadline:
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <span className="line-through opacity-60 text-xs">20 December 2025</span>
                <span className="line-through opacity-60 text-xs">25 December 2025</span>
                <span className="line-through opacity-60 text-xs">03 January 2026</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold">
                  8 January 2026 (Hard Deadline)
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Submission <span className="text-blue-200">Guidelines</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please adhere to the following instructions when preparing and
              submitting your full paper for IC-AISIS 2026.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
              <p className="text-blue-100 text-sm">
                <Clock className="w-4 h-4 inline mr-2" />
                Only complete papers will be considered for review. Abstracts
                alone will not be accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Submission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these essential guidelines to ensure your paper meets our
              submission standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => {
              const colors =
                colorClasses[guideline.color as keyof typeof colorClasses];
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border
                    } ${guideline.highlight
                      ? "ring-2 ring-red-200 ring-opacity-50"
                      : ""
                    } hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={`w-8 h-8 rounded-full ${colors.number} flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <span className="text-sm font-bold">
                        {guideline.number}
                      </span>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center mr-4`}
                    >
                      {guideline.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {guideline.title}
                      </h3>
                    </div>
                  </div>

                  <div className="ml-20">
                    {guideline.isList ? (
                      <ul className="space-y-2">
                        {(guideline.content as string[]).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700"
                          >
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {guideline.content as string}
                      </p>
                    )}

                    {guideline.hasDownload && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a
                          href="/template.docx"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          download
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Template
                        </a>
                      </div>
                    )}

                    {guideline.highlight && (
                      <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-red-700 text-xs font-medium">
                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                          Critical Requirement: Papers exceeding 10% similarity
                          will be automatically rejected
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              How to Submit a Manuscript
            </h2>
            <p className="text-xl text-gray-600">
              Submit your full-length manuscript through our designated
              submission portal
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Paper Submission Portal</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Prospective authors are invited to submit their full-length
              manuscripts through the designated submission portal. Upon
              submission, authors will receive a confirmation, and the
              manuscript will be evaluated by the Technical Program Committee.
            </p>
            <a
              href="https://cmt3.research.microsoft.com/icaisis2025/Track/1/Submission/Create"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <div className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                Submit Paper
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Review Process & Oral Presentation
            </h2>
            <p className="text-xl text-gray-600">
              Understanding our rigorous review process and presentation
              requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviewSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Review Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-800 mb-2">
                  Accepted for Oral Presentation
                </h4>
                <p className="text-green-700 text-sm">
                  Paper meets all requirements
                </p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Accepted with Minor Revisions
                </h4>
                <p className="text-yellow-700 text-sm">
                  Requires minor modifications
                </p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-red-800 mb-2">Rejected</h4>
                <p className="text-red-700 text-sm">
                  Does not meet requirements
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start">
              <Award className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Publication & Certification Requirements
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Only accepted papers that are registered and presented at the
                  conference will be eligible for publication and certification.
                  All submitted manuscripts must have a similarity index
                  (plagiarism) below 10% to proceed to the review stage.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <p className="text-yellow-900 text-sm font-semibold">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Important Note
                  </p>
                  <p className="text-yellow-900 text-sm mt-2 leading-relaxed">
                    Proceedings will be published, and Scopus indexing is expected around late November 2026. All accepted papers will be forwarded for publication; however, final indexing/publication decisions rest with the publisher, and acceptance is not guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Acknowledgement
                </h3>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p
                className="text-gray-800 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{
                  __html: `The <a href="https://cmt3.research.microsoft.com">Microsoft CMT service</a>  was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.`,
                }}
              ></p>
            </div>

            <a
              href="https://cmt3.research.microsoft.com/About"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" />
                <span>
                  Powered by Microsoft Conference Management Toolkit (CMT)
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
