import s from './DisciplineContainer.module.scss'
type TasksType={
    discipline:string
    module:string
}
export const DisciplineContainer = (props:TasksType) => {

    return(

        <li  className={props.module==='2module' ?  s.subject2 : s.subject} >
            {props.discipline}

        </li>
    )
}