import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"
import { useThemeContextProps } from "../App"
import { useTheme } from "../context"

const Hero = () => {
    const { theme } = useTheme() as useThemeContextProps
    return (
        <>
            <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className={`flex flex-row items-center py-[6px] px-4 ${theme === "light" ? 'bg-discount-gradient-light' : 'bg-discount-gradient'} rounded-[10px] mb-2`}>
                        <img src={discount} alt="discount" className="w-[32px] h-[32px] mr-2" />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className="dark:text-lightAccent text-light">
                                20% {' '}
                            </span>
                            Discount for {` `}
                            <span className="dark:text-lightAccent text-light">
                                Annual Plan {` `}
                            </span>
                            Account
                        </p>
                    </div>

                    <div className="flex flex-row  justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">The Next {` `}
                            <br className="sm:block hidden"></br>

                            <br className="sm:block hidden"></br>
                            {' '} Generation {` `}
                        </h1>
                        <div className="ss:flex hidden md:mr-4 mr-0">
                            <GetStarted />
                        </div>
                    </div>

                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-lightAccent ss:leading-[100px] leading-[75px] w-full">
                        Payment Processor
                    </h1>

                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Our platform allows you to send money to anyone in the world, from anywhere in the world. Get started now!
                    </p>
                </div>

                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>                    <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0" style={{
                        "background": "linear-gradient(90deg, #f4c4c3 0%,  #fc67fa 100%)",
                        "filter": "blur(900px)",
                    }} />
                    <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40" style={{
                        "background": "rgba(255, 255, 255, 0.6)",
                        "filter": "blur(750px)",
                    }} />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-0" style={{
                        "background": "linear-gradient(180deg, rgba(188, 165, 255, 0) 0%,  #214d76 100%)",
                        "filter": "blur(900px)",
                    }} />
                </div>
            </section>
        </>
    )
}

export default Hero