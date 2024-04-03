import { CreditCard } from "lucide-react"
import React from "react"

interface CreditCardProps {

}

export const ExpenseCard = () => {
    return (
        <div className="bg-white rounded-lg mt-8 p-6 gap-4 shadow-lg h-44 ">
            <div className="flex gap-2 items-center text-sm ">
                <CreditCard color="#7a7a80" />
                <p className="">Cartão de crédito</p>
                <div className="rounded-full h-2 w-2 bg-gray-400" />
                <p>Fecha em <span className="font-semibold text-[#7a7a80] ">01 JAN</span></p>
            </div>

            <div className="flex gap-2 mt-4">

                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-green-400 " />
                    <div>
                        <p className="font-bold text-lg">R$ 3.968,32</p>
                        <p className="text-[#7a7a80] font-medium">Limite disponivel</p>
                    </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-blue-400 " />
                    <div>
                        <p className="font-bold text-lg">R$ 416,70</p>
                        <p className="text-[#7a7a80] font-medium">Fatura atual</p>
                    </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-orange-400 " />
                    <div>
                        <p className="font-bold text-lg">R$ 264,98</p>
                        <p className="text-[#7a7a80] font-medium">Próximas faturas</p>
                    </div>
                </div>

            </div>

        </div>
    )
}