import webIcon from '../assets/images/web-icon.png'
import mobileIcon from '../assets/images/mobile-icon.png'
import uiIcon from '../assets/images/ui-icon.png'
import graphicsIcon from '../assets/images/graphics-icon.png'
import rightArrow from '../assets/images/right-arrow.png'

const Services = () => {
  const services = [
    {
      icon: webIcon,
      title: 'Web design',
      description: ''
    },
    {
      icon: mobileIcon,
      title: 'Mobile app',
      description: ''
    },
    {
      icon: uiIcon,
      title: 'UI/UX design',
      description: ''
    },
    {
      icon: graphicsIcon,
      title: 'Graphic design',
      description: ''
    }
  ]

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Final-year engineering student and full-stack developer with multiple projects, skilled in creating responsive, user-focused apps and efficient backends.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={rightArrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
