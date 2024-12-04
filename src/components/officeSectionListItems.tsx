"use client";

import React from "react";
import Image from "next/image";

type officeSectionListProps = {
  title: string;
  description: string;
  url: string;
};

const officeSectionListItems = ({
  title,
  description,
  url,
}: officeSectionListProps) => {
  return (
    <div>
      <Image alt={title} src={url} width={20} height={20} className="mb-5" />
      <div>
        <h3>
          <span className="text-sm font-semibold">{title}: </span>
          <span className="mt-2 text-primary-300 text-sm">{description}</span>
        </h3>
      </div>
    </div>
  );
};

export default officeSectionListItems;
