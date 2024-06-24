"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '../ui/button';

export default function Social() {
  return (
    <div className='w-full flex items-center gap-x-2 p-3'>
        <Button size='lg' variant='outline' className='w-full' onClick={() => {}}>
            <FcGoogle className='w-5 h-5' />
        </Button>
        <Button size='lg' variant='outline' className='w-full' onClick={() => {}}>
            <FaGithub className='w-5 h-5' />
        </Button>
    </div>
  )
}
