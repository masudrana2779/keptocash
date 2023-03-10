import Image from "next/image";
import Slider from "react-slick";
import { BannerWrap } from "./banner.styled";

const BannerComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="Home"
        style={{
          background:
            "radial-gradient(71.01% 389.29% at 83.54% 17.4%, #02282B 0%, #156469 100%)",
        }}
        className=""
      >
        <BannerWrap className="">
          <Slider {...settings}>
            {[1, 1, 1, 1].map((item, i: number) => (
              <>
                <div className="container mx-auto md:px-40 px-4">
                  <div className="flex sm:flex-row flex-col justify-between items-center gap-x-4 pt-[120px] pb-24">
                    <div className="max-w-xs w-full">
                      <div className="text-brand-600 text-base leading-6 font-semibold md:mb-2 mb-0">
                        Cashless Payment
                      </div>
                      <div className="md:text-5xl text-2xl md:leading-[64px] font-bold text-white mb-3">
                        Easy Solution
                      </div>
                      <div className="text-base leading-7 text-white mb-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem.
                      </div>
                      <div className="text-sm leading-6 text-brand-600">
                        Learn More →
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-shrink-0">
                        <Image
                          src={"/assets/images/bannerImg.png"}
                          className={"flex-shrink-0"}
                          width={632}
                          height={509}
                          alt="bannerImg.png"
                          placeholder="blur"
                          blurDataURL="/assets/images/bannerImg.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </BannerWrap>
      </div>
    </>
  );
};

export default BannerComponent;
