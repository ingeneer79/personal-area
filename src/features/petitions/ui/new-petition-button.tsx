/* https://github.com/gyolkin/stellar-burgers/blob/main/src/features/order/ui/button.tsx */

import { Button } from "antd";
import { constantsMap } from "@/shared/model";

export const NewPetitionButton = () => {
  return (
    <Button
      type="primary"
      onClick={() => {}}
      className="primary-button"
    >
      {constantsMap.pages.petitions.actions.newPetition}
    </Button>
  );
};

export default NewPetitionButton;
