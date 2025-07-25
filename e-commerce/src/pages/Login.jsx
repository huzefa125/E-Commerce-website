import React, { useState } from 'react'
import { toast } from 'react-toastify' // Assuming you have react-toastify

function Login() {
  const [currentState, setCurrencyState] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form validation
  const validateForm = () => {
    if (currentState === 'Sign Up' && !formData.name.trim()) {
      toast.error('Name is required');
      return false;
    }
    
    if (!formData.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    
    if (!formData.password.trim()) {
      toast.error('Password is required');
      return false;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      if (currentState === 'Login') {
        console.log('Login attempt:', { email: formData.email, password: formData.password });
        // Simulate API call
        setTimeout(() => {
          toast.success('Login successful!');
          setIsLoading(false);
          // Redirect user or update app state
        }, 1000);
      } else {
        console.log('Signup attempt:', formData);
        // Simulate API call
        setTimeout(() => {
          toast.success('Account created successfully!');
          setIsLoading(false);
          setCurrencyState('Login'); // Switch to login after successful signup
        }, 1000);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-gray-50'>
      <div className='bg-white p-8 rounded-lg shadow-md w-[90%] sm:max-w-96'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-2 mb-2'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
          </div>

          {/* Name field for Sign Up */}
          {currentState === 'Sign Up' && (
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors' 
              placeholder='Full Name' 
              required
            />
          )}
           
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors' 
            placeholder='Email Address' 
            required
          />
          
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition-colors' 
            placeholder='Password' 
            required
          />

          {/* Forgot Password Link */}
          {currentState === 'Login' && (
            <div className='w-full flex justify-end text-sm mt-[-8px]'>
              <p className='cursor-pointer hover:underline text-gray-600 hover:text-black'>
                Forgot your password?
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white font-light px-8 py-2 mt-4 rounded transition-colors ${
              isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
            }`}
          >
            {isLoading ? 'Processing...' : (currentState === 'Login' ? 'Sign In' : 'Sign Up')}
          </button>

          {/* Toggle between Login and Sign Up */}
          <div className='w-full text-center text-sm mt-4'>
            {currentState === 'Login' ? (
              <p>
                Don't have an account? {' '}
                <span 
                  className='cursor-pointer hover:underline text-black font-medium' 
                  onClick={() => setCurrencyState('Sign Up')}
                >
                  Create account
                </span>
              </p>
            ) : (
              <p>
                Already have an account? {' '}
                <span 
                  className='cursor-pointer hover:underline text-black font-medium' 
                  onClick={() => setCurrencyState('Login')}
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
