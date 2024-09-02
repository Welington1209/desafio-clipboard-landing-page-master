import React from "react";

import Computer from "../assets/img/image-computer.png";
import Devices from "../assets/img/image-devices.png";
import BlackList from "../assets/img/icon-blacklist.svg";
import Preview from "../assets/img/icon-preview.svg";
import Text from "../assets/img/icon-text.svg";

import LogoGoogle from "../assets/img/logo-google.png";
import LogoIbm from "../assets/img/logo-ibm.png";
import LogoMicrosoft from "../assets/img/logo-microsoft.png";
import LogoHp from "../assets/img/logo-hp.png";
import LogoVector from "../assets/img/logo-vector-graphics.png";

const About = () => {
  return (
    <section className="flex flex-col items-center xl:max-w-screen-xl w-11/12">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <img src={Computer} alt="computador" className="w-4/5 md:w-3/5" />
        <ul className="h-80 md:h-96 justify-between flex flex-col">
          <li className="max-w-sm">
            <h3 className="text-gray-700 text-xl md:text-2xl font-semibold">
              Quick Search
            </h3>
            <p className="text-gray-400  text-sm  md:text-base font-semibold">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </li>
          <li className="max-w-sm">
            <h3 className="text-gray-700 text-xl md:text-2xl font-semibold">
              iCloud Sync
            </h3>
            <p className="text-gray-400  text-sm  md:text-base font-semibold">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </li>
          <li className="max-w-sm">
            <h3 className="text-gray-700 text-xl md:text-2xl font-semibold">
              Complete History
            </h3>
            <p className="text-gray-400  text-sm  md:text-base font-semibold">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full mt-24 mb-16">
        <h2 className="text-gray-700 text-4xl mb-2 font-semibold text-center">
          Access Clipboard anywhere
        </h2>
        <p className="text-gray-400 text-lg text-center m-auto max-w-screen-sm">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img
          src={Devices}
          alt="dispositivos móveis"
          className="w-4/5 md:w-2/3 mt-16 m-auto"
        />
      </div>
      <div>
        <h2 className="text-gray-700 text-4xl mb-2 font-semibold text-center">
          Supercharge your workflow
        </h2>
        <p className="text-gray-400 text-lg text-center m-auto max-w-screen-sm mb-14">
          We’ve got the tools to boost your productivity.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-12">
          <li className="flex flex-col items-center w-80 text-sm gap-5 text-center justify-center">
            <img src={BlackList} alt="icone da black list" />
            <h3 className="text-gray-700 font-semibold text-xl">
              Create blacklists
            </h3>
            <p className="text-gray-400 ">
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </li>
          <li className="flex flex-col items-center w-80 text-sm gap-5 text-center justify-center">
            <img src={Text} alt="icone do text preview" />
            <h3 className="text-gray-700 font-semibold text-xl">
              Plain text snippets
            </h3>
            <p className="text-gray-400 ">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </li>
          <li className="flex md:flex-col items-center w-80 text-sm gap-5 text-center justify-center">
            <img src={Preview} alt="icone do snippets preview" />
            <h3 className="text-gray-700 font-semibold text-xl">
              Sneak preview
            </h3>
            <p className="text-gray-400 ">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </li>
        </ul>
        <ul className="mt-24 flex flex-col md:flex-row gap-28 items-center justify-center">
          <li>
            <img src={LogoGoogle} alt="logo do google" />
          </li>
          <li>
            <img src={LogoIbm} alt="logo da ibm" />
          </li>
          <li>
            <img src={LogoMicrosoft} alt="logo da microsoft" />
          </li>
          <li>
            <img src={LogoHp} alt="logo da hp" />
          </li>
          <li>
            <img src={LogoVector} alt="logo da vector graphics" />
          </li>
        </ul>
      </div>
      <div className="my-32">
        <h2 className="text-5xl text-gray-700 m-auto font-semibold text-center max-w-screen-md">
          Clipboard for iOS and Mac OS
        </h2>
        <p className="max-w-screen-md font-semibold text-gray-400 text-center m-auto mt-8">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-screen-sm m-auto justify-center mt-8 text-gray-300">
          <button className="bg-blue-900 p-3 rounded-full hover:opacity-70 transition">
            Download for iOS
          </button>
          <button className="bg-blue-700 p-3 rounded-full hover:opacity-70 transition">
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
