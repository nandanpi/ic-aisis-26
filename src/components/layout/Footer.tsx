"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import PartnerAssociation from "@/components/PartnerAssociation";
import { usePathname } from "next/navigation";
import {
  importantDates2026,
  importantDates2027,
  ImportantDate,
} from "@/lib/timeline";

const Footer = () => {
  const pathname = usePathname() || "";
  const is2026 = pathname.includes("/2026");

  const getLinkHref = (href: string) => {
    if (href === "/") {
      return is2026 ? "/2026" : "/2027";
    }
    const prefix = is2026 ? "/2026" : "/2027";
    return `${prefix}${href}`;
  };

  const quickLinks = [
    { href: "/about", label: "About Conference" },
    { href: "/topics", label: "Research Topics" },
    { href: "/schedule", label: "Program Schedule" },
    { href: "/organizers", label: "Organizing Committee" },
  ];

  const authorResources = [
    { href: "/submission-guidelines", label: "Submission Guidelines" },
    { href: "/expected-outcomes", label: "Expected Outcomes" },
    { href: "/register", label: "Registration Portal" },
    { href: "/contact", label: "Contact Support" },
  ];

  const importantDates: ImportantDate[] = is2026 ? importantDates2026 : importantDates2027;

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden flex flex-col justify-center items-center px-5">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start space-x-4 mb-6">
              <div>
                <h3 className="text-2xl font-display font-bold">
                  IC-AISIS {is2026 ? "2026" : "2027"}
                </h3>
                <p className="text-blue-300 font-medium">
                  {is2026 ? "International Conference" : "2nd International Conference"}
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {is2026 ? "International Conference" : "2nd International Conference"} on Artificial Intelligence for
              Sustainability and Intelligent Systems
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {is2026 ? "January 24, 2026" : <>July 2<sup>nd</sup> and 3<sup>rd</sup>, 2027</>}
                  </p>
                  <p className="text-sm text-gray-400">
                    {is2026
                      ? "Hybrid Mode Conference (Virtual Mode is Only for the participants Outsite Karnataka)"
                      : "Offline Mode Conference"
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    NMAM Institute of Technology, Nitte
                  </p>
                  <p className="text-sm text-gray-400">Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLinkHref(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">
              For Authors
            </h4>
            <ul className="space-y-3">
              {authorResources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLinkHref(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Important Dates
            </h4>
            <div className="space-y-4 mb-8">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-3 rounded-lg border ${item.isHardDeadline
                    ? "bg-red-900/30 border-red-700/50"
                    : "bg-gray-800/50 border-gray-700/50"
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 text-sm">{item.event}</span>
                    {item.isHardDeadline && (
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                        Hard Deadline
                      </span>
                    )}
                  </div>
                  {item.oldDates && item.oldDates.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-1">
                      {item.oldDates.map((oldDate, idx) => (
                        <span
                          key={idx}
                          className="text-gray-500 text-xs line-through opacity-60"
                        >
                          {oldDate}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className={`font-semibold text-sm ${item.isHardDeadline ? "text-red-400" : "text-blue-400"
                    }`}>
                    {item.date}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-white mb-4">
                Contact Information
              </h5>

              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm mb-1">
                      General Inquiries
                    </p>
                    <a
                      href="mailto:ic-aisis@nmamit.in"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                    >
                      ic-aisis@nmamit.in
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <PartnerAssociation variant="footer" />
        </div>
      </div>

      <div className="border-t border-gray-800 flex sm:flex-row flex-col py-4 w-full gap-4 justify-center items-center">
        <p className="text-gray-400 text-sm">
          © {is2026 ? "2026" : "2027"} IC-AISIS. All rights reserved.
        </p>
        <div className="flex items-center space-x-1 text-gray-400 text-sm">
          <span>Organized by</span>
          <a
            href="https://nitte.edu.in/nmamit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium inline-flex items-center"
          >
            NMAMIT, Nitte
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
