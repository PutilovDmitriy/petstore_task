import { AppActions } from "../../types/actions";
import { PetInfo } from "../../types/Pet";
import { EditableAction } from "../actions/editablePet";

const initialState: PetInfo | null = null;

export default (state = initialState, action: AppActions): PetInfo | null => {
  switch (action.type) {
    case EditableAction.ADD_EDITABLE:
      return action.payload;
    case EditableAction.CLEAN_EDITABLE:
      return null;
    default:
      return state;
  }
};
