import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      {/* <div className={scroll ? "dp-none" : ""}></div> */}
      <div
        className={`fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300 `}
        style={{
          background: `${
            scroll
              ? "radial-gradient(71.01% 389.29% at 83.54% 17.4%, #02282B 0%, #156469 100%)"
              : "transparent"
          }`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex gap-x-4">
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
            <div className="w-full flex items-center">
              <div className="w-full justify-center mr-auto text-white flex">
                <ul className="flex gap-x-10">
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
              <div className="w-56 justify-center text-white flex">
                <ul className="flex gap-x-10">
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
