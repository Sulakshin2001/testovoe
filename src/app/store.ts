import {AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {appReducer} from "./app-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";


export const rootReducer = combineReducers({
    appReducer: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<AppRootStateType, null, AnyAction>



