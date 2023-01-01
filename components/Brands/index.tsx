import Image from "next/image";

const BrandsComponent = () => {
  return (
    <>
      <div className="py-24 bg-custom_gray-50">
        <div className="container mx-auto px-4">
          <div className="text-5xl font-bold leading-[64px] mb-3 text-center">
            Brands we Serve
          </div>
          <div className="text-base leading-7 mb-4 text-center">
            10,000+ clients who are getting more replies
          </div>
          <div className="grid grid-cols-5 gap-5">
            {[1, 2, 3, 4, 5].map((item: any, i: number) => (
              <div key={i} className="flex">
                <Image
                  src={`/assets/images/blogo-${item}.png`}
                  width={222}
                  height={55}
                  alt={"blogo-1"}
                />
              </div>
            ))}
            {[1, 2, 3, 4, 5].map((item: any, i: number) => (
              <div key={i} className="flex">
                <Image
                  src={`/assets/images/blogo-${item}.png`}
                  width={222}
                  height={55}
                  alt={"blogo-1"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsComponent;
