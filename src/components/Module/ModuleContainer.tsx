import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import s from './ModuleContainer.module.scss'
import {DisciplineContainer} from "./discipline/DisciplineContainer";
import {Root} from "../../app/resultType";

export const ModuleContainer = () => {
    let apiResult = useSelector<AppRootStateType, Root>(state => state.appReducer.apiResult).slice(49, 54)
    return (
        <div>

            {apiResult.map(el => <div className={s.all}>
                    <h3 className={s.title}>
                        {el.title}
                    </h3>
                    <>
                        <ul>

                            <div className={s.specialnost}>
                                <div className={s.container}>
                                    <div className={s.special}>
                                        <span className={s.text}>1 module
                                            {el.specializedSubjects.map(el => <DisciplineContainer discipline={el.string}
                                                                                                   module={'1 module'}/>).slice(0, 5)}
                                        </span>
                                    </div>


                                </div>
                                <div>
                                    <span className={s.text2}>2 module</span>
                                    {el.specializedSubjects.map(el => <DisciplineContainer discipline={el.string}
                                                                                           module={'2module'}/>).slice(5, 10)}
                                </div>
                            </div>
                        </ul>

                    </>
                </div>
            )}
        </div>
    )
}