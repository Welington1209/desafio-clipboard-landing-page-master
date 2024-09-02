import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-lg px-4">
      <h1 className="text-5xl text-gray-700 m-auto font-semibold text-center max-w-screen-md">
        A history of everything you copy
      </h1>
      <p className="max-w-screen-md font-semibold text-gray-400 text-center m-auto mt-8">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex flex-col md:flex-row gap-8 max-w-screen-sm m-auto justify-center mt-8 text-gray-300">
        <button className="bg-blue-900 p-3 rounded-full hover:opacity-70 transition">
          Download for iOS
        </button>
        <button className="bg-blue-700 p-3 rounded-full hover:opacity-70 transition">
          Download for Mac
        </button>
      </div>
      <h2 className="text-3xl mt-8 text-gray-700 m-auto font-semibold text-center max-w-screen-md">
        Keep track of your snippets
      </h2>
      <p className="max-w-screen-md font-semibold text-gray-400 text-center m-auto mt-8">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
    </div>
  );
};

export default Home;
