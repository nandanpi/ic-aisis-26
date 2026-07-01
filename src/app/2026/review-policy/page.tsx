"use client";

import {
  ClipboardCheck,
  Users,
  FileCheck,
  AlertTriangle,
  FileText,
  Clock,
} from "lucide-react";

export default function ReviewPolicy() {
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
              Review <span className="text-blue-200">Policy</span>
            </h1>

            <p className="text-xl text-blue-100 mb-2 max-w-3xl mx-auto leading-relaxed">
              IC-AISIS&apos;26 upholds a rigorous, transparent, and ethical
              review process to ensure the publication of high-quality research
              aligned with our conference theme.
            </p>
            <p className="text-xl text-blue-100 italic mb-8 max-w-3xl mx-auto leading-relaxed">
              &quot;Harnessing AI to Drive Sustainability Across
              Industries&quot;
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 aspect-square rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Overview of the Review Process
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              All submitted manuscripts undergo a <strong>peer review</strong>{" "}
              process conducted by qualified experts in relevant domains. This
              process is designed to evaluate{" "}
              <strong>
                technical quality, relevance, originality, and clarity
              </strong>{" "}
              of each submission, ensuring that accepted papers meet
              international research standards.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Review Points
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <p className="text-gray-700">
                    Each paper will be reviewed by{" "}
                    <strong>a minimum of two independent reviewers.</strong>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <p className="text-gray-700">
                    Reviewers are selected based on{" "}
                    <strong>subject matter expertise and experience</strong> in
                    the domain.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <p className="text-gray-700">
                    The identities of authors may be known to the Technical
                    Program Chairs, but{" "}
                    <strong>
                      authors will not be informed of reviewer identities.
                    </strong>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <p className="text-gray-700">
                    The <strong>final decision</strong> on acceptance or
                    rejection rests with the{" "}
                    <strong>Technical Program Committee (TPC)</strong>
                    based on reviewers&apos; feedback.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 aspect-square rounded-xl bg-green-100 flex items-center justify-center mr-4">
                  <FileCheck className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Evaluation Criteria
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Originality and Novelty
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contribution of new knowledge, insights, or approaches.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technical Soundness
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Robustness of methodology, algorithms, and theoretical
                    framework.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Alignment with conference themes and chosen tracks.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clarity of Presentation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Structure, language quality, and logical flow of the
                    content.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Practical Significance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Potential for real-world applications or impact in
                    sustainable development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 aspect-square rounded-xl bg-purple-100 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Reviewer Responsibilities
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">Reviewers are expected to:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Provide{" "}
                      <strong>
                        constructive, unbiased, and respectful feedback.
                      </strong>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Assess submissions based on merit</strong>,
                      without discrimination or conflict of interest.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Maintain <strong>confidentiality</strong> of the
                      manuscript and review content.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">4</span>
                    </div>
                    <p className="text-gray-700">
                      Report{" "}
                      <strong>any suspicion of ethical misconduct</strong>,
                      including plagiarism or data fabrication.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">5</span>
                    </div>
                    <p className="text-gray-700">
                      Submit reviews within the{" "}
                      <strong>stipulated timeline</strong> to ensure smooth
                      processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 aspect-square rounded-xl bg-red-100 flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Conflict of Interest Policy
              </h2>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <p className="text-gray-700">
                Reviewers and committee members must{" "}
                <strong>declare any potential conflicts of interest</strong>{" "}
                with a submitted manuscript. In such cases, the paper will be
                reassigned to an alternative reviewer.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mt-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 aspect-square rounded-xl bg-green-100 flex items-center justify-center mr-4">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Ethical Standards and Plagiarism Policy
              </h2>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <p className="text-gray-700 mb-4">
                IC-AISIS&apos;26 is committed to the highest standards of
                publication ethics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    All submissions will be subjected to{" "}
                    <strong>plagiarism detection software</strong> (such as
                    Turnitin or iThenticate).
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    Papers with{" "}
                    <strong>significant overlap (typically {">"} 10%)</strong>{" "}
                    with previously published work will be rejected outright.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    Self-plagiarism, duplicate submissions, and manipulated
                    results will lead to immediate rejection and blacklisting.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mt-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 aspect-square rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Technical Program Committee Oversight
              </h2>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700 mb-4">
                The <strong>Technical Program Committee (TPC)</strong> oversees
                the entire review process and ensures its fairness and
                integrity. In cases of conflicting reviews, the TPC may:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    Request a <strong>third independent review</strong>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
                  <p className="text-gray-700">
                    Initiate a <strong>committee discussion</strong> to reach a
                    consensus
                  </p>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                The TPC&apos;s decision is <strong>final and binding.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mt-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 aspect-square rounded-xl bg-purple-100 flex items-center justify-center mr-4">
                <ClipboardCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Appeals and Revisions
              </h2>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="text-gray-700 mb-4">
                Authors of <strong>conditionally accepted papers</strong> will
                be invited to make revisions based on reviewer feedback. These
                revised papers will be checked by reviewers or TPC members for
                compliance.
              </p>
              <p className="text-gray-700">
                Appeals against rejection must be{" "}
                <strong>submitted in writing</strong> with a detailed
                justification and will be reviewed by the TPC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
