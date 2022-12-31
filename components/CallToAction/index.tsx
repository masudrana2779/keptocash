import BillPay from "./BillPay";
import CashOut from "./CashOut";
import MobileRecharge from "./MobileRecharge";
import SendMoney from "./sendMoney";

const CallToActionComponent = () => {
  return (
    <>
      <SendMoney />
      <BillPay />
      <CashOut />
      <MobileRecharge />
    </>
  );
};

export default CallToActionComponent;
