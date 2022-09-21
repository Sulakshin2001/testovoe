import {Dispatch} from "redux";
import {getPrograms} from "./api";
import {Root} from "./resultType";
type initialStateType={
    apiResult:Root
    isReady:boolean
}

const initiialstate:initialStateType={
	apiResult: [],
    isReady:false
}
export type IsReadyActionCreator={
    type:string
}
export const appReducer = (state=initiialstate,action:any) =>{
    switch (action.type){
        case "setModules":

            return {...state,apiResult:action.res}

        case 'ISREADY':
            return {...state,isReady:true}

        default:return state
    }

}
type action = ReturnType<typeof setModulesAC>
export const setModulesAC=(res:any)=>{
    return ({type:'setModules',res:res} as const)
}
export const isReadyAC=()=>{
    return ({type:'ISREADY'} as const)
}

export const getModulesTC = () => async (dispatch:Dispatch) => {
    try {
        const res = await getPrograms.getPrograms()
        dispatch(setModulesAC(res.data))
        dispatch(isReadyAC())
    }
    catch (e:unknown){
		alert('error')

    }
}