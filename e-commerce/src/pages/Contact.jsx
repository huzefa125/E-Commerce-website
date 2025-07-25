import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      setTimeout(() => {
        console.log('Contact form submitted:', formData)
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className='border-t pt-8 sm:pt-16'>
      
      {/* Page Title */}
      <div className='text-2xl text-center pt-8'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Content */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        
        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <img 
            className='w-full md:max-w-[480px] rounded-lg shadow-md' 
            src={assets.contact_img || assets.about_img || assets.hero_img} 
            alt="Contact Us" 
          />
        </div>

        {/* Contact Details & Form */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          
          {/* Store/Business Info */}
          <div className='mb-8'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Get In Touch</h2>
            <p className='text-gray-600 mb-6'>
              Have questions about our products? Need support with your order? 
              Or want to discuss a potential collaboration? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Details */}
          <div className='space-y-4 mb-8'>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/>
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-800'>Our Store</h3>
                <p className='text-gray-600 text-sm'>123 Fashion Street, Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/>
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-800'>Phone</h3>
                <p className='text-gray-600 text-sm'>+91 98765 43210</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/>
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-800'>Email</h3>
                <p className='text-gray-600 text-sm'>hello@shaikhhuzefa.com</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/>
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-800'>Hours</h3>
                <p className='text-gray-600 text-sm'>Mon - Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>Send us a Message</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Your Name *'
                className='border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-black transition-colors'
                required
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Your Email *'
                className='border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-black transition-colors'
                required
              />
            </div>
            
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
              placeholder='Subject'
              className='border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-black transition-colors'
            />
            
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Your Message *'
              rows='5'
              className='border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-black transition-colors resize-vertical'
              required
            ></textarea>
            
            <button
              type='submit'
              disabled={isLoading}
              className={`bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='py-16 bg-gray-50 -mx-4 sm:-mx-8 px-4 sm:px-8'>
        <div className='text-2xl text-center mb-10'>
          <Title text1={'FREQUENTLY'} text2={'ASKED'} />
        </div>
        
        <div className='max-w-4xl mx-auto space-y-6'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='font-semibold text-gray-800 mb-2'>How long does shipping take?</h3>
            <p className='text-gray-600 text-sm'>We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.</p>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='font-semibold text-gray-800 mb-2'>What is your return policy?</h3>
            <p className='text-gray-600 text-sm'>We offer a 30-day return policy for all unworn items with original tags. Returns are free and easy through our online portal.</p>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='font-semibold text-gray-800 mb-2'>Do you offer international shipping?</h3>
            <p className='text-gray-600 text-sm'>Yes, we ship worldwide! International shipping rates and delivery times vary by location. Check our shipping page for detailed information.</p>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='font-semibold text-gray-800 mb-2'>How can I track my order?</h3>
            <p className='text-gray-600 text-sm'>Once your order ships, you'll receive a tracking number via email. You can also track your order status in the "My Orders" section of your account.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
