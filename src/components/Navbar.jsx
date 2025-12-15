import logo from '../assets/images/logo.png'
import logoDark from '../assets/images/logo_dark.png'
import moonIcon from '../assets/images/moon_icon.png'
import sunIcon from '../assets/images/sun_icon.png'
import arrowIcon from '../assets/images/arrow-icon.png'
import arrowIconDark from '../assets/images/arrow-icon-dark.png'
import menuBlack from '../assets/images/menu-black.png'
import menuWhite from '../assets/images/menu-white.png'
import closeBlack from '../assets/images/close-black.png'
import closeWhite from '../assets/images/close-white.png'
import headerBgColor from '../assets/images/header-bg-color.png'

const Navbar = ({ isDarkMode, isScrolled, isMenuOpen, toggleTheme, openMenu, closeMenu }) => {
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
        isScrolled 
          ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' 
          : ''
      }`}>
        <img src={logo} alt="logo" className="w-28 cursor-pointer mr-14 dark:hidden" />
        <img src={logoDark} alt="logo" className="w-28 cursor-pointer mr-14 hidden dark:block" />
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo ${
          isScrolled 
            ? '' 
            : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
        }`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            <img src={moonIcon} alt="" className="w-6 dark:hidden" />
            <img src={sunIcon} alt="" className="w-6 hidden dark:block" />
          </button>
          
          <a 
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full m1-4 font-Ovo dark:border-white/50"
          >
            Contact
            <img src={arrowIcon} alt="" className="w-3 dark:hidden" />
            <img src={arrowIconDark} alt="" className="w-3 hidden dark:block" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menuBlack} alt="" className="w-6 dark:hidden" />
            <img src={menuWhite} alt="" className="w-6 hidden dark:block" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul 
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white ${
            isMenuOpen ? 'right-0' : '-right-64'
          }`}
        >
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <img src={closeBlack} alt="" className="w-5 cursor-pointer dark:hidden" />
            <img src={closeWhite} alt="" className="w-5 cursor-pointer hidden dark:block" />
          </div>

          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>

      {/* Background gradient image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src={headerBgColor} alt="" className="w-full" />
      </div>
    </>
  )
}

export default Navbar
