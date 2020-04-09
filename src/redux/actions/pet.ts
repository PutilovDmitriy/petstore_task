import { PetInfo, Status } from "./../../types/Pet";
import { AppActions } from "types/actions";
import { urlPetByStatus, urlPet } from "../../constants/url";
import { Dispatch } from "react";

export enum PetActions {
  PET_BEGIN = "PET_BEGIN",
  PET_SUCCESS = "PET_SUCCESS",
  PET_FAILURE = "PET_FAILURE",
  ADD_PET = "ADD_PET",
  DELETE_PET = "DELETE_PET",
  UPDATE_PET = "UPDATE_PET",
}

export const petBegin = (): AppActions => ({
  type: PetActions.PET_BEGIN,
});

export const petSuccess = (payload: PetInfo[]): AppActions => ({
  type: PetActions.PET_SUCCESS,
  payload,
});

export const petFailure = (payload: any): AppActions => ({
  type: PetActions.PET_FAILURE,
  payload,
});

export const addPet = (payload: PetInfo): AppActions => ({
  type: PetActions.ADD_PET,
  payload,
});

export const updatePet = (payload: PetInfo): AppActions => ({
  type: PetActions.UPDATE_PET,
  payload,
});

export const deletePet = (payload: string): AppActions => ({
  type: PetActions.DELETE_PET,
  payload,
});

export function getPetInfo(status: Status) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(petBegin());
    return fetch(`${urlPetByStatus}${status}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(petFailure(401));
          return null;
        }
      })
      .then((res) => {
        if (res !== null) dispatch(petSuccess(res));
        return res;
      });
  };
}

export function addPetInfo(info: PetInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(petBegin());
    return fetch(`${urlPet}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(petFailure(402));
          return null;
        }
      })
      .then((res) => {
        if (res !== null) dispatch(addPet(res));
        return res;
      });
  };
}

export function updatePetInfo(info: PetInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(petBegin());
    return fetch(`${urlPet}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(petFailure(403));
          return null;
        }
      })
      .then((res) => {
        if (res !== null) dispatch(updatePet(res));
        return res;
      });
  };
}

export function deletePetInfo(petId: string) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(petBegin());
    return fetch(`${urlPet}${petId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(petFailure(404));
          return null;
        }
      })
      .then((res) => {
        if (res !== null) dispatch(deletePet(petId));
        return res;
      });
  };
}
