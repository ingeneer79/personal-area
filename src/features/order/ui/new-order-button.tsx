/* https://github.com/gyolkin/stellar-burgers/blob/main/src/features/order/ui/button.tsx */

import { Button } from "antd";
import { NewOrderButtonIcon } from "./new-order-button-icon";
import { constantsMap } from "@/shared/model";

export const NewOrderButton = () => {
  return (
    <Button type="primary" onClick={() => {}}>
      {constantsMap.pages.catalog.actions.newOrder}
      <NewOrderButtonIcon />
    </Button>
  );
};

export default NewOrderButton;
