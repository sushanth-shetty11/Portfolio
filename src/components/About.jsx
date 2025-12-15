import userImage from '../assets/images/user-image.jpeg'
import codeIcon from '../assets/images/code-icon.png'
import codeIconDark from '../assets/images/code-icon-dark.png'
import eduIcon from '../assets/images/edu-icon.png'
import eduIconDark from '../assets/images/edu-icon-dark.png'
import projectIcon from '../assets/images/project-icon.png'
import projectIconDark from '../assets/images/project-icon-dark.png'
import vscode from '../assets/images/vscode.png'
import mongodb from '../assets/images/mongodb.png'
import figma from '../assets/images/figma.png'
import git from '../assets/images/git.png'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img src={userImage} alt="" className="w-64 sm:w-80 rounded-3x1 max-w-none" />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2x1 font-Ovo">
            I'm Sushanth, a final-year engineering student and passionate full-stack web developer. With multiple projects under my belt, I specialize in building responsive, user-friendly applications and efficient backend systems. I'm always eager to learn new technologies and apply creative solutions to solve real-world problems. Driven by a love for innovation, I aim to deliver seamless digital experiences that make a lasting impact.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={codeIcon} alt="" className="w-7 mt-3 dark:hidden" />
              <img src={codeIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">HTML, CSS, JavaScript, React Js, Node Js, Express Js, MYSQL, MongoDB</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={eduIcon} alt="" className="w-7 mt-3 dark:hidden" />
              <img src={eduIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">B.E in Computer Science</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={projectIcon} alt="" className="w-7 mt-3 dark:hidden" />
              <img src={projectIconDark} alt="" className="w-7 mt-3 hidden dark:block" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Projects</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">Built more than 5 major projects and several minor projects</p>
            </li>
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vscode} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={mongodb} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={figma} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={git} alt="" className="w-5 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
