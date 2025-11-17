"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../portfolio-data";
import {
  Code,
  Database,
  Wrench,
  Sparkles,
  Palette,
  Server,
  Box,
  Zap,
} from "lucide-react";

const SkillSection = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Front-End Skills",
      skills: skills.frontEnd,
      icon: Palette,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-200",
      borderColor: "border-blue-300 dark:border-blue-700",
    },
    {
      title: "Back-End Skills",
      skills: skills.backEnd,
      icon: Server,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-800 dark:text-green-200",
      borderColor: "border-green-300 dark:border-green-700",
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: skills.toolsFrameworks,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-800 dark:text-purple-200",
      borderColor: "border-purple-300 dark:border-purple-700",
    },
    {
      title: "Other Technical Skills",
      icon: Sparkles,
      skills: skills.other,
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-800 dark:text-orange-200",
      borderColor: "border-orange-300 dark:border-orange-700",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 ${category.bgColor} ${category.textColor} rounded-full text-sm font-semibold border ${category.borderColor} cursor-default hover:shadow-md transition-all`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Expertise
              </h3>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proficient in modern web technologies, cloud platforms, and
              development tools. Experienced in building scalable applications
              with a focus on performance, security, and user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
