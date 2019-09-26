import {IPageIntroInfo}from 'src/Entities/Interfaces';

// tslint:disable-next-line: no-empty-interface
export interface IState{

}
export interface IAppMainState{
    isOffline:boolean;
}
export interface IIntroPagesState extends IState{
    items:IPageIntroInfo[] ,
    error:string,
    loaded:boolean
}

export interface IContacUsState {
    Name: string,
    Email: string,
    Desc: string,
}
