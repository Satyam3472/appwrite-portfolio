"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "../portfolio-data";
import { LayoutTextFlip } from "../components/ui/layout-text-flip";
import { ProfileImage } from "../components/ui/profile-image";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { PdfViewerModal } from "../components/ui/pdf-viewer-modal";
import { Mail, MapPinHouse } from "lucide-react";

const HomeSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Theme Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black dark:text-white">
                {personalInfo.firstName || personalInfo.name.split(" ")[0]}{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {personalInfo.lastName ||
                    personalInfo.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              {personalInfo.headlineStaticText &&
              personalInfo.headlineAnimatedWords &&
              personalInfo.headlineAnimatedWords.length > 0 ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <LayoutTextFlip
                    text={personalInfo.headlineStaticText}
                    words={personalInfo.headlineAnimatedWords}
                    duration={personalInfo.headlineAnimationDuration || 3000}
                  />
                </div>
              ) : (
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                  {personalInfo.headline || personalInfo.title}
                </p>
              )}

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.shortBio || personalInfo.objective}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                {personalInfo.github && (
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm md:text-base text-gray-700 dark:text-gray-300"
                  >
                    GitHub
                  </Link>
                )}
                {personalInfo.linkedin && (
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm md:text-base text-gray-700 dark:text-gray-300"
                  >
                    LinkedIn
                  </Link>
                )}
                {personalInfo.website && (
                  <PdfViewerModal
                    pdfUrl="/Kumar_Satyam_Nov_New.pdf"
                    fileName="Kumar_Satyam_Resume.pdf"
                    triggerText="View Resume"
                    triggerClassName="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  />
                )}
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 md:gap-6 pt-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-2">
                    <MapPinHouse className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.availability && (
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span>{personalInfo.availability}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <ProfileImage
                imageUrl="/portfolioImage.jpg"
                firstName={personalInfo.firstName || personalInfo.name.split(" ")[0]}
                lastName={
                  personalInfo.lastName ||
                  personalInfo.name.split(" ").slice(1).join(" ")
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
