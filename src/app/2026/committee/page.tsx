"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Crown, UserCheck, Globe, GraduationCap } from "lucide-react";
import dynamic from "next/dynamic";

const TabInterface = dynamic(() => import("@/components/TabInterface"), {
  ssr: false,
});
const TabContent = dynamic(() => import("@/components/committee/TabContent"), {
  ssr: false,
});

export default function Committees() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("leadership");

  useEffect(() => {
    const tab = searchParams.get("tab") || "leadership";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/committee?tab=${tabId}`);
  };

  const tabs = [
    {
      id: "leadership",
      label: "Leadership & Executive",
      icon: <Crown className="w-4 h-4" />,
      content: <TabContent tabId="leadership" />,
    },
    {
      id: "chairs",
      label: "General Chairs",
      icon: <UserCheck className="w-4 h-4" />,
      content: <TabContent tabId="chairs" />,
    },
    {
      id: "technical",
      label: "Technical Committee",
      icon: <Globe className="w-4 h-4" />,
      content: <TabContent tabId="technical" />,
    },
    {
      id: "students",
      label: "Student Organisers",
      icon: <GraduationCap className="w-4 h-4" />,
      content: <TabContent tabId="students" />,
    },
  ];

  return (
    <Suspense>
      <div className="min-h-screen pt-16">
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <TabInterface
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        </section>
      </div>
    </Suspense>
  );
}
