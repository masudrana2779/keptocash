import { BsCoin } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const BenifitsCompotent = () => {
  const data = [
    {
      icon: <CiWallet />,
      title: "Low Charge",
      details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      icon: <BsCoin />,
      title: "Fast Transaction",
      details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      icon: <FaRegCreditCard />,
      title: "Secure Payment",
      details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      icon: <TfiHeadphoneAlt />,
      title: "24/7 Support",
      details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
  ];
  return (
    <>
      <div id="AboutUs">
        <div className="md:py-24 py-5">
          <div className="container mx-auto md:px-40 px-4">
            <div className="flex md:flex-row gap-x-4 flex-col justify-between items-center">
              <div className="max-w-xl w-full">
                <div className="text-brand-600 text-base leading-6 font-semibold mb-2">
                  Cashless Payment
                </div>
                <div className="md:text-5xl text-2xl font-bold md:leading-[64px] mb-3">
                  Analyze your sales and marketing leads
                </div>
                <div className="text-base leading-7 mb-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua invidunt ut labore.
                </div>
              </div>
              <div className="w-full">
                {data.map((item: any, i: number) => (
                  <div key={i} className="flex gap-x-8 md:mb-10 mb-5">
                    <div className="">
                      <div className="text-brand-600 text-3xl w-[72px] h-[72px] bg-slate-100 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="">
                      <div className="md:text-2xl text-lg font-bold leading-9">
                        {item.title}
                      </div>
                      <div className="text-base leading-7">{item.details} </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsCompotent;
