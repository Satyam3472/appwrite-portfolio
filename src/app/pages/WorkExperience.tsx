import React from "react";
import { portfolioData } from "../portfolio-data";

const WorkExperience = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.startDate} - {exp.isPresent ? "Present" : exp.endDate}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

