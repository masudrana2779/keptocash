import Image from "next/image";

const DownloadAppComponent = () => {
  return (
    <>
      <div className="md:py-24 py-10 bg-custom_gray-50">
        <div className="container max-w-[930px] mx-auto px-4">
          <div className="flex gap-4 md:flex-row flex-col items-center justify-between">
            <div className="md:mb-0 mb-10">
              <div className="max-w-sm w-full">
                <div className="md:text-3xl text-2xl font-bold text-black md:leading-[42px]">
                  Download Kepto Cash
                </div>
                <div className="text-base font-semibold leading-7 text-black mb-4">
                  sample text lorum ipsum sample text
                </div>
                <div className="text-base leading-7 text-custom_gray-300 mb-4">
                  Download mobile app for ios & android. It helps you rating
                  quickly & smoothly
                </div>

                <div className="flex gap-x-4">
                  <button type="button">
                    <Image
                      src={"/assets/images/Frame.png"}
                      alt="Frame"
                      width={97}
                      height={32}
                    />
                  </button>
                  <button type="button">
                    <Image
                      src={"/assets/images/Frame1.png"}
                      alt="Frame"
                      width={97}
                      height={32}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="flex">
                  <Image
                    src={"/assets/images/downloadApp.png"}
                    width={319}
                    height={410}
                    alt="downloadApp.png"
                    placeholder="blur"
                    blurDataURL="/assets/images/downloadApp.png"
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

export default DownloadAppComponent;
