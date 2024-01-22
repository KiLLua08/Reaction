import React, { useState } from 'react'
import killua from '../assets/killua.png'
import straw from '../assets/straw.png'
import luffy from '../assets/luffy.png'
import {Link, } from 'react-router-dom'
import { Button, TextInput, Spinner, Label, Alert} from 'flowbite-react';

function Signup() {
    const [loading, setLoading] = useState(true)

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
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='KiLLuLa'
                id='name'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@something.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
            >
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont Have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
            <Alert className='mt-5' color='failure'>
              errorMessage
            </Alert>
        </div>
      </div>
    </div>
  )
}

export default Signup
