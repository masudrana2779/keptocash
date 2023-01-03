import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full md:py-5 py-2 z-50 transition-all duration-300 ${
          scroll ? "shadow-lg" : ""
        }`}
        style={{
          background: `${
            scroll
              ? "radial-gradient(71.01% 389.29% at 83.54% 17.4%, #02282B 0%, #156469 100%)"
              : "transparent"
          }`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex gap-x-4 justify-between">
            <div className="">
              <Link href={"/"}>
                <div className="flex">
                  <Image
                    src={"/assets/images/Logo.png"}
                    width={201}
                    height={47}
                    alt={"Logo"}
                  />
                </div>
              </Link>
            </div>
            <input type="checkbox" className="peer hidden" />
            <div className="md:hidden flex items-center text-white text-2xl">
              <HiBars3 />
            </div>
            <div className="w-full md:flex block items-center md:static fixed transition-all duration-300 -left-[100%] top-20 md:pl-0 pl-12">
              <div className="w-full md:justify-center justify-start mr-auto text-white flex">
                <ul className="md:flex block gap-x-10 leading-loose">
                  <li>
                    <Link href={"#Home"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"#OurFeatures"}>Features</Link>
                  </li>
                  <li>
                    <Link href={"#AboutUs"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"#ContactUs"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="w-56 md:justify-center justify-start text-white flex">
                <ul className="md:flex block gap-x-10 leading-loose">
                  <li>
                    <Link href={"/signup"} className="text-brand-600">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <span className="cursor-pointer">English</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
