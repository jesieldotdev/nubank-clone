import React from "react"
import { BankWalletDesktop } from "./components/BankWalletDesktop"
import { HeaderDesktop } from "./components/HeaderDesktop"
import { Messages } from "./components/Messages"
import { Card } from "./components/Card"
import Pix from '../../assets/pix.svg';
import Transfer from '../../assets/transfer.svg';
import Deposit from '../../assets/deposit.svg';
import { Barcode, DollarSign, DownloadCloud, Smartphone, Upload, UploadCloud } from "lucide-react"
import SvgIcon from "../../components/SVG"
import { Menu } from "./components/Menu"
import { ExpenseCard } from "./components/CreditCard"

interface DesktopViewProps {

}

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
        <div className="bg-[#efefef] h-full">
            <div className='bg-customGray'>
                <HeaderDesktop />
                <Messages />
            </div>

            <div className="px-12 py-8">

                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {
                        items.map(category =>
                            <Card
                                key={category.name}
                                icon={<category.icon color="#820ad1" />
                                }
                                title={category.name} />)
                    }
                </div>

                <div className="flex gap-4">
                    <Menu />
                    <ExpenseCard />
                </div>
            </div>
        </div>
    )
}