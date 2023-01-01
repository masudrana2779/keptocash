import BannerComponent from "../Banner";
import BenifitsCompotent from "../Benifits";
import BrandsComponent from "../Brands";
import OurFeaturesComponent from "../OurFeatures";
import ContactComponent from "../Contact";
import DownloadAppComponent from "../DownloadApp";
import TestiimonialsComponent from "../Testiimonials";

const HomeComponent = () => {
  return (
    <>
      <div className="">
        <BannerComponent />
        <OurFeaturesComponent />
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
