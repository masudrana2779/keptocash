import BannerComponent from "../Banner";
import BenifitsCompotent from "../Benifits";
import BrandsComponent from "../Brands";
import CallToActionComponent from "../CallToAction";
import ContactComponent from "../Contact";
import DownloadAppComponent from "../DownloadApp";
import TestiimonialsComponent from "../Testiimonials";

const HomeComponent = () => {
  return (
    <>
      <div className="">
        <BannerComponent />
        <CallToActionComponent />
        <BenifitsCompotent />
        <BrandsComponent />
        <TestiimonialsComponent />
        <DownloadAppComponent />
        <ContactComponent />
      </div>
    </>
  );
};

export default HomeComponent;
