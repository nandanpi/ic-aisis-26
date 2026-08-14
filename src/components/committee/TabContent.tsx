"use client";

import Image from "next/image";
import {
  Users,
  Award,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import * as committee2027 from "@/lib/commiitee";
import * as committee2026 from "@/lib/commiitee2026";

import { usePathname } from "next/navigation";

interface TabContentProps {
  tabId: string;
}

interface CommitteeMember {
  name: string;
  title: string;
  image?: string;
  position?: string;
}

export default function TabContent({ tabId }: TabContentProps) {
  const pathname = usePathname() || "";
  const is2026 = pathname.includes("/2026");

  const committee = (is2026 ? committee2026 : committee2027) as Record<
    string,
    CommitteeMember[] | CommitteeMember
  >;
  const {
    patron,
    studentOrganizers = [],
    executiveCommittee = [],
    honoraryChairs = [],
    generalChairs = [],
    generalCoChairs = [],
    technicalProgramCoChairs = [],
    publicationChairs = [],
    financeChairs = [],
    steeringCommittee = [],
    technicalCommittee = [],
  } = committee as {
    patron?: CommitteeMember | CommitteeMember[];
    studentOrganizers?: CommitteeMember[];
    executiveCommittee?: CommitteeMember[];
    honoraryChairs?: CommitteeMember[];
    generalChairs?: CommitteeMember[];
    generalCoChairs?: CommitteeMember[];
    technicalProgramCoChairs?: CommitteeMember[];
    publicationChairs?: CommitteeMember[];
    financeChairs?: CommitteeMember[];
    steeringCommittee?: CommitteeMember[];
    technicalCommittee?: CommitteeMember[];
  };

  const patronsList: CommitteeMember[] = Array.isArray(patron)
    ? patron
    : patron
    ? [patron]
    : [];

  switch (tabId) {
    case "leadership":
      return (
        <div className="space-y-16">
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                {patronsList.length > 1 ? "Patrons" : "Patron"}
              </h3>
              <p className="text-gray-600">
                Guiding vision and leadership for the conference
              </p>
            </div>

            <div
              className={`grid grid-cols-1 ${
                patronsList.length > 1 ? "md:grid-cols-2 max-w-4xl" : "max-w-2xl"
              } gap-8 mx-auto`}
            >
              {patronsList.map((p: CommitteeMember, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <Image
                      width={100}
                      height={100}
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                    />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {p.name}
                    </h4>
                    <p className="text-purple-700 font-medium leading-relaxed max-w-2xl">
                      {p.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Steering Committee
              </h3>
              <p className="text-gray-600">
                Strategic oversight and governance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steeringCommittee.map((member: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                    />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Executive Committee
              </h3>
              <p className="text-gray-600">
                Program execution and operational oversight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveCommittee.map((member: CommitteeMember, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
                >
                  <Image
                    width={100}
                    height={100}
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "chairs":
      return (
        <div className="space-y-16">
          {/* Honorary Chair */}
          {honoraryChairs.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Honorary Chair
                </h3>
                <p className="text-gray-600">
                  Distinguished international leadership and advice
                </p>
              </div>

              <div className="flex justify-center">
                {honoraryChairs.map((chair: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-shadow text-center max-w-xl w-full"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={chair.image || "/placeholder.svg"}
                      alt={chair.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-md"
                    />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {chair.name}
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {chair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Chair */}
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                General Chair
              </h3>
              <p className="text-gray-600">
                Conference leadership and overall direction
              </p>
            </div>

            <div className="flex justify-center">
              {generalChairs.map((chair: CommitteeMember, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center max-w-xl w-full"
                >
                  <Image
                    width={100}
                    height={100}
                    src={chair.image || "/placeholder.svg"}
                    alt={chair.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100 shadow-md"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {chair.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{chair.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* General Co-Chairs */}
          {generalCoChairs.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  General Co-Chairs
                </h3>
                <p className="text-gray-600">
                  Conference co-leadership and operational coordination
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {generalCoChairs.map((chair: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={chair.image || "/placeholder.svg"}
                      alt={chair.name}
                      className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100 shadow-sm"
                    />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {chair.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {chair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Program Co-Chairs */}
          {technicalProgramCoChairs.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Technical Program Co-Chairs
                </h3>
                <p className="text-gray-600">
                  Technical program oversight and paper selection
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {technicalProgramCoChairs.map((chair: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-blue-50/60 rounded-2xl p-6 border border-blue-100 shadow-sm text-center"
                  >
                    {chair.image && (
                      <Image
                        width={90}
                        height={90}
                        src={chair.image}
                        alt={chair.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-blue-200 shadow-xs"
                      />
                    )}
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {chair.name}
                    </h4>
                    <p className="text-blue-700 text-sm font-medium">
                      {chair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publication Chairs */}
          {publicationChairs.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Publication Chairs
                </h3>
                <p className="text-gray-600">
                  Proceedings publication management and publisher liaison
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {publicationChairs.map((chair: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-purple-50/60 rounded-2xl p-6 border border-purple-100 shadow-sm text-center"
                  >
                    {chair.image && (
                      <Image
                        width={90}
                        height={90}
                        src={chair.image}
                        alt={chair.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-purple-200 shadow-xs"
                      />
                    )}
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {chair.name}
                    </h4>
                    <p className="text-purple-700 text-sm font-medium">
                      {chair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Finance Chair */}
          {financeChairs.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Finance Chair
                </h3>
                <p className="text-gray-600">
                  Financial management and budget oversight
                </p>
              </div>

              <div className="flex justify-center">
                {financeChairs.map((chair: CommitteeMember, index: number) => (
                  <div
                    key={index}
                    className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-100 shadow-sm text-center max-w-md w-full"
                  >
                    {chair.image && (
                      <Image
                        width={90}
                        height={90}
                        src={chair.image}
                        alt={chair.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-emerald-200 shadow-xs"
                      />
                    )}
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {chair.name}
                    </h4>
                    <p className="text-emerald-700 text-sm font-medium">
                      {chair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );

    case "technical":
      if (technicalCommittee.length === 0) {
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Technical Committee
              </h3>
              <p className="text-gray-600">
                Expert reviewers and technical program oversight
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-md mx-auto text-center shadow-md">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-700 font-semibold mb-2">Committee Members Coming Soon</p>
              <p className="text-gray-500 text-sm">
                The technical program committee details are currently being finalized and will be updated shortly.
              </p>
            </div>
          </div>
        );
      }
      return (
        <div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Technical Committee
            </h3>
            <p className="text-gray-600">
              Expert reviewers and technical program oversight
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalCommittee.map((member: CommitteeMember, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "students":
      if (!is2026) {
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Student Organizing Committee
              </h3>
              <p className="text-gray-600">Student leadership and support</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-md mx-auto text-center shadow-md">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-700 font-semibold mb-2">Committee Members Coming Soon</p>
              <p className="text-gray-500 text-sm">
                The student organizers details are currently being finalized and will be updated shortly.
              </p>
            </div>
          </div>
        );
      }
      return (
        <div>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Student Organizing Committee
            </h3>
            <p className="text-gray-600">Student leadership and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentOrganizers.map((student: CommitteeMember, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow text-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                />
                <h4 className="text-lg font-bold text-gray-900 ">
                  {student.name}
                </h4>
                {student.position && (
                  <p className="text-gray-500 font-medium">
                    {student.position}
                  </p>
                )}
                <p className="text-indigo-600 font-medium">{student.title}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
