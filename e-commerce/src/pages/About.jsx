import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='border-t pt-8 sm:pt-16'>
      
      {/* Page Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Main About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        
        {/* About Image */}
        <div className='w-full md:max-w-[450px]'>
          <img 
            className='w-full h-auto object-cover rounded-lg shadow-md' 
            src={assets.about_img || assets.hero_img} // Use about_img if available, fallback to hero_img
            alt="About Shaikh M Huzefa" 
          />
        </div>

        {/* About Content */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          
          {/* Introduction */}
          <p className='text-lg leading-relaxed'>
            Hi, I'm <span className='font-semibold text-gray-800'>Shaikh M Huzefa</span>, a passionate frontend developer 
            with a love for creating beautiful, functional, and user-friendly web experiences. This e-commerce platform 
            represents my dedication to modern web development and attention to detail.
          </p>
          
          {/* Mission */}
          <p className='text-base leading-relaxed'>
            My mission is to bridge the gap between design and technology, creating seamless digital experiences 
            that not only look great but also provide exceptional functionality. Every line of code I write is 
            driven by the desire to make the web a better place.
          </p>

          {/* What drives me */}
          <p className='text-base leading-relaxed'>
            What drives me is the endless possibility of what we can create with code. From responsive layouts 
            to interactive components, I believe that great frontend development is an art form that combines 
            creativity with technical expertise.
          </p>

          {/* Call to action */}
          <p className='text-base leading-relaxed'>
            This e-commerce project showcases my skills in React.js, modern CSS frameworks, and creating 
            intuitive user interfaces. I'm always looking for new opportunities to grow and contribute 
            to amazing projects.
          </p>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div className='py-16'>
        <div className='text-2xl text-center mb-10'>
          <Title text1={'MY'} text2={'SKILLS'} />
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          <div className='bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow'>
            <h3 className='font-semibold text-gray-800 mb-2'>Frontend</h3>
            <p className='text-sm text-gray-600'>React.js, JavaScript, HTML5, CSS3</p>
          </div>
          
          <div className='bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow'>
            <h3 className='font-semibold text-gray-800 mb-2'>Styling</h3>
            <p className='text-sm text-gray-600'>Tailwind CSS, Bootstrap, Sass</p>
          </div>
          
          <div className='bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow'>
            <h3 className='font-semibold text-gray-800 mb-2'>Tools</h3>
            <p className='text-sm text-gray-600'>Git, VS Code, Figma, Webpack</p>
          </div>
          
          <div className='bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow'>
            <h3 className='font-semibold text-gray-800 mb-2'>Focus</h3>
            <p className='text-sm text-gray-600'>UX/UI, Performance, Accessibility</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-8'>
        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow'>
          <b className='text-gray-800'>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every component is meticulously crafted with attention to detail, ensuring robust 
            performance and exceptional user experience across all devices and browsers.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow'>
          <b className='text-gray-800'>Convenience:</b>
          <p className='text-gray-600'>
            Built with user-first approach, focusing on intuitive navigation, fast loading times, 
            and seamless interactions that make online shopping a pleasure.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg transition-shadow'>
          <b className='text-gray-800'>Innovation:</b>
          <p className='text-gray-600'>
            Leveraging the latest frontend technologies and best practices to deliver modern, 
            scalable, and maintainable web applications that stand the test of time.
          </p>
        </div>
      </div>

      {/* Contact/Connect Section */}
      <div className='py-16 bg-gray-50 -mx-4 sm:-mx-8 px-4 sm:px-8'>
        <div className='text-2xl text-center mb-8'>
          <Title text1={'LET\'S'} text2={'CONNECT'} />
        </div>
        
        <div className='text-center max-w-2xl mx-auto'>
          <p className='text-gray-600 mb-6'>
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and tech enthusiasts.
          </p>
          
          <div className='flex justify-center gap-4 flex-wrap'>
            <button className='bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors'>
              View Portfolio
            </button>
            <button className='border border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors'>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
