import {useState} from 'react'

import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='p-8 lg:px-20 4xl:px-40 flex justify-between items-center text-white'>
        <img src={logo} alt="" className='w-40 h-auto' />
        <ul className='hidden lg:flex'> 
          { navLinks.map((nav, index) => (
            <li key={nav.id} className='mr-8' ><a href={'#${}nav.id'}>{nav.title}</a></li>
          )) } 
        </ul>
        <div className='lg:hidden'>
          <img src={toggle ? close : menu} alt="menu" className='w-8' onClick={() => setToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex' : 'hidden'} bg-gradient-to-r bg-black-gradient-2 text-lg absolute flex flex-col justify-center top-0 left-0 p-8 h-screen w-52 sidebar z-10`}>
          <ul className=''> 
            { navLinks.map((nav, index) => (
              <li key={nav.id} className='mb-4'><a href={'#${}nav.id'}>{nav.title}</a></li>
            )) } 
          </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar