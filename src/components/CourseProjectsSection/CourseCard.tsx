import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
// import { CardProps } from "@/types";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
}: CourseCardProps) => {
  return (
    <Card className="w-full border border-[#ebebeb]/60 rounded-3xl p-3 cursor-pointer hover:shadow-lg">
      <Image src={image} alt={title} width={300} height={300} />

      <CardTitle className="text-left mt-5 text-xl mb-2">{title}</CardTitle>
      <CardDescription className="text-left mb-4">
        {description}
      </CardDescription>
    </Card>
  );
};

export default CourseCard;
