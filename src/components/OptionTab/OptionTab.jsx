import React, {useState, useEffect} from 'react'
import { locationTabs } from '../../dummyData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {IoMdSwitch} from 'react-icons/io'
import Cards from '../Cards/Cards'
import { designInfo } from '../../directory'

const OptionTab = () => {
  const [tab, setTab] = useState([])
  const [tempData, setTempData] = useState(designInfo)
  const [active, setActive] = useState("Design")
  const [hideLeft, setHideLeft] = useState(true)
  const [hideRight, setHideRight] = useState(false)

  //Slider Handler
  const slider = document.getElementById('slider')  
  
  const slideLeft = () => {
    setHideRight(false)
    slider.scrollLeft -= 400
    if(slider.scrollLeft <= 400){
      setHideLeft(true)
    }
  }

  const slideRight = () => {
    slider.scrollLeft += 400
    setHideLeft(false)
    if(slider.scrollLeft >= 805){
      setHideRight(true)
    }
  }

  //Sets Active Tabs with active styles

  useEffect(()=>{
    setTab(locationTabs)
  },[])

  const getInfo = (info, name) => {
    setTempData(info)
    setActive(name)
  }

  return (
    <>
    {/* Location Tabs */}
    <div className= "fixed w-full flex bg-white z-20 justify-center">
      <div className=' mt-[87px] w-[91%] justify-between flex flex-nowrap items-center'>
        <div className="relative flex w-[100%] justify-center items-center md:w-[93%]">
          <MdChevronLeft className={hideLeft ? "hidden" :'hidden absolute left-0 bg-white border border-[#DDDDDD] cursor-pointer h-[32px] w-[32px] rounded-full md:flex'} onClick={slideLeft} size={30}/>
          <div id="slider" className=' flex h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:w-[97%]'>
            {tab.map((item)=>(
                <div onClick={()=>getInfo(item.data, item.label)} id="hover-class" className={active === item.label ? "active" :"flex flex-col items-center justify-around min-w-max text-[#717171] m-6 h-[60px] cursor-pointer"} key={item.id}>
                  {item.icon}
                  <p className='text-[14px] font-[500]'>{item.label}</p>
                </div>
            ))}
          </div>
          <MdChevronRight className={hideRight ? "hidden" : 'hidden bg-white absolute right-0 border border-[#DDDDDD] cursor-pointer h-[32px] w-[32px] p-1 mb-2 rounded-full md:flex'} onClick={slideRight} size={30}/>
        </div>
        <button className="hidden font-[500] border justify-evenly items-center px-[7px] h-[55px] w-[90px] border-[#DDDDDD] rounded-[9px] md:flex">
          <IoMdSwitch/> Filters
        </button>
      </div>
    </div>
    {/* Cards */}
    <Cards tabData={tempData}/>
    </>
  )
}

export default OptionTab