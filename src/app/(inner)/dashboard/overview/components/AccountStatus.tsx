import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const AccountStatus = () => (
  <section className="px-10 py-8 border border-foundation-grey-light dark:border-gray-700 drop-shadow-sm rounded-xl text-center">
    <h3 className="font-semibold text-[22px] mb-3">
      Your account is limited!{" "}
      <Icon icon="fxemoji:lock" className="inline-block -mt-1" />
    </h3>
    <Image
      src="/account-status.jpg"
      alt="Account status video"
      width={300}
      height={300}
      className="w-full h-auto object-cover"
    />
    <p className="text-[13px] text-foundation-white-dark-active dark:text-white px-3 py-8 mt-5 mb-7 bg-foundation-grey-light dark:bg-gray-700 rounded-xl">
      Enhance your testing journey with our premium plans! Gain access to
      advanced features, expert resources, and AI-powered tools that streamline
      your workflow. Choose the plan that best supports your goals and
      accelerate your path to testing excellence with TestAmplify!
    </p>
    <Link
      href="/subscriptions"
      className="font-semibold text-sm text-foundation-grey-normal dark:text-white underline"
    >
      See our subscription plans →
    </Link>
  </section>
);
export default AccountStatus;
