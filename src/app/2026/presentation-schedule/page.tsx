"use client";

import { useEffect } from "react";

export default function PresentationSchedulePage() {
    useEffect(() => {
        // Redirect to the Google Docs PDF export URL
        window.location.href = "https://docs.google.com/document/d/1lV8SbSj5a6jP94OIQOtXA3eA0yMFt3bKzyRD9aav68o/export?format=pdf";
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <h1 className="text-2xl font-semibold text-gray-800">Downloading Presentation Schedule...</h1>
                <p className="text-gray-600 mt-2">Your download will begin shortly.</p>
            </div>
        </div>
    );
}
