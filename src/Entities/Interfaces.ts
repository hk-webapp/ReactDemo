import { RouteComponentProps } from "react-router-dom";

export interface IPageListState {
  loaded: boolean;
  items: IPageIntroInfo[];
  error: string;
  LoadData: () => void;
}
export interface IAppComponent {
  name?: string;
}
interface IPageViewMatchParams {
  Name: string;
}
export interface IPageViewProps
  extends RouteComponentProps<IPageViewMatchParams> {}

export interface IPageIntroInfo {
  IntroImg: string;
  IntroInfo: string;
  Title: string;
  IsNew: boolean;
}
