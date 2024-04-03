import { ChevronRight, EyeOff } from "lucide-react"
import React from "react"

interface BankWalletProps {
className?: string
}

export const BankWalletDesktop = ({className}:BankWalletProps) => {
    return (
        <div className={className ? className : ''}>
            <div className="flex justify-between text-[#fefefe]  text-sm leading-6">
                <div>
                    <p>Olá, Jesiel Gomes</p>
                    <p className="">Conta</p>
                    <p className="font-bold text-lg">R$ 1000,69</p>
                </div>


                <button className="ml-8"><EyeOff width={18} height={18} /></button>
            </div>

        </div>
    )
}