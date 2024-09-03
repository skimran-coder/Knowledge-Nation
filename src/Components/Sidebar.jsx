import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Sidebar = ({isSidebarOpen, handleSidebar}) => {
const {pathname} = useLocation()

const [sidebarClass, setSidebarClass] = useState('sidebar-exit');

useEffect(() => {
  if (isSidebarOpen) {
    setSidebarClass('sidebar-enter sidebar-enter-active');
  } else {
    setSidebarClass('sidebar-exit sidebar-exit-active');
  }
}, [isSidebarOpen]);

  return (
    
      <>
      { isSidebarOpen && 
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10' >
        <div className={`bg-white w-1/2 h-full z-20 ${sidebarClass}`}>
            <div className='p-4 flex flex-col items-end'>
              <FontAwesomeIcon icon={faTimes} className='text-2xl' onClick={handleSidebar}/>
            </div>
              <hr className='w-full bg-black'></hr>
              <nav>
                <ul className='mt-8 px-4 flex flex-col gap-4 font-semibold'>
                  <Link to={"/"}>
                  <li className={pathname === "/" ? "text-myGreen" : ""} onClick={handleSidebar}>Home</li>
                  </Link>
                  <Link to={"/courses"}>
                  <li className={pathname.includes("courses") ? "text-myGreen" : ""} onClick={handleSidebar}>Courses</li>
                  </Link>
                  <Link to={"/about"}>
                  <li className={pathname === "/about" ? "text-myGreen" : ""} onClick={handleSidebar}>About Us</li>
                  </Link>
                  <Link to={"/contact"}>
                  <li className={pathname === "/contact" ? "text-myGreen" : ""} onClick={handleSidebar}>Contact Us</li>
                  </Link>
                </ul>
              </nav>
        </div>
      </div>
      }
      </>
    
    
  )
}

export default Sidebar