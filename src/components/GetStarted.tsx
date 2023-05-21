import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-lightAccent p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} w-full h-full rounded-full bg-light dark:bg-dark`}>
            </div>
        </div>
    )
}

export default GetStarted