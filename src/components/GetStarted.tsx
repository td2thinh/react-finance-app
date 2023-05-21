import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[200px] h-[200px] rounded-full bg-lightAccent p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} w-full h-full rounded-full bg-light dark:bg-dark`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>Get {' '}</p>
                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>Started</p>
                    <img src={arrowUp} alt="arrow up" className="w-[24px] h-[24px] ml-2" />
                </div>
            </div>
        </div>
    )
}

export default GetStarted