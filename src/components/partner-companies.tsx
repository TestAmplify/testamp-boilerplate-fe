import React from "react";
import Image from "next/image";

const PartnerCompanies = () => {
  const partners = [
    {
      logo: "netflix-logo.svg",
      alt: "Netflix Logo",
    },
    {
      logo: "google_logo.svg",
      alt: "Google Logo",
    },
    {
      logo: "udemy_logo.svg",
      alt: "Udemy Logo",
    },
    {
      logo: "coursera_logo.svg",
      alt: "Coursera Logo",
    },
    {
      logo: "udacity_logo.svg",
      alt: "Udacity Logo",
    },
  ];
  return (
    <section className="flex items-center justify-center my-5">
      <div>
        <h3 className="text-center my-6 font-medium text-[#2E2E2E] dark:text-white">
          Trusted by leading companies
        </h3>

        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-5  items-center gap-10">
          {partners.map((partner) => (
            <Image
              key={partner.alt}
              src={partner.logo}
              alt={partner.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanies;
