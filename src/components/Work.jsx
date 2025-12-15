import sendIcon from '../assets/images/send-icon.png'
import rightArrowBold from '../assets/images/right-arrow-bold.png'
import rightArrowBoldDark from '../assets/images/right-arrow-bold-dark.png'
import work1 from '../assets/images/work-1.png'
import work2 from '../assets/images/work-2.png'
import work3 from '../assets/images/work-3.png'
import work4 from '../assets/images/work-4.png'

const Work = () => {
  const projects = [
    {
      image: work1,
      title: 'Employee management',
      description: 'Assigning Tasks',
      link: 'https://github.com/sushanth-shetty11/employee-management-'
    },
    {
      image: work2,
      title: 'Backend project',
      description: 'Real time location tracking',
      link: 'https://github.com/sushanth-shetty11/Realtime-device-track'
    },
    {
      image: work3,
      title: 'Frontend project',
      description: 'Food delivery web',
      link: 'https://github.com/sushanth-shetty11/food_delivery_App'
    },
    {
      image: work4,
      title: 'Block-chain project',
      description: 'Fake product detection',
      link: 'https://github.com/sushanth-shetty11/fake-products-detection-blockchain'
    }
  ]

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in full-stack development
      </p>&gt;

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <a href={project.link}>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </a>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href={project.link}>
                  <img src={sendIcon} alt="" className="w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a 
        href="#" 
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img src={rightArrowBold} alt="" className="w-4 dark:hidden" />
        <img src={rightArrowBoldDark} alt="" className="w-4 hidden dark:block" />
      </a>
    </div>
  )
}

export default Work
