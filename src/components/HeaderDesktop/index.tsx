import Logo from '../../assets/nubanklogo.svg'

interface HeaderDesktopProps {

}

export const HeaderDesktop = () => {
    return (
        <div className='flex justify-between px-6 py-4 items-center'>
            <img src={Logo} className='w-10 h-10'/>
            <button className='bg-gray-200 px-7 py-2 rounded-full text-xs text-zinc-800 font-semibold'>Desconectar</button>
        </div>
    )
}