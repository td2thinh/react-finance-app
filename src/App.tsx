import styles from "./style";
import { Billing, Business, CardDeal, Clients, Footer, NavBar, Stats, Testimonials, Hero, CallToAction } from "./components";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="bg-light text-lightText dark:bg-dark dark:text-darkText w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar onThemeToggle={toggleTheme} theme={theme} />
        </div>
      </div>

      <div className={`bg-light text-lightText dark:bg-dark dark:text-darkText ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-light text-lightText dark:bg-dark dark:text-darkText ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;