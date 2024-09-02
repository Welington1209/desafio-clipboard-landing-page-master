import Logo from "../assets/img/logo.svg";
import LogoFb from "../assets/img/icon-facebook.svg";
import LogoTwitter from "../assets/img/icon-twitter.svg";
import LogoInsta from "../assets/img/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between max-w-7xl items-center m-auto p-10 mt-16 md:mt-8">
      <img src={Logo} alt="logo do site" className="size-12 mb-10 md:mb-0" />
      <ul className="h-full md:h-16 gap-4 flex mb-10 text-center md:text-left flex-col flex-wrap">
        <li className="text-gray-500 font-bold">
          <a className="px-5 py-2" href="">
            FAQs
          </a>
        </li>
        <li className="text-gray-500 font-bold">
          <a className="px-5 py-2" href="">
            Contact Us
          </a>
        </li>
        <li className="text-gray-500 font-bold">
          <a className="px-5 py-2" href="">
            Privacy Policy
          </a>
        </li>
        <li className="text-gray-500 font-bold">
          <a className="px-5 py-2" href="">
            Press Kit
          </a>
        </li>
        <li className="text-gray-500 font-bold">
          <a className="px-5 py-2" href="">
            Install Guide
          </a>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <a href="">
            <img src={LogoFb} alt="logo do facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={LogoTwitter} alt="logo do twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={LogoInsta} alt="logo do instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
