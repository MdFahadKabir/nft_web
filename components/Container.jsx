import React from 'react'

const Container = ({children}) => {
  return (
    <div className='lg:max-w-screen-xl xl:max-w-screen-2xl   mx-auto lg:px-12 px-5'>
        {children}
    </div>
  )
}

export default Container