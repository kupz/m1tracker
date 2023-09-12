import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import analyticsImage from "../../assets/wew.svg";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center">
      <div className=" text-center flex flex-col gap-8">
        <p className="text-6xl font-medium text-white p-5">
          Take charge. Be your own money manager!
        </p>
        <p className="opacity-50 font-medium">
          In Goal Setting, be Specific | Measurable | Attainable | Realistic |
          Time-bounded .
        </p>
        <div className="flex justify-center font-medium text-white cursor-pointer">
          <div className="bg-purple-600 p-3 rounded-l-md">
            Start your journey with us
          </div>
          <div className="bg-purple-700 p-3 rounded-r-md ">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src={analyticsImage} alt="something" />
      </div>
    </div>
  );
}
