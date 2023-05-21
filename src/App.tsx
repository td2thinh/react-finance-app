import styles from "./style";
import { Billing, Business, CardDeal, Clients, Footer, NavBar, Stats, Testimonials, Hero, CallToAction } from "./components";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context";

export type useThemeContextProps = {
  theme?: string,
  onThemeToggle?: () => void
}

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <div className="bg-light text-lightText dark:bg-dark dark:text-darkText w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBar />
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
      </ThemeProvider>
    </div>
  )
}

export default App;