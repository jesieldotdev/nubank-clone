import { ChevronRight } from "lucide-react"

interface BankWalletProps {
className?: string
}

export const BankWallet = ({className}:BankWalletProps) => {
    return (
        <div className={className ? className : ''}>
            <div className="flex justify-between">
                <div>
                    <p className="font-semibold text-lg">Conta</p>
                    <p className="font-semibold text-lg">R$ 303,69</p>
                </div>

                <div>
                    <ChevronRight className="text-zinc-700" />
                </div>

            </div>

            <p className="mt-6 font-light text-gray-600">R$ 277,65 em outro banco</p>
        </div>
    )
}