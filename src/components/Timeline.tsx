"use client";

import {
  Calendar,
  Clock,
  Users,
  Award,
  FileText,
  CheckCircle,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Timeline = () => {
  const pathname = usePathname() || "";
  const is2026 = pathname.includes("/2026");

  if (!is2026) {
    return (
      <section
        className="section-padding bg-gray-50 mb-24 py-16 px-5"
        id="important-dates"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Conference <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Important dates and milestones for IC-AISIS 2027 will be announced soon.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Timeline Coming Soon</h3>
              <p className="text-gray-500 text-sm">
                Dates for paper submission, registration, and notification will be published shortly. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const timelineEvents = [
    {
      date: "December 03, 2025",
      title: "Call for Papers Opens",
      description: "Submission portal opens for research papers and abstracts",
      icon: <FileText className="w-5 h-5" />,
      status: "completed",
      color: "blue",
    },
    {
      date: "8 January 2026",
      oldDates: ["20 December 2025", "25 December 2025", "03 January 2026"],
      title: "Paper Submission Deadline",
      description:
        "Final deadline for submitting research papers and abstracts",
      icon: <Clock className="w-5 h-5" />,
      status: "upcoming",
      color: "red",
      isHardDeadline: true,
    },
    {
      date: "12 January 2026",
      oldDates: ["25 December 2025", "30 December 2025", "06 January 2026", "10 January 2026"],
      title: "Notification of Acceptance",
      description: "Authors will be notified about paper acceptance status",
      icon: <CheckCircle className="w-5 h-5" />,
      status: "upcoming",
      color: "purple",
    },
    {
      date: "15 January 2026",
      oldDates: ["31 December 2025", "05 January 2026", "8 January 2026", "12 January 2026"],
      title: "Early Bird Registration",
      description:
        "Final deadline for early bird conference registration and payment",
      icon: <Users className="w-5 h-5" />,
      status: "upcoming",
      color: "orange",
    },
    {
      date: "16 January 2026",
      oldDates: ["05 January 2026", "10 January 2026", "13 January 2026"],
      title: "Regular Registration",
      description:
        "Final deadline for regular conference registration and payment",
      icon: <Users className="w-5 h-5" />,
      status: "upcoming",
      color: "blue",
    },
    {
      date: "24 January 2026",
      title: "Conference Date",
      description:
        "One day international conference with keynotes and presentations",
      icon: <Award className="w-5 h-5" />,
      status: "upcoming",
      color: "red",
      highlight: true,
    },
  ];

  const getStatusStyles = (status: string, color: string) => {
    if (status === "completed") {
      return {
        dot: "bg-green-500 border-green-200",
        line: "bg-green-200",
        card: "bg-green-50 border-green-200",
        icon: "bg-green-100 text-green-600",
        badge: "bg-green-100 text-green-700",
      };
    }

    const colorMap = {
      blue: {
        dot: "bg-blue-500 border-blue-200",
        line: "bg-gray-200",
        card: "bg-blue-50 border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        badge: "bg-blue-100 text-blue-700",
      },
      purple: {
        dot: "bg-purple-500 border-purple-200",
        line: "bg-gray-200",
        card: "bg-purple-50 border-purple-200",
        icon: "bg-purple-100 text-purple-600",
        badge: "bg-purple-100 text-purple-700",
      },
      orange: {
        dot: "bg-orange-500 border-orange-200",
        line: "bg-gray-200",
        card: "bg-orange-50 border-orange-200",
        icon: "bg-orange-100 text-orange-600",
        badge: "bg-orange-100 text-orange-700",
      },
      red: {
        dot: "bg-red-500 border-red-200",
        line: "bg-gray-200",
        card: "bg-red-50 border-red-200",
        icon: "bg-red-100 text-red-600",
        badge: "bg-red-100 text-red-700",
      },
    };

    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      className="section-padding bg-gray-50 mb-24 py-16 px-5"
      id="important-dates"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Conference <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay on track with all important dates and milestones leading up to
            IC-AISIS 2026
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const styles = getStatusStyles(event.status, event.color);
              const isLast = index === timelineEvents.length - 1;

              return (
                <div key={index} className="relative flex items-start">
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full border-4 ${styles.dot} flex items-center justify-center shadow-lg`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${styles.icon} flex items-center justify-center`}
                      >
                        {event.icon}
                      </div>
                    </div>

                    {!isLast && (
                      <div
                        className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 ${styles.line}`}
                      ></div>
                    )}
                  </div>

                  <div className="ml-8 flex-1">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${styles.card
                        } ${event.highlight
                          ? "ring-2 ring-red-200 ring-opacity-50"
                          : ""
                        }`}
                    >
                      <div className="flex sm:flex-row flex-col gap-2 items-center justify-between mb-4">
                        <div className="flex flex-col gap-1">
                          {event.oldDates && event.oldDates.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {event.oldDates.map((oldDate, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-500 line-through opacity-60"
                                >
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {oldDate}
                                </span>
                              ))}
                            </div>
                          )}
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${event.isHardDeadline
                              ? "bg-red-600 text-white font-bold"
                              : styles.badge
                              }`}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                            {event.isHardDeadline && (
                              <span className="ml-2 px-2 py-0.5 bg-white text-red-600 rounded-full text-xs font-bold">
                                Hard Deadline
                              </span>
                            )}
                          </span>
                        </div>

                        {event.status === "completed" && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Completed
                          </span>
                        )}

                        {event.highlight && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700 animate-pulse">
                            <Award className="w-4 h-4 mr-1" />
                            Main Event
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>

                      {/* {(event.title.includes("Deadline") ||
                        event.title.includes("Conference")) && */}
                      {event.status === "upcoming" &&
                        event.title.includes("Paper Submission Deadline") && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <a
                              href={
                                "https://cmt3.research.microsoft.com/icaisis2025/Track/1/Submission/Create"
                              }
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                            >
                              {/* {event.title.includes("Deadline")
                              ? "Register Now"
                              : "Submit Paper"} */}
                              Submit Paper
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
