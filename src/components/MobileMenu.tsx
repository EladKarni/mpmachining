import { useState } from "react";
import { navLinkList } from "@/constants/navLinks";

const MobileNavMenu = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="align-middle"
        onClick={() => setIsOpenMobileMenu(true)}
        aria-label="Hambuger Nav Menu"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_67_34)">
            <path
              d="M5 6h14M5 12h14M5 18h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_67_34">
              <rect width={24} height={24} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div
        onClick={() => setIsOpenMobileMenu(false)}
        id="mobileMenuOverlay"
        className={`fixed top-0 right-0 w-full h-[100dvh] bg-base-300 bg-opacity-50 z-[9999999] duration-100 ${
          isOpenMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        <div
          className={`w-[80%] sm:w-[300px] justify-between pt-4 pb-4 bg-base-100 h-full duration-300 flex flex-col float-right	${
            isOpenMobileMenu ? "translate-x-0 delay-200" : "translate-x-full"
          }`}
        >
          <div className="text-end mr-2 pr-2" id="mobileMenuX">
            <span
              className="p-8 mt-[-16px] float-right max-w-[20px] text-primary-content cursor-pointer"
              onClick={() => setIsOpenMobileMenu(false)}
            >
              X
            </span>
          </div>
          <ul className="text-center text-off-white h-full">
            {navLinkList.map((navLink) => (
              <li key={navLink.label}>
                <a
                  onClick={() => setIsOpenMobileMenu(false)}
                  className="block px-5 py-3.5 text-primary-content hover:text-heading"
                  href={navLink.url}
                >
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
