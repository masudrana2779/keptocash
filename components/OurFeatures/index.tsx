import BillPay from "./BillPay";
import CashOut from "./CashOut";
import MobileRecharge from "./MobileRecharge";
import SendMoney from "./sendMoney";

const OurFeaturesComponent = () => {
  return (
    <>
      <SendMoney />
      <BillPay />
      <CashOut />
      <MobileRecharge />
    </>
  );
};

export default OurFeaturesComponent;