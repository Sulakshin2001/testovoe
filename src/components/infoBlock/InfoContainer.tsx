import s from './InfoContainer.module.scss'
type LowContainerType={
    className:string
    title:string
    text?:string
    info?:string
    info1?:string
}
export const InfoContainer = (props:LowContainerType) => {
    return (

            <div className={props.className==='red' ? s.block1 :s.block2}>
                <h3 className={s.title}>{props.title}</h3>
                {props.className==='red' ? <span className={s.span}>{props.text}</span> : <ul className={s.ul}><li className={s.li}>{props.info}</li><li className={s.li}>{props.info1}</li></ul>}

            </div>



                )
                }