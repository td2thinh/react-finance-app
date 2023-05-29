import { features } from "../constants/"
import styles, { layout } from "../style"
import Button from "./Button"

type FeatureCardProps = {
    icon: string,
    title: string,
    content: string,
    index: number
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" : "mb-0" feature-card`} >
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
                <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div >
    )
}

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You are in good company, <br className="hidden sm:block" />
                    we'll handle your business
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right plan, you can get your business up and running in no time.
                    Earn more and stress less with us.
                </p>

                <Button styles={`mt-10`} text="Get Started" />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {
                    features.map((item, index) => {
                        return (
                            <FeatureCard key={item.id} {...item} index={index} />
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default Business