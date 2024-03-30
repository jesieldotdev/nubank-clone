import { ChevronRight, EyeOff } from "lucide-react"

interface BankWalletProps {
className?: string
}

export const BankWalletDesktop = ({className}:BankWalletProps) => {
    return (
        <div className={className ? className : ''}>
            <div className="flex justify-between text-zinc-50 w-60 ">
                <div>
                    <p>Olá, Jesiel Gomes</p>
                    <p className="text-lg">Conta</p>
                    <p className="font-bold text-lg">R$ 1000,69</p>
                </div>


                <button className="px-8"><EyeOff /></button>
            </div>

        </div>
    )
}