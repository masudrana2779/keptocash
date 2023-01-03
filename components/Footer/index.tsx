import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <>
      <div
        className="py-12"
        style={{
          background:
            "radial-gradient(71.01% 389.29% at 83.54% 17.4%, #02282B 0%, #156469 100%) ",
        }}
      >
        <div className="">
          <div className="container mx-auto md:px-40 px-4">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mb-20">
              <div className="">
                <div className="sm:max-w-[235px]">
                  <div className="flex">
                    <Image
                      src={"/assets/images/LogoWide.png"}
                      width={266}
                      height={70}
                      alt="logo"
                    />
                  </div>
                  <div className="text-base leading-7 text-white">
                    Sample textSample textSample textSample textSample
                    textSample text
                  </div>
                </div>
              </div>
              <div className="text-white text-base md:pl-16">
                <div className="leading-6 font-semibold mb-4">Company</div>
                <ul className="leading-7">
                  <li>
                    <Link
                      href={"/about-us"}
                      className="relative before:content-[''] before:w-0 before:top-1/2 before:h-[1px] before:bg-white before:absolute transition-all before:opacity-0 hover:before:w-2 hover:pl-3 before:left-0 before:transition-all duration-300 before:duration-300 hover:before:opacity-100"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/careers"}
                      className="relative before:content-[''] before:w-0 before:top-1/2 before:h-[1px] before:bg-white before:absolute transition-all before:opacity-0 hover:before:w-2 hover:pl-3 before:left-0 before:transition-all duration-300 before:duration-300 hover:before:opacity-100"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services"}
                      className="relative before:content-[''] before:w-0 before:top-1/2 before:h-[1px] before:bg-white before:absolute transition-all before:opacity-0 hover:before:w-2 hover:pl-3 before:left-0 before:transition-all duration-300 before:duration-300 hover:before:opacity-100"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/blog"}
                      className="relative before:content-[''] before:w-0 before:top-1/2 before:h-[1px] before:bg-white before:absolute transition-all before:opacity-0 hover:before:w-2 hover:pl-3 before:left-0 before:transition-all duration-300 before:duration-300 hover:before:opacity-100"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white text-base">
                <div className="leading-6 font-semibold mb-4">Connect</div>
                <div className="leading-7">
                  <Link href="mailto:hi@finsweet.com">hi@finsweet.com</Link>
                  <br />
                  <Link href="tel:+1234567890">+(123) 456-7890</Link>
                </div>
              </div>
              <div className="text-white text-base">
                <div className="leading-6 font-semibold mb-4">
                  Join Newsletter
                </div>
                <div className="">
                  <form>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Type email here"
                        className="outline-none shadow-none h-12 px-5 rounded-full mb-3"
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="bg-brand-600 px-7 py-3 text-sm leading-5 rounded-full font-semibold text-white"
                      >
                        Send Messege
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse text-base text-white">
              <div className="w-full">
                <div className="sm:text-left text-center">
                  © All rights reserved – Kepto Cash
                </div>
              </div>
              <div className="w-full flex md:justify-end justify-center gap-x-4 md:mb-0 mb-4">
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                <Link href={"/terms-conditions"}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
