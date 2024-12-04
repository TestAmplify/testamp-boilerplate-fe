"use client";
import { Icon } from "@iconify/react";
import React from "react";
import ButtonBlue from "../components/ButtonBlue";
import ButtonWhite from "../components/ButtonWhite";
import { subscriptionsMock } from "@/constants/SubscriptionPlan";
import SubscriptionCard from "./components/SubscriptionCard";
// import { $http } from "@/lib/http";
// import { useQuery } from "@tanstack/react-query";

// const getSubscriptions = async () => {
//   const response = await $http.get(
//     "https://testamp-boilerplate-be.onrender.com/subscriptions"
//   );
//   return response.data;
// };

const Subscriptions = () => {
  // const {
  //   data: subscription,
  //   error,
  //   isLoading,
  // } = useQuery({ queryKey: ["subscriptions"], queryFn: getSubscriptions });

  return (
    <section className="md:px-10 px-5 py-6">
      {" "}
      <div>
        <section className="text-foundation-grey-normal dark:text-white">
          <h2 className="font-semibold text-[32px]">Subscription</h2>
          <p className="flex items-center gap-2 px-5 py-3 my-6 font-semibold rounded-[6px]  bg-[#f7f7f7] dark:bg-gray-800 border border-foundation-grey-newLight dark:border-gray-700 drop-shadow-sm dark:drop-shadow-lg">
            <Icon
              icon="heroicons:exclamation-circle"
              className="w-6 h-6 shrink-0"
            />
            By default, you’re currently on the basic plan. You can upgrade your
            account and get access to more features.
          </p>
        </section>
        <section className="flex flex-col items-center text-center py-6">
          <h3 className="font-semibold text-4xl ext-foundation-grey-normal dark:text-white">
            {" "}
            Simple and transparent pricing
          </h3>
          <p className="text-lg text-foundation-white-dark-active dark:text-white py-3">
            Try any plan free for 30 days.
          </p>
          <div className="flex justify-center gap-4 w-full my-4">
            {" "}
            <ButtonBlue type="button">Monthly</ButtonBlue>
            <ButtonWhite type="button">Quarterly</ButtonWhite>
          </div>
        </section>
        <section className="mt-1">
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg:grid-cols-3 gap-12">
            {subscriptionsMock.map((subscription) => (
              <SubscriptionCard key={subscription.id} {...subscription} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Subscriptions;
