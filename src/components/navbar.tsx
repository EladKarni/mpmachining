"use client";
import { FC, ReactNode } from "react";
import clsx from "clsx";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import MobileNavMenu from "./MobileMenu";
import { useMounted } from "@/hooks/useMounter";
import { Logo } from "@/ui/icons/logo";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  return (
    <header
      className={clsx(
        "py-6 bg-base-200 h-[96px] sticky top-0 left-0 w-full z-50 duration-200 min-w-[290px]",
        isMounted && y > 50 && "shadow-primary-900 shadow-md"
      )}
    >
      <div className="h-full flex flex-col justify-center max-w-[1024px] lg:mx-auto mx-4">
        <div className="flex justify-between items-center relative">
          <Link
            className="relative flex flex-row gap-4 items-center text-2xl font-normal text-primary-content"
            href="/"
          >
            <Logo />
            <div className="max-sm:hidden">Micro Precision Machining</div>
          </Link>
          {children}
          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
