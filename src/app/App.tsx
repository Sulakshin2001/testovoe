import React, {useEffect} from 'react';
import './App.module.scss';
import {getModulesTC} from "./app-reducer";
import {useAppDispatch} from "../hooks/react-redux-hooks";
import {ModuleContainer} from "../components/Module/ModuleContainer";
import s from './App.module.scss'
import {InfoContainer} from "../components/infoBlock/InfoContainer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {Root} from "./resultType";



function App() {

    const dispatch= useAppDispatch()
    let apiResult = useSelector<AppRootStateType, Root>(state => state.appReducer.apiResult)
    useEffect(()=> {

        dispatch(getModulesTC())
    },[])
    const isReady= useSelector<AppRootStateType,boolean>(state => state.appReducer.isReady)
    return (
        isReady === false ? <div>Wait please</div> :
            <div className={s.container}>
                <h2 className={s.title}>Специализированные дисциплины</h2>
                <ModuleContainer/>
                <div className={s.low}>
                    <InfoContainer
                        text={'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'}
                        title={'Практические модули'} className={'red'}/>
                    <InfoContainer info1={'Защита итоговой аттестационной работы'}
                                   info={'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)'}
                                   title={'Итоговая аттестация'} className={'black'}/>
                </div>
                <button onClick={() => dispatch(getModulesTC())}>dsdsds</button>
            </div>

);
}

export default App;
