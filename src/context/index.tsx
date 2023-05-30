import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
    children: React.ReactNode
}

export const useTheme = () => {
    return useContext(ThemeContext)
}

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: ThemeContextProps) => {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', JSON.stringify('dark'))
    }

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') || 'light'))

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
        }
        else {
            document.documentElement.classList.add('dark')
        }
    }, [theme])

    const onThemeToggle = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <ThemeContext.Provider value={{ theme, onThemeToggle }}>
            {children}
        </ThemeContext.Provider>
    )
}