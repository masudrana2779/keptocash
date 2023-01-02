import BillPay from "./BillPay";
import CashOut from "./CashOut";
import MobileRecharge from "./MobileRecharge";
import SendMoney from "./sendMoney";

const OurFeaturesComponent = () => {
  return (
    <>
      <div id="OurFeatures">
        <SendMoney />
        <BillPay />
        <CashOut />
        <MobileRecharge />
      </div>
    </>
  );
};

export default OurFeaturesComponent;
