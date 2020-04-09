import { AppActions } from "types/actions";
import { Pet } from "./../../types/Pet";
import { PetActions } from "../actions/pet";

const initialState: Pet = {
  info: [],
  loading: false,
  error: null,
};

export default (state = initialState, action: AppActions): Pet => {
  switch (action.type) {
    case PetActions.PET_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PetActions.PET_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case PetActions.PET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PetActions.ADD_PET:
      return {
        ...state,
        loading: false,
        info: [...state.info, action.payload],
      };
    case PetActions.UPDATE_PET:
      let i = state.info.findIndex((item) => item.id == action.payload.id);
      if (i !== -1) {
        return {
          ...state,
          loading: false,
          info: [
            ...state.info.slice(0, i),
            action.payload,
            ...state.info.slice(i + 1),
          ],
        };
      } else
        return {
          ...state,
          loading: false,
        };
    case PetActions.DELETE_PET: {
      let i = state.info.findIndex((item) => item.id == action.payload);
      if (i !== -1) {
        return {
          ...state,
          loading: false,
          info: [...state.info.slice(0, i), ...state.info.slice(i + 1)],
        };
      } else return { ...state, loading: false };
    }
    default:
      return state;
  }
};
