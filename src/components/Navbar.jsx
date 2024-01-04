import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full mx-auto bg-transparent md:mt-6">
      <nav className="w-full flex justify-between items-centre mx-auto max-w-[1080px] py-4 px-4 md:px-0">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:mx-auto">
          <img src={Logo} alt="Logo" />
          <div
            className="cursor-pointer md:hidden flex"
            onClick={() => setNav(!nav)}
          >
            {!nav ? (
              <img src={hamburger} alt="hamburger menu" />
            ) : (
              <img src={close} alt="close" />
            )}
          </div>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex justify-between gap-6 text-[14px] text-[var(--V-Dark-Blue)] uppercase font-headings items-center font-semibold">
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-8">
                Pricing
              </a>
            </li>
            <li>
              <div className="w-[5px] h-[5px] rounded-full bg-[var(--D-Grayish-Blue)]"></div>
            </li>
            <li className="text-[var(--D-Grayish-Blue)]">
              <a href="#" className="hover:underline underline-offset-8">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* drawer menu */}
        <div
          className={`fixed left-[20%] w-[250px] h-[275px] z-10 duration-500 flex items-center justify-center bg-white ease-in-out shadow-xl rounded-md ${
            nav ? "top-[80px]" : "top-[-100%]"
          }`}
        >
          <div className="py-4 px-6 w-full">
            <ul className="flex flex-col justify-between gap-6 text-[18px] uppercase font-headings font-semibold items-center w-full text-[var(--V-Dark-Blue)]">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Pricing
                </a>
              </li>
              <li>
                <div className="w-[150px] h-[1px] bg-[var(--D-Grayish-Blue)]"></div>
              </li>
              <li className="text-[var(--D-Grayish-Blue)]">
                <a href="#" className="hover:underline underline-offset-8">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
