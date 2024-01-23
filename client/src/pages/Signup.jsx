import React, { useState } from 'react'
import killua from '../assets/killua.png'
import straw from '../assets/straw.png'
import luffy from '../assets/luffy.png'
import {Link, useNavigate} from 'react-router-dom'
import { Button, TextInput, Spinner, Label, Alert} from 'flowbite-react';

function Signup() {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
    console.log(formData)
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/signup', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok) {
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage('Failed to sign up. Please try again.');
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 bg-gradient-to-r from-indigo-950 via-purple-500 to-pink-950 rounded-lg p-5 items-center justify-center'>
        {/* left */}
        <div className='flex-1 items-center justify-center'>
          <Link to='/' className='self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white px-4 py-2 bg-gradient-to-r from-indigo-950 via-purple-500 to-pink-950 rounded-lg text-white'>
            SkillsPrint
          </Link>
        </div>
        {/* right */}

        <div className='flex-1 bg-white p-5 rounded'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='KiLLuLa'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@something.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
            >
                <>
                  {/*   <Spinner size='sm' />*/}
                  <span className='pl-3'>Sign UP</span>
                </>
            </Button>
          </form>
           {errorMessage &&  
            <Alert className='mt-5' color='failure'>
              errorMessage
            </Alert>}
        </div>
      </div>
    </div>
  )
}

export default Signup
