import logo from '../assets/images/logo.png'
import logoDark from '../assets/images/logo_dark.png'
import mailIcon from '../assets/images/mail_icon.png'
import mailIconDark from '../assets/images/mail_icon_dark.png'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img src={logoDark} alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="" className="w-6 dark:hidden" />
          <img src={mailIconDark} alt="" className="w-6 hidden dark:block" />
          11s.shettyy@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          © 2024            Sushanth Shetty.            All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://instagram.com/sushanth.shettyy">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/sushanth-shetty11">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sushanthshetty11/">LinkedIn</a>
          </li>
          <li>
            <a href="https://x.com/Sushanth112003">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
