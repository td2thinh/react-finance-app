import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
    return (
        <section id='product' className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="billing" className="w-full h-full object-contain" />
                <div className='absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%] rounded-full white__gradient' />
                <div className='absolute z-[0] -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full pink__gradient' />
            </div>

            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    Simple and transparent pricing
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    No hidden fees. No credit card required.
                </p>
                <div className={`flex flex-row flex-wrap justify-start sm:mt-10 mt-6`}>
                    <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-8 cursor-pointer' />
                    <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
                </div>
            </div>

        </section>
    )
}

export default Billing