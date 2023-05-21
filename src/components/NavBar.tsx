import { useState } from 'react'
import { close, logo, menu, sunIcon, moonIcon } from '../assets'
import { navLinks } from '../constants'
import { useTheme } from '../context'
import { useThemeContextProps } from '../App'


const NavBar = () => {
    const { theme, onThemeToggle } = useTheme() as useThemeContextProps
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <img src={logo} alt='logo' className='w-[120px] h-[60px]' />

                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((link, index) => (
                        <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === length - 1 ? 'mr-0' : 'mr-10'}`} >
                            <a href={`#${link.id}`} >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <label
                        className="flex items-center cursor-pointer"
                    >
                        <div className="relative">
                            <input id="toogleA" type="checkbox" className="sr-only" onChange={onThemeToggle} checked={theme === 'light' ? false : true} />
                            <div className="w-10 h-4 bg-light rounded-full shadow-inner drop-shadow-md"></div>
                            <div className='dot -left-1 absolute w-6 h-6 bg-lightText dark:bg-light rounded-full  shadow -top-1 transition'></div>

                        </div>
                        <div className="ml-3 font-medium">
                            <img src={theme === 'light' ? sunIcon : moonIcon} alt='theme' className='w-[20px] h-[20px]' />
                        </div>
                    </label>
                </ul>
                <div className='sm:hidden flex items-center'>
                    <label
                        className="flex items-center cursor-pointer"
                    >
                        <div className="relative">
                            <input id="toogleA" type="checkbox" className="sr-only" onChange={onThemeToggle} checked={theme === 'light' ? false : true} />
                            <div className="w-10 h-4 bg-light rounded-full shadow-inner drop-shadow-md"></div>
                            <div className='dot -left-1 absolute w-6 h-6 bg-lightText dark:bg-light rounded-full  shadow -top-1 transition'></div>

                        </div>
                        <div className="ml-3 font-medium">
                            <img src={theme === 'light' ? sunIcon : moonIcon} alt='theme' className='w-[20px] h-[20px]' />
                        </div>
                    </label>
                    <img src={toggle ? close : menu} alt='menu' className='w-[30px] h-[30px] ml-3 cursor-pointer' onClick={() => setToggle(prev => !prev)} />
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-dark ${theme === 'light' ? 'bg-light-gradient' : 'bg-dark-gradient'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((link, index) => (
                            <li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === length - 1 ? 'mb-0' : 'mb-4'}`} >
                                <a href={`#${link.id}`} >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default NavBar