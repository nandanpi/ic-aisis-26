"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  
  const [is2026, setIs2026] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname.includes("2026");
    }
    return pathname.includes("2026");
  });

  useEffect(() => {
    const currentPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "");
    setIs2026(currentPath.includes("2026"));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavLinkItem {
    href: string;
    label: string;
    tabId?: string;
  }

  interface NavItemBase {
    label: string;
  }

  interface NavItemWithHref extends NavItemBase {
    href: string;
    dropdown?: undefined;
  }

  interface NavItemWithDropdown extends NavItemBase {
    dropdown: NavLinkItem[];
    href?: undefined;
    downloadUrl?: undefined;
  }

  interface NavItemWithDownload extends NavItemBase {
    downloadUrl: string;
    href?: undefined;
    dropdown?: undefined;
  }

  type NavItem = NavItemWithHref | NavItemWithDropdown | NavItemWithDownload;

  const navLinks: NavItem[] = [
    { href: "/", label: "Home" },
    {
      label: "About",
      dropdown: [
        { href: "/about?tab=scope", label: "Conference Scope", tabId: "scope" },
        {
          href: "/about?tab=objectives",
          label: "Objectives",
          tabId: "objectives",
        },
        {
          href: "/about?tab=theme",
          label: "Theme & SDG Focus",
          tabId: "theme",
        },
        {
          href: "/about?tab=institutions",
          label: "Organizing Institutions",
          tabId: "institutions",
        },
      ],
    },
    {
      label: "Committees",
      dropdown: [
        {
          href: "/committee?tab=leadership",
          label: "Leadership & Executive",
          tabId: "leadership",
        },
        {
          href: "/committee?tab=chairs",
          label: "General Chairs",
          tabId: "chairs",
        },
        {
          href: "/committee?tab=technical",
          label: "Technical Committee",
          tabId: "technical",
        },
        {
          href: "/committee?tab=students",
          label: "Student Organisers",
          tabId: "students",
        },
      ],
    },
    { href: "/topics", label: "Topics" },
    ...(is2026
      ? [
          {
            downloadUrl:
              "https://docs.google.com/document/d/1lV8SbSj5a6jP94OIQOtXA3eA0yMFt3bKzyRD9aav68o/export?format=pdf",
            label: "Presentation Schedule",
          },
        ]
      : []),
    { href: "/schedule", label: "Schedule" },
    {
      label: "Call for Papers",
      dropdown: [
        { href: "/submission-guidelines", label: "Submission Guidelines" },
        { href: "/review-policy", label: "Review Policy" },
      ],
    },
    { href: "/fee", label: "Registration Fee" },
    { href: "/contact", label: "Contact" },
  ];

  const getLinkHref = (href: string) => {
    if (href === "/") {
      return is2026 ? "/2026" : "/2027";
    }
    const prefix = is2026 ? "/2026" : "/2027";
    return `${prefix}${href}`;
  };

  const isAboutTabActive = (tabId?: string) => {
    if (!pathname.endsWith("/about")) return false;
    const currentTab = searchParams.get("tab") || "scope";
    return tabId ? currentTab === tabId : false;
  };

  const isCommitteesTabActive = (tabId?: string) => {
    if (!pathname.endsWith("/committee")) return false;
    const currentTab = searchParams.get("tab") || "leadership";
    return currentTab === tabId;
  };

  const isAnyAboutTabActive = () => {
    return pathname.endsWith("/about");
  };

  const isAnyCommitteesTabActive = () => {
    return pathname.endsWith("/committee");
  };

  const isPageActive = (href: string) => {
    return pathname === getLinkHref(href);
  };

  const isCallForPapersActive = (dropdown: NavLinkItem[]) => {
    return dropdown.some((item) => pathname === getLinkHref(item.href));
  };

  const handleDownload = (url: string) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'resources.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "glass-effect shadow-lg" : "shadow-none"
        }`}
    >
      {/* 2026 Proceedings Top Announcement Marquee - Only in 2026 */}
      {is2026 && (
        <div className="w-full bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 text-white overflow-hidden border-b border-blue-700/50 py-2 relative z-50 shadow-md">
          <Link href="/2026/proceedings" className="block w-full cursor-pointer group">
            <div className="flex overflow-hidden select-none">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  duration: 25,
                }}
                className="flex items-center space-x-12 shrink-0 min-w-full"
              >
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  
                  <span className="font-semibold text-blue-50 text-xs md:text-sm tracking-wide">
                    🎉 IC-AISIS 2026 Proceedings are published &amp; fully indexed in <strong className="text-yellow-300">Scopus</strong>! Check Scopus Indexed Paper IDs.
                  </span>
                  <span className="bg-blue-600/80 group-hover:bg-blue-500 text-white px-3 py-0.5 rounded-md text-xs font-semibold shadow transition-all duration-200 inline-flex items-center ml-2 border border-blue-400/30">
                    View Scopus Indexed IDs &rarr;
                  </span>
                </div>
                <div className="flex items-center space-x-3 whitespace-nowrap">
                 
                  <span className="font-semibold text-blue-50 text-xs md:text-sm tracking-wide">
                    🎉 IC-AISIS 2026 Proceedings are published &amp; fully indexed in <strong className="text-yellow-300">Scopus</strong>! Check Scopus Indexed Paper IDs.
                  </span>
                  <span className="bg-blue-600/80 group-hover:bg-blue-500 text-white px-3 py-0.5 rounded-md text-xs font-semibold shadow transition-all duration-200 inline-flex items-center ml-2 border border-blue-400/30">
                    View Scopus Indexed IDs &rarr;
                  </span>
                </div>
              </motion.div>
            </div>
          </Link>
        </div>
      )}

      <div className="flex justify-between items-center px-4 md:px-8 py-3.5">
        <Link href={getLinkHref("/")} className="flex items-center md:gap-3 gap-2">
          <Image
            src={is2026 ? "/2026/nitteLogo.png" : "/2027/nitteLogo.png"}
            alt="Nitte Logo"
            width={200}
            height={100}
            className="md:w-56 w-40 h-6 md:h-8"
          />
          <div className="flex items-center border-l-2 md:ml-3 md:pl-4 ml-2 pl-3 border-gray-200">
            <Image src={is2026 ? "/2026/logo.png" : "/2027/logo.jpg"} alt="Logo" width={100} height={100} />
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-3">
          {navLinks.map((link, index) =>
            "dropdown" in link ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`flex items-center space-x-1 py-2 px-3.5 rounded-lg transition-all duration-200 ${(link.label === "About" && isAnyAboutTabActive()) ||
                    (link.label === "Committees" &&
                      isAnyCommitteesTabActive()) ||
                    (link.label === "Call for Papers" &&
                      isCallForPapersActive(link.dropdown ?? []))
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${dropdownOpen === link.label
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                    }`}
                >
                  {"dropdown" in link &&
                    link.dropdown?.map((item) => (
                      <Link
                        key={item.href}
                        href={getLinkHref(item.href)}
                        className={`block px-4 py-3 text-sm transition-colors ${link.label === "About"
                          ? isAboutTabActive(item.tabId)
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          : link.label === "Committees"
                            ? isCommitteesTabActive(item.tabId)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            : isPageActive(item.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>
              </div>
            ) : "downloadUrl" in link ? (
              <button
                key={index}
                onClick={() => handleDownload(link.downloadUrl)}
                className="py-2 px-3 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={"href" in link && link.href ? link.href : index.toString()}
                href={"href" in link && link.href ? getLinkHref(link.href) : "#"}
                className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${"href" in link && link.href && isPageActive(link.href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            ),
          )}

          {/* Year Dropdown Selector */}
          <div
            className="relative group ml-1"
            onMouseEnter={() => setDropdownOpen("YearSelector")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button
              className="flex items-center space-x-1.5 py-2 px-3 rounded-lg border border-blue-200 bg-blue-50/80 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 shadow-sm"
            >
              <span className="font-semibold">{is2026 ? "2026" : "2027"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === "YearSelector" ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${dropdownOpen === "YearSelector"
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-2"
                }`}
            >
              <Link
                href="/2027"
                className={`block px-4 py-2.5 text-sm transition-colors ${!is2026 && pathname !== "/2026/proceedings"
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                2027 Edition
              </Link>
              <Link
                href="/2026"
                className={`block px-4 py-2.5 text-sm transition-colors ${is2026 && pathname !== "/2026/proceedings"
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                2026 Edition
              </Link>
              <div className="my-1 border-t border-gray-100"></div>
              <Link
                href="/2026/proceedings"
                className={`block px-4 py-2.5 text-sm transition-colors ${pathname === "/2026/proceedings"
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                  }`}
              >
                2026 Proceedings
              </Link>
            </div>
          </div>
        </div>

        <button
          className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden py-4 border-t border-gray-100">
          <div className="space-y-2">
            {navLinks.map((link, index) =>
              "dropdown" in link ? (
                <div key={index}>
                  <button
                    className={`w-full text-left py-3 px-4 font-medium rounded-lg transition-colors ${(link.label === "About" && isAnyAboutTabActive()) ||
                      (link.label === "Committees" &&
                        isAnyCommitteesTabActive()) ||
                      (link.label === "Call for Papers" &&
                        "dropdown" in link &&
                        isCallForPapersActive(link.dropdown || []))
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    onClick={() => {
                      setDropdownOpen(
                        dropdownOpen === link.label ? null : link.label,
                      );
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${dropdownOpen === link.label ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  {dropdownOpen === link.label && "dropdown" in link && (
                    <div className="ml-4 space-y-1 mt-2">
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={getLinkHref(item.href)}
                          className={`block py-2 px-4 text-sm rounded-lg transition-colors ${link.label === "About"
                            ? isAboutTabActive(item.tabId)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            : link.label === "Committees"
                              ? isCommitteesTabActive(item.tabId)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              : isPageActive(item.href)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : "downloadUrl" in link ? (
                <button
                  key={index}
                  onClick={() => {
                    handleDownload(link.downloadUrl);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 font-medium rounded-lg transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={"href" in link && link.href ? link.href : index.toString()}
                  href={"href" in link && link.href ? getLinkHref(link.href) : "#"}
                  className={`block py-3 px-4 font-medium rounded-lg transition-colors ${"href" in link && link.href && isPageActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Mobile Year Selector */}
            <div className="border-t border-gray-100 pt-3 mt-3 px-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Conference Edition</p>
              <div className="space-y-1">
                <Link
                  href="/2027"
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${!is2026 && pathname !== "/2026/proceedings"
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  2027 Edition
                </Link>
                <Link
                  href="/2026"
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${is2026 && pathname !== "/2026/proceedings"
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  2026 Edition
                </Link>
                <Link
                  href="/2026/proceedings"
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${pathname === "/2026/proceedings"
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  2026 Proceedings
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
