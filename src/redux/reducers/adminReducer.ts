import { AppActions } from "../../types/actions";
import { AdminActions } from "../actions/admin";

export default (state = false, action: AppActions): boolean => {
  switch (action.type) {
    case AdminActions.ADMIN_START:
      return true;
    case AdminActions.ADMIN_STOP:
      return false;
    default:
      return state;
  }
};
