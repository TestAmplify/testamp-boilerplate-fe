"use client";
import React from "react";
import Image from "next/image";
import aiTips from "@/constants/aiSectionLabels";
import { CircleCheck } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const AiLearningSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="container grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-medium md:max-w-sm text-primary-100 dark:text-white">
          AI-Assisted Learning Tailored to Your Growth
        </h2>
        <p className="md:max-w-sm mt-5 mb-[1.5rem] text-primary-300 text-sm dark:text-[#8C8C8C]">
          Adjustments are made to your path, ensuring you&apos;re challenged
          just the right amount at every stage.
        </p>
        {aiTips.map((tip) => (
          <div
            key={tip}
            className="flex items-center gap-3 my-3 text-[0.95rem]"
          >
            {theme === "dark" ? (
              <CircleCheck size={20} width={20} color="white" />
            ) : (
              <CircleCheck size={20} width={20} color="black" />
            )}
            <span>{tip}</span>
          </div>
        ))}
      </div>
      <div className="relative">
        <Image
          src="/aiSection-Image.jpg"
          width={968}
          height={529}
          alt="learning"
          priority
        />
      </div>
    </div>
  );
};

export default AiLearningSection;
