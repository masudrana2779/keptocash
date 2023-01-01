import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full py-5 z-50">
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
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/features"}>Features</Link>
                  </li>
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Contact Us</Link>
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
