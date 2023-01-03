import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
const TestiimonialsComponent = () => {
  return (
    <>
      <div className="py-24">
        <div className="container mx-auto md:px-40 px-4">
          <div className="text-5xl font-bold leading-[64px] mb-3 text-center">
            Customer Testimonials
          </div>
          <div className="text-base leading-7 mb-20 text-center">
            What our clients say
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {[1, 1, 1].map((item: any, i: number) => (
                <div key={i} className="p-12 rounded-2xl bg-custom_gray-50">
                  <div className="">
                    <div className="flex gap-x-4 mb-5">
                      <div className="flex">
                        <Image
                          src={"/assets/images/Image.jpg"}
                          alt="user"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="">
                        <div className="text-lg text-black font-bold mb-2">
                          Breanna Parker
                        </div>
                        <div className="flex gap-x-1 text-brand-600">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Ut ornare gravida
                        tempor. Nunc tristique libero eget nulla.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiimonialsComponent;
