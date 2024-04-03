import React from 'react'
import Logo from '../../../../assets/nubanklogo.svg'


export const HeaderDesktop = () => {
    return (
        <div className='flex justify-between px-12 py-3 text-xs items-center bg-[#f7f7ff]'>
            <img src={Logo} className='w-10 h-10'/>
            <button className='bg-[#efefef] px-7 py-2 rounded-full  text-zinc-800 font-semibold text-xs'>Desconectar</button>
        </div>
    )
}