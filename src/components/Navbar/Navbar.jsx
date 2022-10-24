import React from 'react'
import logo from './lg.png'
import {BiGlobe, BiMenu} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import { VscDebugStackframeDot } from 'react-icons/vsc'


const Navbar = () => {
  return (
    <div className=' fixed z-[1000] w-full flex bg-white items-center justify-center border-b-[1px]'>
        <div className="w-[90%] py-[20px] flex justify-center items-center md:justify-between">
            <img className='hidden md:flex' width='140px' src={logo}/>
            <div id='bar' className="w-[340px] h-[46px] border-[1px] border-[#DDDDDD] items-center flex justify-around rounded-full">
                <div class="flex space-x-4 divide-x">
                    <div className='pl-3 font-[500]'>Anywhere</div>
                    <div className='pl-3 font-[500]'>Any week</div>
                    <div className='pl-3 text-[#717171]'>Add guests</div>
                </div> 
                <div className="h-[36px] w-[36px] flex justify-center items-center rounded-full bg-[#ff385c]">
                    <FiSearch size={18} color="white"/>
                </div>          
            </div>
            <div className="hidden md:flex justify-between space-x-4 items-center">
                <h3>Become a Host</h3>
                <BiGlobe size={24} color="#2e2e2e"/>
                <div className="relative flex p-[4px] items-center h-[46px] justify-between w-[80px] border-2 border-[#DDDDDD] rounded-full ">
                    <BiMenu size={24}/>
                    <FaUserCircle size={34} color="grey"/>
                    <div className='dot absolute top-0 right-0 w-[15px] h-[15px] bg-[#ff385c] rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar