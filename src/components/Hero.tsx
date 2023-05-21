import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => {
    return (
        <>
            <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient-light dark:bg-discount-gradient rounded-[10px] mb-2`}>
                        <img src={discount} alt="discount" className="w-[32px] h-[32px] mr-2" />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className="text-lightAccent">
                                20% {' '}
                            </span>
                            Discount for {` `}
                            <span className="text-lightAccent">
                                Annual Plan {` `}
                            </span>
                            Account
                        </p>
                    </div>

                    <div className="flex flex-row  justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">The Next {` `}
                            <br className="sm:block hidden"></br>
                            <span className="text-lightAccent">Big Thing</span>
                            <br className="sm:block hidden"></br>
                            is Here.
                        </h1>
                        <div className="ss:flex hidden md:mr-4 mr-0">
                            <GetStarted />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero