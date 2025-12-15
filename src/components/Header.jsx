import profileImg from '../assets/images/profile-img.PNG'
import handIcon from '../assets/images/hand-icon.png'
import rightArrowWhite from '../assets/images/right-arrow-white.png'
import downloadIcon from '../assets/images/download-icon.png'

const Header = () => {
  return (
    <div id="top" className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profileImg} alt="" className="rounded-full w-32" />
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo">
        Hi! I'm Sushanth Shetty <img src={handIcon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3x1 sm:text-6x1 lg:text-[66px] font-Ovo">Full-stack developer.</h1>
      <p className="max-w-2x1 mx-auto font-Ovo">
        Final-year engineering student and full-stack developer with multiple projects, skilled in creating responsive, user-focused apps and efficient backends.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a 
          href="#contact" 
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2"
        >
          contact me <img src={rightArrowWhite} alt="" className="w-4" />
        </a>

        <a 
          href="https://drive.google.com/file/d/1TdIWnZb0EzfuuZJWSlFj5E2qN5JnoOzd/view?usp=drivesdk" 
          download 
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <img src={downloadIcon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
