/* https://github.com/gyolkin/stellar-burgers/blob/main/src/features/order/ui/button.tsx */

import { Button } from "antd";
import { constantsMap } from "@/shared/model";
import { useDispatch } from "react-redux";
import { setNewPetitionModalOpen } from "@/entities/petitions/model/slice";

export const NewPetitionButton = () => {
  // const newPetitionModalOpen = useAppSelector(state => state.petitionsStore.newPetitionModalOpen);
  const dispatch = useDispatch()

  return (
    <Button
      type="primary"
      onClick={() => {dispatch(setNewPetitionModalOpen(true))}}
      className="primary-button"
    >
      {constantsMap.pages.petitions.actions.newPetition}
    </Button>
  );
};

export default NewPetitionButton;
