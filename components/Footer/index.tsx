import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <>
      <div
        className=""
        style={{
          background:
            "radial-gradient(71.01% 389.29% at 83.54% 17.4%, #02282B 0%, #156469 100%) ",
        }}
      >
        <div className="">
          <div className="container mx-auto px-4">
            <div className="flex gap-x-4">
              <div className="">
                <div className="max-w-[235px]">
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
              <div className="text-white text-base">
                <div className="leading-6 font-semibold">Company</div>
                <ul className="leading-7">
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"/careers"}>Careers</Link>
                  </li>
                  <li>
                    <Link href={"/services"}>Services</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white text-base">
                <div className="leading-6 font-semibold">Connect</div>
                <div className="leading-7">
                  <Link href="mailto:hi@finsweet.com">hi@finsweet.com</Link>{" "}
                  <br />
                  <Link href="tel:+1234567890">+(123) 456-7890</Link>
                </div>
              </div>
              <div className="text-white text-base">
                <div className="leading-6 font-semibold">Join Newsletter</div>
                <div className="">
                  <form></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
