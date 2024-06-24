import React from 'react'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div className='w-full h-full min-h-screen bg-sky-500 flex justify-center items-center'>
        {children}
    </div>
  )
}
