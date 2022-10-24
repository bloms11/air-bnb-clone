import React from 'react'
import { VscDebugStackframeDot } from 'react-icons/vsc'
import {BiGlobe} from 'react-icons/bi'
import {BsCurrencyDollar} from 'react-icons/bs'
import {FiChevronUp} from 'react-icons/fi'
const Footer = () => {
  return (
    <div className='fixed border-t-[1px] border-[#DDDDDD] bottom-0 bg-white w-full flex justify-center'>
        <div className="w-[90%] flex justify-between">
            <div className="w-[500px] py-3 flex justify-between items-center">
                <p>© 2022 Airbnb, Inc.</p>
                <p><VscDebugStackframeDot size={8}/></p>
                <p>Privacy</p>
                <p><VscDebugStackframeDot size={8}/></p>
                <p>Terms</p>
                <p><VscDebugStackframeDot size={8}/></p>
                <p>Sitemap</p>
                <p><VscDebugStackframeDot size={8}/></p>
                <p>Destinations</p>
            </div>
            <div className="w-[400px] py-3 flex justify-between items-center">
                <div className='flex gap-2 items-center'>
                    <BiGlobe/>
                    <h3>English</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsCurrencyDollar/>
                    <h3>USD</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3>Support & Resources</h3>
                    <FiChevronUp/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer