import { colorClasses } from "@/lib/colorClasses";
import {
  Leaf,
  Building,
  Zap,
  Globe,
  ChevronRight,
  Bot,
  Brain,
} from "lucide-react";

export default function Topics() {
  const topicCategories = [
    {
      id: "infra",
      icon: <Building className="w-6 h-6" />,
      title: "Intelligent Infrastructure and Interactive Technologies",
      focus:
        "Smart systems enabling future infrastructure, with strong links to cyber-physical integration and sensing.",
      color: "blue",
      items: [
        "Visual Computing and Augmented/Virtual Environments",
        "Vehicular and Mobile Networked Systems",
        "Sensors and Intelligent Actuation",
        "Human-Computer Interaction and Adaptive Interfaces",
        "Conversational AI and Speech Processing Systems",
        "Urban Infrastructure and Smart Governance Platforms",
        "Cyber-Physical Systems for Built Environments",
        "App Ecosystems and AI-Enabled User Platforms",
        "Business Intelligence and Sentiment-Aware Applications",
      ],
    },
    {
      id: "cognitive",
      icon: <Bot className="w-6 h-6" />,
      title: "Cognitive Computing and Autonomous Systems",
      focus:
        "AI/ML-powered intelligent systems with physics- and signal-processing-aligned applications.",
      color: "red",
      items: [
        "Artificial Intelligence and Deep Learning Architectures",
        "Machine Learning for Physical and Sensor Data",
        "Internet of Things and Embedded Intelligence",
        "Pattern Recognition and Perceptual Systems",
        "Wearable and Assistive Technologies",
        "Neural and Knowledge-Based Systems",
        "Smart Grids and Autonomous Control Systems",
        "Wireless Communication and Optical Networking",
        "Biomedical Signal Processing and Predictive Analytics",
      ],
    },
    {
      id: "sustainable",
      icon: <Zap className="w-6 h-6" />,
      title: "Sustainable and High-Performance Computing",
      focus:
        "Energy-efficient and sustainable computing systems, modeling, and optimization for large-scale infrastructure.",
      color: "yellow",
      items: [
        "Green and Energy-Aware Computing Architectures",
        "Reconfigurable and Resilient Systems",
        "High-Performance and Scalable Computing",
        "Big Data Analytics for Environmental Monitoring",
        "Urban Simulation and Modeling of Complex Systems",
        "Blockchain for Decentralized Smart Infrastructure",
        "Optimization Techniques for Sustainable Informatics",
        "AI for Resource Allocation and Energy Forecasting",
        "Disaster Modeling and Smart Response Systems",
      ],
    },
    {
      id: "vlsi",
      icon: <Brain className="w-6 h-6" />,
      title: "Embedded Intelligence and VLSI Design",
      focus:
        "Microelectronics, hardware-software co-design, and embedded systems with real-world applications.",
      color: "purple",
      items: [
        "Embedded Architectures and Real-Time Operating Systems",
        "Microcontroller Systems in Industrial and Medical Domains",
        "On-Device Machine Learning and TinyML",
        "Embedded Cybersecurity and Cryptographic Hardware",
        "System-on-Chip (SoC) and Semiconductor Devices",
        "Bio-Inspired Electronics and Smart Wearables",
        "Drone Systems and Unmanned Embedded Platforms",
        "Edge AI for Industrial Automation",
        "From Industry 4.0 to Industry 5.0 Transitions",
      ],
    },
    {
      id: "emerging",
      icon: <Leaf className="w-6 h-6" />,
      title: "AI-Driven Materials and Sustainable Nanotechnologies",
      focus:
        "Use of AI/ML and simulation in advanced materials discovery, optimization, and sustainable material systems.",
      color: "green",
      items: [
        "AI for Materials Design, Discovery, and Prediction",
        "Smart and Functional Materials for Energy and Sensing",
        "Nanomaterials and Nanostructured Composites",
        "Thin Films, Coatings, and 2D Materials",
        "Computational Materials Science and Molecular Modeling",
        "Materials for Flexible and Wearable Electronics",
        "Green and Biodegradable Material Systems",
        "AI for Characterization Techniques (XRD, SEM, AFM, etc.)",
        "Photonic, Magnetic, and Quantum Materials",
        "AI-Driven Materials for Solar Cells, Fuel Cells, and Batteries",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden px-5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
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
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
              <Leaf className="w-4 h-4 mr-2" />7 Research Tracks • 40+ Subtopics
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Topics of <span className="text-blue-200">Interest</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Topics are not limited to those listed; other relevant
              contributions aligned with the conference theme are also welcome.
            </p>

            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
              <a
                href="/submission-guidelines"
                className="bg-white w-fit text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:outline outline-white hover:text-white transition-colors inline-flex items-center"
              >
                Submission Guidelines
              </a>
              <a
                href="https://cmt3.research.microsoft.com/icaisis2025/Track/1/Submission/Create"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 outline-white outline w-fit text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                Paper Submission
              </a>
            </div>

            <p className="text-xl text-blue-100 mt-12 max-w-3xl mx-auto leading-relaxed">
              A <strong>Best Paper Award</strong> will be presented for each
              Track, and certificates will be issued to all authors of the
              awarded papers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Research Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive research tracks covering the
              intersection of AI and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicCategories.map((category) => {
              const colors =
                colorClasses[category.color as keyof typeof colorClasses];

              return (
                <div
                  key={category.id}
                  className=" rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  <div
                    className={`bg-gradient-to-br ${colors.gradient} p-6 h-56 md:h-48 flex flex-col gap-4 items-start`}
                  >
                    <div className="flex items-start w-full">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center shadow-sm mr-4 flex-shrink-0`}
                      >
                        {category.icon}
                      </div>
                      <div className="min-w-0 self-center">
                        <h3 className={`text-lg font-bold ${colors.title} `}>
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <p className={`${colors.title}`}>{category.focus}</p>
                  </div>

                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-2 h-2 ${colors.light} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-100 h-16 flex items-center">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-500">
                          {category.items.length} research areas
                        </span>
                        <div
                          className={`px-3 py-1 ${colors.bg} ${colors.title} text-xs font-medium rounded-full`}
                        >
                          Track {topicCategories.indexOf(category) + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Open to Innovation
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                While we&apos;ve outlined key research tracks, we welcome
                submissions on any relevant topic that aligns with our
                conference theme of &quot;Harnessing AI to Drive Sustainability
                Across Industries.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/submission-guidelines"
                  className="inline-flex items-center"
                >
                  View Submission Guidelines
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
                <a href="/contact" className="inline-flex items-center">
                  Contact for Clarifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
