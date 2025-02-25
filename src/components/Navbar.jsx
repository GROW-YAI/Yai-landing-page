
import React from 'react';
import { NavbarMenu } from './mockData/data.js';
import { SiInstagram } from "react-icons/si";
import { PiCloverLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu.jsx';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <nav className="absolute top-[14px] left-0 right-0 z-3 bg-white flex flex-row flex-nowrap justify-start items-center p-1 box-border">
        <div className='container flex justify-between items-center py-3'>

          {/*Logo section*/}
          <div className='text-2xl flex items-center gap-2 font-bold uppercase px-3'>
            <p>Sekye</p>
            <p className='text-secondary'>Ent.</p>
          </div>

          {/*Menu section*/}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link} className=' inline-block py-1 px-3 hover:text-primary font-semibold'>
                      {item.title}
                    </a>
                  </li>
                );
              }
              )}
            </ul>
          </div>

          {/*Icons section*/}
          <div className='flex items-center gap-4'>
            <button className='text-2xl hover:bg-amber-300 hover:text-white rounded-full p-2 duration-200'>
              <SiInstagram />
            </button>

            <button className='text-2xl hover:bg-amber-300 hover:text-white rounded-full p-2 duration-200'>
              <PiCloverLight />
            </button>
          </div>

          {/*Mobile hamburger Menu section*/}
          <div className='md:hidden' onClick={() => setOpen(!open) 
          }>
            <MdMenu className='text-4xl hover:bg-amber-300 hover:text-white rounded-full duration-200'/>
          </div>
        </div>
      </nav>

      {/*Mobile Sidebar section*/}
     <ResponsiveMenu open={open}  onClose={() => setOpen(false)}/>
    </div>

  )
}

export default Navbar