"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TabInterface from "@/components/TabInterface";
import {
  Globe,
  Target,
  Award,
  Building,
  BookOpen,
  Users,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default function About() {
  return (
    <Suspense>
      <AboutContent />
    </Suspense>
  );
}

const AboutContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("scope");

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") || "scope";
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/about?tab=${tabId}`, { scroll: false });
  };
  return (
    <div className="pt-16">
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
              <Globe className="w-4 h-4 mr-2" />
              Vision • Mission • Organization
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              About <span className="text-blue-200">IC-AISIS 2026</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the vision, objectives, and organizing institutions
              behind the International Conference on Artificial Intelligence for
              Sustainability and Intelligent Systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <TabInterface
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabs={[
              {
                id: "scope",
                label: "Conference Scope",
                icon: <Globe className="w-4 h-4" />,
                content: (
                  <div className="space-y-8 text-justify">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="lg:w-1/2">
                        <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                          Scope of the Conference
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          The International Conference on Artificial
                          Intelligence for Sustainability and Intelligent
                          Systems (IC-AISIS&apos;26) aims to provide a global
                          interdisciplinary platform for the presentation and
                          discussion of cutting-edge research, innovations, and
                          real-world applications of Artificial Intelligence
                          (AI) in the domain of sustainability.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Scheduled for January 24, 2026, at NMAM Institute of
                          Technology, Nitte, this offline event (in-person +
                          virtual) will gather academicians, researchers,
                          industry professionals, policymakers, and students to
                          address sustainability challenges through AI-driven
                          intelligent systems.
                        </p>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Key Focus Areas
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Environmental conservation",
                              "Smart energy management",
                              "Sustainable healthcare",
                              "Ethical AI practices",
                              "Smart city infrastructure",
                              "Industrial sustainability",
                              "Integration of emerging technologies",
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Conference Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          {
                            icon: <Users className="w-6 h-6 text-blue-600" />,
                            title: "Keynote Speeches",
                            desc: "From leading experts in AI and sustainability",
                          },
                          {
                            icon: (
                              <BookOpen className="w-6 h-6 text-blue-600" />
                            ),
                            title: "Technical Sessions",
                            desc: "Presenting cutting-edge research papers",
                          },
                          {
                            icon: (
                              <Lightbulb className="w-6 h-6 text-blue-600" />
                            ),
                            title: "Panel Discussions",
                            desc: "Exploring challenges and opportunities",
                          },
                          {
                            icon: <Award className="w-6 h-6 text-blue-600" />,
                            title: "Publication Opportunities",
                            desc: "Get your research published with Hinweis Research (Scopus-indexed)",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center p-4"
                          >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                              {item.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Key areas of focus include environmental conservation,
                        smart energy management, sustainable healthcare, ethical
                        AI practices, smart city infrastructure, industrial
                        sustainability, and the integration of emerging
                        technologies like IoT, blockchain, and quantum
                        computing. The conference will feature keynote speeches,
                        technical sessions, panel discussions, poster
                        exhibitions, and student forums designed to foster
                        innovation, interdisciplinary collaboration, and thought
                        leadership.
                      </p>
                      <p>
                        Through publication opportunities with Hinweis Research (Scopus-indexed)
                        and active knowledge exchange,
                        IC-AISIS&apos;26 aspires to make a meaningful
                        contribution to global efforts in sustainable
                        development powered by artificial intelligence.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                id: "objectives",
                label: "Objectives",
                icon: <Target className="w-4 h-4" />,
                content: (
                  <div className="space-y-8 text-justify">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      Objectives of IC-AISIS&apos;26
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The International Conference on Artificial Intelligence
                      for Sustainability and Intelligent Systems
                      (IC-AISIS&apos;26) is designed to fulfill the following
                      core objectives:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Promote AI-Driven Sustainability",
                          description:
                            "To explore the transformative potential of Artificial Intelligence in addressing global sustainability challenges across sectors such as energy, healthcare, agriculture, environment, and urban development.",
                          color: "blue",
                        },
                        {
                          title: "Foster Interdisciplinary Collaboration",
                          description:
                            "To provide a platform that brings together academicians, researchers, students, industry professionals, and policymakers for knowledge exchange and collaborative innovation at the intersection of AI and sustainability.",
                          color: "green",
                        },
                        {
                          title: "Encourage Original Research and Innovation",
                          description:
                            "To facilitate the presentation and publication of cutting-edge research that advances AI applications in sustainable development and supports emerging researchers through mentorship and peer feedback.",
                          color: "purple",
                        },
                        {
                          title: "Showcase Real-World Applications",
                          description:
                            "To highlight practical implementations of AI systems that have delivered measurable outcomes in environmental conservation, resource optimization, smart infrastructure, and public health.",
                          color: "orange",
                        },
                        {
                          title: "Address Ethical and Policy Challenges",
                          description:
                            "To engage in critical discussions on responsible AI development, ethical considerations, governance frameworks, and equitable access to AI technologies in sustainability contexts.",
                          color: "red",
                        },
                        {
                          title: "Inspire and Educate the Next Generation",
                          description:
                            "To create a vibrant student forum and learning environment that encourages curiosity, creativity, and career readiness among undergraduate and postgraduate students.",
                          color: "indigo",
                        },
                        {
                          title: "Drive Policy and Industry Impact",
                          description:
                            "To develop actionable insights and recommendations that can guide industry practices and public policy toward sustainable and AI-integrated futures.",
                          color: "teal",
                        },
                      ].map((objective, index) => {
                        const colorMap: Record<string, string> = {
                          blue: "bg-blue-50 border-blue-200",
                          green: "bg-green-50 border-green-200",
                          purple: "bg-purple-50 border-purple-200",
                          orange: "bg-orange-50 border-orange-200",
                          red: "bg-red-50 border-red-200",
                          indigo: "bg-indigo-50 border-indigo-200",
                          teal: "bg-teal-50 border-teal-200",
                        };

                        return (
                          <div
                            key={index}
                            className={`card-hover rounded-xl p-6 border ${colorMap[objective.color]
                              } shadow-sm`}
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {objective.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {objective.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ),
              },
              {
                id: "theme",
                label: "Theme & SDG Focus",
                icon: <Lightbulb className="w-4 h-4" />,
                content: (
                  <div className="space-y-8 text-justify">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-2xl font-display font-bold mb-4 text-left">
                        &quot;Harnessing AI to Drive Sustainability Across
                        Industries&quot;
                      </h2>
                      <p className="text-blue-100 leading-relaxed">
                        The central theme of IC-AISIS&apos;26 underscores the
                        vital role of intelligent systems in accelerating the
                        transition to a more sustainable future.
                      </p>
                    </div>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Importance of the Theme
                        </h3>
                        <p className="mb-4">
                          As the world faces unprecedented environmental,
                          social, and economic challenges, sustainability has
                          become an urgent global priority. From climate change
                          and resource depletion to public health crises and
                          urban overpopulation, the complexity of today&apos;s
                          problems demands innovative, data-driven solutions.
                          Artificial Intelligence (AI), with its powerful
                          capabilities in data analysis, pattern recognition,
                          automation, and decision-making, holds immense
                          potential to transform how we approach sustainable
                          development.
                        </p>
                        <p className="mb-4">
                          The theme of IC-AISIS&apos;26, &quot;Harnessing AI to
                          Drive Sustainability Across Industries&quot;,
                          underscores the vital role of intelligent systems in
                          accelerating the transition to a more sustainable
                          future. Whether optimizing energy usage, enabling
                          precision agriculture, improving healthcare delivery,
                          or supporting resilient urban planning, AI
                          technologies are reshaping every sector with smarter,
                          more efficient, and environmentally conscious
                          solutions.
                        </p>
                        <p className="mb-4">
                          By bringing together experts from academia, industry,
                          government, and civil society, this conference aims to
                          explore how AI can be ethically and effectively
                          leveraged to meet the United Nations Sustainable
                          Development Goals (SDGs). The theme also emphasizes
                          responsible AI development—one that is transparent,
                          inclusive, and aligned with human values.
                        </p>
                        <p>
                          IC-AISIS&apos;26 seeks not only to advance academic
                          discourse but also to inspire real-world applications
                          and cross-sector collaboration. The event serves as a
                          launchpad for transformative ideas, impactful
                          research, and actionable strategies that address
                          pressing global needs through the power of AI.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br !text-left from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Target className="w-12 h-12 text-blue-600 mr-3" />
                        UN Sustainable Development Goals Alignment
                      </h3>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex sm:flex-row flex-col items-center">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                            PRIMARY
                          </span>
                          SDG 9: Industry, Innovation and Infrastructure
                        </h4>
                        <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                          <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-shrink-0">
                              <Image
                                src="/sdg-9-logo.png"
                                alt="SDG 9 - Industry, Innovation and Infrastructure"
                                width={80}
                                height={80}
                                className="rounded-xl shadow-sm"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 leading-relaxed">
                                IC-AISIS&apos;26 is aligned primarily with{" "}
                                <strong>SDG 9</strong>, which emphasizes
                                building resilient infrastructure, promoting
                                inclusive and sustainable industrialization, and
                                fostering innovation. The theme reflects how AI
                                technologies can drive smart transformation
                                across sectors — from manufacturing and energy
                                to healthcare and agriculture.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex sm:flex-row flex-col items-center">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                            SUPPORTING
                          </span>
                          Additional SDG Alignments
                        </h4>
                        <p className="text-gray-700 mb-6">
                          In addition to SDG 9, the conference also supports the
                          following SDGs through its various tracks:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            {
                              number: "3",
                              title: "Good Health and Well-being",
                              context: "AI in healthcare and diagnostics",
                              color:
                                "bg-green-100 text-green-600 border-green-200",
                              bgColor: "bg-green-50",
                              logo: "/sdg-3-logo.png",
                            },
                            {
                              number: "11",
                              title: "Sustainable Cities and Communities",
                              context: "AI for urban planning, smart cities",
                              color:
                                "bg-orange-100 text-orange-600 border-orange-200",
                              bgColor: "bg-orange-50",
                              logo: "/sdg-11-logo.png",
                            },
                            {
                              number: "12",
                              title: "Responsible Consumption and Production",
                              context: "AI in resource optimization",
                              color:
                                "bg-yellow-100 text-yellow-600 border-yellow-200",
                              bgColor: "bg-yellow-50",
                              logo: "/sdg-12-logo.png",
                            },
                            {
                              number: "13",
                              title: "Climate Action",
                              context: "AI for climate prediction & mitigation",
                              color:
                                "bg-green-100 text-green-600 border-green-200",
                              bgColor: "bg-green-50",
                              logo: "/sdg-13-logo.png",
                            },
                          ].map((sdg, index) => (
                            <div
                              key={index}
                              className={`${sdg.bgColor
                                } rounded-xl p-6 border ${sdg.color.split(" ")[2]
                                } shadow-sm card-hover`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <Image
                                    src={sdg.logo}
                                    alt={`SDG ${sdg.number} - ${sdg.title}`}
                                    width={48}
                                    height={48}
                                    className="rounded-lg shadow-sm"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                                    SDG {sdg.number}: {sdg.title}
                                  </h5>
                                  <p className="text-gray-600 text-sm">
                                    {sdg.context}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 shadow-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Driving Global Impact Through AI Innovation
                      </h3>
                      <p className="text-green-100 leading-relaxed">
                        Through its alignment with multiple UN Sustainable
                        Development Goals, IC-AISIS&apos;26 serves as a catalyst
                        for transformative research and innovation that
                        addresses the world&apos;s most pressing challenges. The
                        conference bridges the gap between cutting-edge AI
                        research and practical solutions for sustainable
                        development, fostering collaboration across industries,
                        academia, and policy-making bodies.
                      </p>
                    </div> */}
                  </div>
                ),
              },
              {
                id: "institutions",
                label: "Organizing Institutions",
                icon: <Building className="w-4 h-4" />,
                content: (
                  <div className="space-y-10 text-justify">
                    <div className="space-y-6">
                      <div className="flex flex-col gap-8 items-center">
                        <div className="w-full">
                          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                              width={1000}
                              height={500}
                              src="/nitte-campus.jpeg"
                              alt="Nitte University Campus"
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-full">
                          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                            Nitte (Deemed to be University)
                          </h2>
                          <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                              Nitte (Deemed-to-be University) traces its origins
                              to a group of institutions established by the
                              Nitte Education Trust, founded in 1979 by one of
                              India’s respected statesmen, Late Justice K.S.
                              Hegde—former Supreme Court Judge and Speaker of
                              the Lok Sabha. The Trust was established with the
                              mission of empowering rural youth through quality
                              education and healthcare. Over the years, it has
                              grown to encompass 36 institutions located across
                              three campuses in Nitte, Mangalore, and Bangalore,
                              offering education across a wide range of fields
                              including health professions, engineering,
                              management, humanities, general education,
                              vocational training, and school/pre-university
                              education.
                            </p>
                            <p>
                              The AB Shetty Memorial Institute of Dental
                              Sciences (ABSMIDS), which was initially affiliated
                              to Rajiv Gandhi University of Health Sciences, was
                              declared a &quot;Deemed-to-be University&quot; by
                              the Ministry of Human Resource Development on June
                              4, 2008. Following this, in 2009, the KS Hegde
                              Medical Academy (KSHEMA), Nitte Gulabi Shetty
                              Memorial Institute of Pharmaceutical Sciences
                              (NGSMIPS), Nitte Usha Institute of Nursing
                              Sciences (NUINS), and Nitte Institute of
                              Physiotherapy (NIPT) were also brought under the
                              ambit of the newly formed Deemed-to-be University.
                              In the subsequent years, Nitte Institute of
                              Communication (NICO) was established in 2012,
                              followed by the Nitte University Centre for
                              Science Education and Research (NUCSER) in 2013,
                              and the Nitte Institute of Architecture (NIA) in
                              2015. The most recent addition to the University
                              is the Nitte Institute of Speech and Hearing
                              (NISH), which was established in 2021.
                            </p>
                            <p>
                              Today, the University offers a total of 74
                              programs across various disciplines including
                              medicine, allied health sciences, dentistry,
                              pharmacy, nursing, physiotherapy, speech and
                              audiology, biological sciences, media and
                              communication, and architecture. It is home to
                              more than 4,600 students, supported by 575 faculty
                              members and 2,175 support staff. The University
                              campuses are located over 52 acres in the
                              Deralakatte-Paneer areas of Mangalore.
                            </p>
                            <p>
                              The constituent colleges of the University
                              continue to maintain strong standings within their
                              respective disciplines in the NIRF framework. In
                              2021, the dental college was ranked 6th in India,
                              while both the medical and pharmacy colleges were
                              ranked 45th. The BPharm program is accredited by
                              the NBA, and the teaching hospital is accredited
                              by both NABH and NABL
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Achievements & Recognition
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            {
                              stat: "A+",
                              label: "NAAC Grade (2021)",
                            },
                            {
                              stat: "Top 70-80",
                              label: "NIRF Rankings",
                            },
                            {
                              stat: "401-450",
                              label: "QS Asia University Rankings",
                            },
                            {
                              stat: "Diamond",
                              label: "QS I-Gauge India Rating",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg p-4 text-center shadow-sm"
                            >
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {item.stat}
                              </div>
                              <div className="text-sm text-gray-600">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        NMAM Institute of Technology (NMAMIT)
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="text-gray-700 leading-relaxed space-y-4">
                          <p>
                            Nitte Mahalinga Adyantaya Memorial Institute of
                            Technology (NMAMIT), Nitte, was established in 1986
                            and is recognized by the All India Council for
                            Technical Education (AICTE), New Delhi. Since June
                            2022, it has been a constituent college of Nitte
                            (Deemed to be University), Mangaluru.
                          </p>
                          <p>
                            In the National Institutional Ranking Framework
                            (NIRF) 2023, published by the Ministry of Education,
                            Government of India, NMAMIT was placed in the
                            101–150 rank band. The college has also been awarded
                            the &apos;Platinum&apos; category in the AICTE-CII
                            Survey of Industry-Linked Technical Institutes 2020
                            for its strong industry linkages.
                          </p>
                          <p>
                            Located at Nitte village, NMAMIT serves as an
                            off-campus centre of Nitte DU and maintains active
                            collaborations with several international
                            universities and organizations to facilitate faculty
                            and student exchanges, research activities,
                            internships, and placement opportunities.
                          </p>
                          <p>
                            NMAMIT is situated in a vibrant, serene, and green
                            campus spread over 125 acres in Nitte, nestled in
                            the Western Ghats of Southern India en route to the
                            Kudremukh ranges. The nearest airport is Mangaluru
                            International Airport, located 45 km away. The
                            closest railway stations are Udupi (40 km) and
                            Mangaluru (50 km). Nitte is 19 km from National
                            Highway 66, which connects Kochi (Kerala) and Panvel
                            (Mumbai), and 7 km from National Highway 169,
                            linking Mangaluru and Solapur (Maharashtra).
                          </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Academic Programs
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Undergraduate Engineering (15 disciplines)
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {[
                                  "AI & Machine Learning",
                                  "AI & Data Science",
                                  "Biotechnology",
                                  "Civil Engineering",
                                  "Computer & Communication",
                                  "Computer Science",
                                  "Cyber Security",
                                  "Full Stack Development",
                                  "Electrical & Electronics",
                                  "Electronics & Communication",
                                  "VLSI Design & Technology",
                                  "Information Science",
                                  "Mechanical Engineering",
                                  "Robotics & AI",
                                ].map((program, index) => (
                                  <span
                                    key={index}
                                    className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                                  >
                                    {program}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Postgraduate Programs
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {[
                                  "M.Tech. Construction Technology",
                                  "M.Tech. Computer Science",
                                  "M.Tech. Cyber Security",
                                  "M.Tech. Electric Vehicle Technology",
                                  "M.Tech. Machine Design",
                                  "M.Tech. Structural Engineering",
                                  "M.Tech. VLSI Design & Embedded Systems",
                                  "Master of Computer Applications (MCA)",
                                ].map((program, index) => (
                                  <span
                                    key={index}
                                    className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                                  >
                                    {program}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                        About the Organizing bodies
                      </h2>

                      <div className="space-y-8 text-justify">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              I
                            </span>
                            NMAMIT Student Research Forum (NSRF)
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            The NMAMIT Student Research Forum (NSRF) is a
                            student-driven initiative committed to cultivating a
                            strong research culture and academic curiosity among
                            undergraduates. NSRF envisions a dynamic platform
                            where students, faculty, and researchers collaborate
                            to explore ideas, share insights, and pursue
                            impactful research. Through paper presentations,
                            journal clubs, faculty-guided projects, research
                            workshops, and interdisciplinary dialogues, NSRF
                            encourages critical thinking and innovation in areas
                            such as Artificial Intelligence, Sustainable
                            Technologies, Biomedical Engineering, and
                            Computational Sciences. As a key academic wing
                            supporting IC-AISIS&apos;26, NSRF reflects NMAMIT&apos;s
                            mission to nurture future researchers and thought
                            leaders dedicated to scientific progress and
                            societal advancement.
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              II
                            </span>
                            The Nitte Centre for Intelligent Devices & Systems
                            (N-CIDS)
                          </h3>
                          <p className="text-gray-700 ">
                            The Nitte Centre for Intelligent Devices & Systems
                            (N-CIDS) at NMAM Institute of Technology, Nitte,
                            serves as a leading research and innovation hub
                            focused on advancing Artificial Intelligence (AI)
                            and Data Science across diverse sectors such as
                            healthcare, finance, education, manufacturing, and
                            smart cities. N-CIDS specializes in foundational AI
                            research, including deep learning, self-supervised
                            learning, reinforcement learning, and learning from
                            limited data, aiming to develop scalable, ethical,
                            and transformative AI solutions for complex global
                            challenges. The center actively bridges theoretical
                            research and practical applications by fostering
                            strategic collaborations, maintaining critical data
                            repositories, and delivering industry-aligned
                            education through workshops, online courses, and
                            specialized training programs. By driving applied
                            research and innovation, N-CIDS contributes
                            significantly to economic and social development,
                            empowering learners and addressing pressing societal
                            issues through impactful AI-driven projects.
                          </p>
                        </div>

                        {/* <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              III
                            </span>
                            The Master of Computer Applications (MCA) Department
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            The Master of Computer Applications (MCA) Department
                            at NMAM Institute of Technology (NMAMIT), Nitte,
                            offers a two-year postgraduate program established
                            in 1993 with an annual intake of 180 students.
                            Accredited by the National Board of Accreditation
                            (NBA), the department is committed to providing
                            students with a strong theoretical foundation and
                            practical skills in computer application
                            development, programming, and software engineering.
                            With a curriculum designed to meet industry demands,
                            the department emphasizes hands-on training,
                            research initiatives, and collaborations with
                            industry partners for internships and placements.
                            Supported by experienced faculty and
                            state-of-the-art infrastructure, the MCA department
                            plays a vital role in preparing students for
                            successful and dynamic careers in the IT sector.
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
};
