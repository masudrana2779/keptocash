import Image from "next/image";

const SendMoney = () => {
  return (
    <>
      <div className="py-20">
        <div className="container max-w-[930px] mx-auto px-4">
          <div className="flex gap-x-4 items-center justify-between">
            <div className="">
              <div className="max-w-sm w-full">
                <div className="text-5xl font-bold text-brand-600 leading-[64px] mb-3">
                  Send Money
                </div>
                <div className="text-base font-semibold leading-7 text-black mb-4">
                  sample text lorum ipsum sample text sample text sample text
                </div>
                <div className="text-base leading-7 text-custom_gray-300 mb-4">
                  sample text lorum ipsum sample text lorum ipsum sample text
                  lorum ipsum sample text lorum ipsumsample text lorum ipsum
                  sample text lorum
                </div>

                <div className="">
                  <button className="text-sm py-2 px-5 rounded-lg hover:opacity-90 transition-all leading-6 text-white inline-block bg-brand-600">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="flex">
                  <Image
                    src={"/assets/images/sendMoney.png"}
                    width={562}
                    height={563}
                    alt="sendMoney.png"
                    placeholder="blur"
                    blurDataURL="/assets/images/sendMoney.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
