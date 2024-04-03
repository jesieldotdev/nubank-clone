import React from "react"
import { BankWalletDesktop } from "../BankWalletDesktop"

export const Messages = () => {
    return (
        <div className='bg-primary px-12 py-6 flex gap-4 text-xs'>
            <BankWalletDesktop className='items-center flex mr-6' />
            <div className="bg-customGray2 rounded-xl mr-4  items-center  px-6 py-4 max-w-72 ">
                <p className="font-light">Veja os descontos que preparamos para você no<br />  <span className='text-primary'>Shopping Nubank</span></p>
            </div>
            <div className="bg-customGray2 rounded-xl mr-12 items-center flex px-6 py-4 max-w-72">
                <p className="font-light"><span className='text-primary'>25% de desconto</span> em empréstimo com portabilidade de salário </p>
            </div>

        </div>
    )
}