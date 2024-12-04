import Link from "next/link";
const LearningPath = () => {
  return (
    <section className="dark:text-white h-full w-full flex flex-col  ">
      <h1 className="font-semibold text-3xl pl-5 py-6">Learning Path</h1>
      <div className="mx-auto mt-[3rem] h-[35rem] max-w-[95%] md:max-w-[80%] lg:max-w-[60%] w-full justify-center flex px-2 text-center">
        <div className="w-[25rem] h-[25.5rem] flex flex-col gap-10 items-center text-center">
          <div className="bg-[url(/images/learning-path/learn_1.png)] h-[60%] w-full bg-cover bg-center bg-no-repeat"></div>

          <h3 className="text-base">
            You have not begun using our learning management system yet.
          </h3>

          <Link href={"/lms/get-started"}>
            <button className="w-[14rem] h-[4rem] border-[1px] border-[#E6E6E6] rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
