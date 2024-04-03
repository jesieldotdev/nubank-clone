import { EyeOff, Eye } from "lucide-react"
import React from "react"

interface BankWalletProps {
    className?: string
}

export const BankWalletDesktop = ({ className }: BankWalletProps) => {
    const [active, setActive] = React.useState<boolean>(false)
    const [transformed, setTransformed] = React.useState<boolean>(false)
    
    function hide() {
        if (!active) return ''
        return 'bg-[#fefefe] rounded-sm select-none'
    }


    const icon = {
        icon: !active ? EyeOff : Eye
    }

    const handleClick = () => {
        setTransformed(!transformed); // Alterna o estado de transformação
    }

    return (
        <div className={className ? className : ''}>
            <div className="flex justify-between text-[#fefefe]  text-sm leading-6">
                <div>
                    <p>Olá, Jesiel Gomes</p>
                    <p className="">Conta</p>
                    <p className={`font-bold text-lg ${hide()} transition-all duration-500 ease-`}>R$ 1000,69</p>
                </div>


                <button onClick={() => {
                    setActive(!active)
                    handleClick()
                    }} className={`ml-8 transition ease-in-out delay-50 hover:-translate-y-2 duration-50 cursor-pointer ${transformed ? 'transform translate-y-0' : ''}`}> <icon.icon width={18} height={18} /></button>
            </div>

        </div>
    )
}