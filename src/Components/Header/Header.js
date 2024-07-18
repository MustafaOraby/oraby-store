import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text fixed z-30 w-full'>
      <TopHeader/>
      <Navbar/>

    </div>
  )
}

export default Header