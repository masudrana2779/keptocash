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
        <div className="py-20">
          <div className="container mx-auto px-40">
            <div className="flex justify-between items-center gap-x-4">
              <div className="max-w-xl w-full">
                <div className="text-brand-600 text-base leading-6 font-semibold mb-2">
                  Cashless Payment
                </div>
                <div className="text-5xl font-bold leading-[64px] mb-3">
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
                  <div key={i} className="flex gap-x-8 mb-10">
                    <div className="text-brand-600 text-3xl w-[72px] h-[72px] bg-slate-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="">
                      <div className="text-2xl font-bold leading-9">
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
