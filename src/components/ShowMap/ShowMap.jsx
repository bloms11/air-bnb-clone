import React from 'react'
import {ImMap} from 'react-icons/im'
const ShowMap = () => {
  return (
    <div className=' hover:scale-[1.1] fixed bottom-[100px] right-[45%] rounded-full py-3 cursor-pointer flex items-center gap-3 px-4 bg-[#222222] text-white'>
        Show map 
        <ImMap/>
    </div>
  )
}

export default ShowMap