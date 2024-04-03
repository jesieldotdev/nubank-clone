import React from "react"
import { HeaderDesktop } from "./components/HeaderDesktop"
import { Messages } from "./components/Messages"
import { Card } from "./components/Card"
import { Barcode, DollarSign, DownloadCloud, Smartphone, UploadCloud } from "lucide-react"
import { Menu } from "./components/Menu"
import { ExpenseCard } from "./components/CreditCard"


export const DesktopView = () => {
    const items = [
        {
            name: 'Área pix',
            icon: DollarSign
        },
        {
            name: 'Pagar',
            icon: Barcode
        },
        {
            name: 'Transferir',
            icon: UploadCloud
        },
        {
            name: 'Depositar',
            icon: DownloadCloud
        },
        {
            name: 'Pegar emprestado',
            icon: DollarSign
        },
        {
            name: 'Recarga de celular',
            icon: Smartphone
        },
    ]
    return (
        <div className="bg-[#f7f7ff] h-full">
            <div className='bg-customGray'>
                <HeaderDesktop />
                <Messages />
            </div>

            <div className="px-12 py-8">

                <div className="flex gap-8">
                    {
                        items.map(category =>
                            <Card
                                key={category.name}
                                icon={<category.icon className="text-primary" />
                                }
                                title={category.name} />)
                    }
                </div>

                <div className="flex gap-8">
                    <Menu />
                    <ExpenseCard />
                </div>
            </div>
        </div>
    )
}