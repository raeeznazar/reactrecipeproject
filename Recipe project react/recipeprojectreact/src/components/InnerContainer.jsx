
import style from './innerContainer.module.css'
export default function InnerConatiner({ children }) {
    return <div className={style.innerConatiner}>{children}</div>
}