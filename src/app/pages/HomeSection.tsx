"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "../portfolio-data";
import { LayoutTextFlip } from "../components/ui/layout-text-flip";
import { HeroGallery } from "../components/ui/HeroGallery";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { PdfViewerModal } from "../components/ui/pdf-viewer-modal";
import { Mail, MapPinHouse } from "lucide-react";

const HomeSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 py-6 md:py-28 overflow-hidden"
      >
        {/* Theme Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-left order-2 lg:order-1">
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

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
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
            {/* Hero Gallery */}
            <div className="flex justify-center lg:justify-end w-full order-1 lg:order-2">
              <HeroGallery
                images={[
                  "https://scontent.cdninstagram.com/v/t51.75761-15/465070063_18380652982096937_3937721859872251827_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=108&ig_cache_key=MzQ5MDA1OTIyNzcyODA3MzM1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=sj7K1gtqreEQ7kNvwGu0czk&_nc_oc=AdnyMIl5GiYByMFjg2LLqiBdVq_nO-vH-g3DNKvrkOozrqahqDa_8AJzINzNh2kx6RSoaMbDN92tfObtEKGMJnsu&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=rDRuD1zl94unrKMZY7EP9A&oh=00_AflYqVUUpl0eIhc5gdMrh-t1HIxK4wzfPYktXexivzWFZA&oe=6949FA00",
                  "https://scontent.cdninstagram.com/v/t51.82787-15/544066643_18427122718096937_1832855094490392088_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=MzcxNzgyMTUyOTI4MDU2MjQ4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9rknb4OhId8Q7kNvwGN56da&_nc_oc=AdlMf-GFs6P5h9979TncizCha8Q-pOG66-IE8bYKpaR_I5eInQ8vQ-G4eNk0AAooegleOtGQVeRbV5Ctz9Zq-1N_&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=BcMQ3nVwz9A3md5blq_NhQ&oh=00_AfltLb_KF_cuhlpOudDXzVKek5iBTfCwoqQsfjxewJMavQ&oe=6949FC52",
                  "https://scontent.cdninstagram.com/v/t39.30808-6/473056250_18391373134096937_4712661888456348713_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=107&ig_cache_key=MzQ0MDAwOTI1MDkyODUxOTg2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=phAhT20uvncQ7kNvwHBLiS5&_nc_oc=AdlNzLwG3Vt9jNztuRipXzDkILPbH-2ELke2oJQIQlE2UD8liukWCrPOGpUjY56O9RLX2wTRT55eJH9tRBUDYIoA&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=P6JqPblZgsM45hDzoTGfBA&oh=00_AflulynluiL1l20sZ2NdckcWc7I0gqa5ytTpWlKzv4Xy9A&oe=694A0D2E",
                  "https://scontent.cdninstagram.com/v/t51.75761-15/503032151_18413034904096937_910386325111518899_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=105&ig_cache_key=MzY0NDM3ODY3MjAxODIwMzcxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=y7ycBkaBKQMQ7kNvwHKtKjD&_nc_oc=AdlrousmpwDE14eyf5xNf0iW7n5C368h60ydJPBvAkpXwwRktdgoCt2R6Cp1z4IwfCVaRXZwbijc83FXwppf5bgw&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=BcMQ3nVwz9A3md5blq_NhQ&oh=00_Afmx2HPg5J7t-_wgUr5pgZCjpIN89xodISoz6CxdMEd87A&oe=6949E511",
                  "https://scontent.cdninstagram.com/v/t51.75761-15/472025717_18392679181096937_8351100892601999840_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzU0NzM2MjkwMjM3ODE4MzYyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=o99M5eo6RBUQ7kNvwFzJ39b&_nc_oc=Admt5t-1ZkINwPzRvtBw9SuRQn2G-uap5FxSV8mJzPJHwYNSgnNL1SL3CLOkR6u7XBSn_XAUCzTZbXRZw1NV1Trq&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=R5ATT4_CbFCsD0tkKx9v6w&oh=00_AfmCxB41fXxE6i2xzBHcLC2QySPZjuksq9rcg_uxUyro0g&oe=6949E3BE",
                  "/portfolioImage.jpg",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
