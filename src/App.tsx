import './App.css'
import styles from "./style"
import {
  NavBar,
  Billing,
  Business,
  Button,
  CallToAction,
  CardDeal,
  Clients,
  FeedBackCard,
  Footer,
  Hero,
  GetStarted,
  Stats,
  Testimonials
} from './components'

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Testimonials />
            <Clients />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App