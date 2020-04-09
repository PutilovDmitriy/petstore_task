import { AppActions } from "../../types/actions";
export enum AdminActions {
  ADMIN_START = "ADMIN_START",
  ADMIN_STOP = "ADMIN_STOP",
}

export const startAdmin = (): AppActions => ({
  type: AdminActions.ADMIN_START,
});

export const stopAdmin = (): AppActions => ({
  type: AdminActions.ADMIN_STOP,
});
