import { CreditCard } from "lucide-react"
import React from "react"
import { BarProgressBalance } from "../BarProgressBalance"
import { formatPriceToPtBr } from "../../../../utils/formatPrice";


export const ExpenseCard = () => {
    const limit = 300
    const now = 250.54;
    const future = 28.79;
    const total = limit - now- future;

    return (
        <div className="bg-white rounded-lg mt-8 p-6 gap-4 shadow-lg h-44 ">
            <div className="flex gap-2 items-center text-sm ">
                <CreditCard width={24} height={24} color="#7a7a80" />
                <p className="font-medium">Cartão de crédito</p>
                <div className="rounded-full h-2 w-2 bg-gray-400" />
                <p className="text-[#7a7a80]">Fecha em <span className="font-semibold  ">01 JAN</span></p>
            </div>

            <div className="flex gap-2 mt-4">

                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-green-400 " />
                    <div>
                        <p className="font-bold text-lg">{formatPriceToPtBr(total)}</p>
                        <p className="text-[#7a7a80] font-medium">Limite disponivel</p>
                    </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-blue-400 " />
                    <div>
                        <p className="font-bold text-lg">{formatPriceToPtBr(now)}</p>
                        <p className="text-[#7a7a80] font-medium">Fatura atual</p>
                    </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                    <div className="rounded-full h-2 w-2 bg-orange-400 " />
                    <div>
                        <p className="font-bold text-lg">{formatPriceToPtBr(future)}</p>
                        <p className="text-[#7a7a80] font-medium">Próximas faturas</p>
                    </div>

                </div>


            </div>
            <BarProgressBalance
                now={now}
                future={future}
                total={total}
                limit={limit}
                />


        </div>
    )
}