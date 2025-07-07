import React from "react";
import Navbar from "@/components/Navbar";
import UploadWidget from "@/components/UploadWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Detect Deepfakes with Confidence
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Upload your media and our advanced AI technology will analyze it,
              providing you with a detailed authenticity score.
            </p>
          </div>

          {/* Upload Widget */}
          <div className="mt-8">
            <UploadWidget />
          </div>

          {/* Features Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Analysis",
                description:
                  "Get authenticity results in seconds with our optimized AI detection system",
                icon: "⚡",
              },
              {
                title: "High Accuracy",
                description:
                  "State-of-the-art AI models ensure reliable deepfake detection",
                icon: "🎯",
              },
              {
                title: "Multiple Formats",
                description:
                  "Support for images, videos, and audio content analysis",
                icon: "📊",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
