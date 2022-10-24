import React, { useEffect, useState } from 'react'
import {FaHeart, FaStar} from 'react-icons/fa'

const Cards = ({tabData}) => {
  const [red, setRed] = useState()

  const handleLike = (id) =>{
    setRed(id)
    
  }
  console.log(red)
  return (
    <div className='w-[90%] mx-auto mt-[15%] mb-5 flex flex-wrap flex-col items-center justify-between md:flex-row'>
      {tabData.map((item)=>(
        <div className='w-[325px] flex flex-col h-[420px] justify-between mb-10' key={item.id}>
          <div className="relative w-full h-[300px]">
            <div className="absolute top-4 cursor-pointer right-9"><FaHeart onClick={()=>handleLike(item.id)} className={red===item.id ? "text-[#e4143a] transition duration-[.01s]": "text-[#686868] transition duration-[.01s]"}/></div>
            <img className='rounded-[10px] w-full h-full box-border' src={item.url}/>
          </div>
          <div className="flex w-full justify-between items-center">
            <h3 className="mt-2">{item.title}</h3>
            <div className='flex items-center gap-2'><FaStar size={13} color='#222222'/>{item.star}</div>
          </div>
          <p className="text-[#717171]">Hosted by {item.host}</p>
          <p className="text-[#717171]">{item.date}</p>
          <h3>${item.price} night</h3>
        </div>
      ))}
    </div>
  )
}

export default Cards