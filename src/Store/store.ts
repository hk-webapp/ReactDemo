import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk'
import { ContactUsProducer } from 'src/reducers/ContacUsReducer';
import IntroPagesReducer from '../reducers/IntroPagesReducer'
import { IContacUsState, IIntroPagesState } from './AllStates';

export interface IAppState {
    introPageState: IIntroPagesState,
    contactusState: IContacUsState,
}

const rootReaducer = combineReducers<IAppState>({
    contactusState: ContactUsProducer,
    introPageState: IntroPagesReducer,
});

export function configStore(): Store<IAppState, any> {
    const store = createStore(rootReaducer, applyMiddleware(thunk));
    return store;
}

export const appStore = configStore();