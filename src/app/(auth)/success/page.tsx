"use client";
import Link from "next/link";
import Image from "next/image";

const SuccessPage: React.FC = () => {
  return (
    <div className="flex h-screen justify-center md:justify-start">
      {/* Left side with the image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-top"
        style={{ backgroundImage: "url('/success.jpg')" }}
      ></div>

      {/* Right side with the form */}
      <div className="md:w-1/2 flex items-center justify-center relative">
        <div className="w-full max-w-[90%] p-8">
          <Image
            src={"/images/checkmark.svg"}
            width={70}
            height={50}
            alt="success"
          />
          <h1 className="text-3xl font-semibold mb-2 max-w-xs mt-4">
            Account created successfully!
          </h1>
          <p className="text-gray-700">
            Your account has successfully been created. You can now access our
            mini apps.{" "}
            <Link href={"/login"} className="font-bold text-[#142E84]">
              Login
            </Link>{" "}
          </p>

          <div className="font-bold text-[#142E84] underline mt-20 text-center absolute bottom-6 left-0 right-0">
            <Link href={"terms"}>
              <span className="mr-20"> Terms of service</span>
            </Link>
            <Link href={"terms"}>
              <span> Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
