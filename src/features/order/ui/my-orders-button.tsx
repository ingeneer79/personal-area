/* https://github.com/gyolkin/stellar-burgers/blob/main/src/features/order/ui/button.tsx */

import { Button } from "antd";
import { MyOrdersButtonIcon } from "./my-orders-button-icon";
import { constantsMap } from "@/shared/model";

export const MyOrdersButton = () => {
  return (
    <Button
      type="primary"
      onClick={() => {}}
      className="primary-button"
    >
      {constantsMap.pages.catalog.actions.myOrders}
      <MyOrdersButtonIcon/>
    </Button>
  );
};

export default MyOrdersButton;
