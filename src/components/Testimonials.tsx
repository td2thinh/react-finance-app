import { feedback } from "../constants"
import styles from "../style"
import FeedBackCard from "./FeedBackCard"

const Testimonials = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.paddingY} flex-col relative`}>
            <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient -right-[50%]" />
            <div className="w-full flex justify-between items-cemter md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>
                    What our customers are saying
                    <br className="hidden sm:block" />
                    about us
                </h1>

                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Everything you need to manage your finances is here!
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-center sm:justify-start feedback-container relative z-[1]">
                {
                    feedback.map((item) => {
                        return (
                            <FeedBackCard key={item.id} {...item} />
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Testimonials