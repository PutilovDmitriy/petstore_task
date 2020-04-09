import { AppActions } from "../../types/actions";
import { PetInfo } from "../../types/Pet";

export enum EditableAction {
  ADD_EDITABLE = "ADD_EDITABLE",
  CLEAN_EDITABLE = "CLEAN_EDITABLE",
}

export const addEditable = (payload: PetInfo): AppActions => ({
  type: EditableAction.ADD_EDITABLE,
  payload,
});

export const cleanEditable = () => ({
  type: EditableAction.CLEAN_EDITABLE,
});
