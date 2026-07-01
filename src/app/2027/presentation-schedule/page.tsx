"use client";

import { Calendar } from "lucide-react";

export default function PresentationSchedulePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
            <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Presentation Schedule</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    The presentation schedule for IC-AISIS 2027 is currently under preparation and will be published once the paper review process is complete.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 inline-block">
                    <span className="text-blue-700 text-sm font-semibold">Coming Soon</span>
                </div>
            </div>
        </div>
    );
}
