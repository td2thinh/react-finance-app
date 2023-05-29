import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find the best card deals
                    <br className="hidden sm:block" />
                    that fit your lifestyle.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right plan, you can get your business up and running in no time.
                    Earn more and stress less with us.
                </p>

                <Button styles={`mt-10`} text="Get Started" />
            </div>

            <div className={`${layout.sectionImg}`}>
                <img src={card} alt="card" className="w-full h-full object-contain" />
            </div>
        </section>
    )
}

export default CardDeal