import { IPageIntroInfo } from "src/Entities/Interfaces";
import {
  CONTACT_US_CHANGE_DESC,
  CONTACT_US_CHANGE_EMAIL,
  CONTACT_US_CHANGE_NAME,
  FETCH_INTROPAGES,
  FETCH_INTROPAGES_FAIL,
  FETCH_INTROPAGES_SUCCESS
} from "./actionConstant";

export interface ILoadSuccessIntroPagesAction {
  type: typeof FETCH_INTROPAGES_SUCCESS;
  items: IPageIntroInfo[];
}

export interface ILoadFailIntroPagesAction {
  type: typeof FETCH_INTROPAGES_FAIL;
  error: string;
}
export interface ILoadIntroPagesAction {
  type: typeof FETCH_INTROPAGES;
}

export type IntroPagesActionTypes =
  | ILoadSuccessIntroPagesAction
  | ILoadFailIntroPagesAction
  |ILoadIntroPagesAction;

export interface IContactUsChangeNameAction {
  type: typeof CONTACT_US_CHANGE_NAME;
  name: string;
}

export interface IContactUsChangeEmailAction {
  type: typeof CONTACT_US_CHANGE_EMAIL;
  email: string;
}

export interface IContactUsChangeDescAction {
  type: typeof CONTACT_US_CHANGE_DESC;
  desc: string;
}

export type ContactUsActionType =
  | IContactUsChangeNameAction
  | IContactUsChangeEmailAction
  | IContactUsChangeDescAction;
