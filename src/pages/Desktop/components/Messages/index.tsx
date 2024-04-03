import React from "react"
import { BankWalletDesktop } from "../BankWalletDesktop"

interface MessagesProps {

}

export const Messages = () => {
    return (
        <div className='bg-primary px-12 py-6 grid grid-cols-3 gap-4 text-xs'>
            <BankWalletDesktop className='items-center flex' />
            <div className="bg-customGray2 rounded-xl mr-12  items-center flex px-6 py-4 w-auto ">
                <p className="font-light">Veja os descontos que preparamos para você no<br />  <span className='text-primary'>Shopping Nubank</span></p>
            </div>
            <div className="bg-customGray2 rounded-xl mr-12 items-center flex px-6 py-4 ">
                <p className="font-light"><span className='text-primary'>25% de desconto</span> em empréstimo com portabilidade de salário </p>
            </div>

        </div>
    )
}