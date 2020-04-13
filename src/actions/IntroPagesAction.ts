import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import PagesApi from "src/apis/PagesApi";
import { IPageIntroInfo } from "src/Entities/Interfaces";
import { IIntroPagesState } from "src/Store/AllStates";
import {
  FETCH_INTROPAGES,
  FETCH_INTROPAGES_FAIL,
  FETCH_INTROPAGES_SUCCESS
} from "./actionConstant";
import { IntroPagesActionTypes } from "./actionTypes";

export const InitIntroPagesDataAction = () => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: FETCH_INTROPAGES
  });
  const pagesApi = new PagesApi();
  const data: IPageIntroInfo[] = await pagesApi.GetIntroInfoList();

  if (data) {
    dispatch({
      items: data,
      type: FETCH_INTROPAGES_SUCCESS
    });
  } else {
    dispatch({
      error: "err",
      type: FETCH_INTROPAGES_FAIL
    });
  }
};

export const FetchIntroPagesByApi: ActionCreator<ThunkAction<
  Promise<any>,
  IIntroPagesState,
  null,
  IntroPagesActionTypes
>> = () => {
  return async (dispatch: Dispatch) => {
    const pagesApi = new PagesApi();
    pagesApi
      .GetIntroInfoList()
      .then((data: IPageIntroInfo[]) => {
        dispatch({
          items: data,
          loaded: true,
          type: FETCH_INTROPAGES_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          error: err,
          loaded: false,
          type: FETCH_INTROPAGES_FAIL
        });
      });
  };
};
