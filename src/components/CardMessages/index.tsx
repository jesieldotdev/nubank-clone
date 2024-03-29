import { EllipsisVertical, ReceiptText } from "lucide-react"

interface CardMessagesProps{

}

export const CardMessages = () => {
    return (
        <div className="flex justify-between bg-zinc-50 rounded-2xl mt-8 p-4 mb-4">
        <div className="flex items-center gap-2">
            <ReceiptText width={32} height={32} className=" text-primary" />
            <p className="text-primary text-sm font-medium ">Novo boleto em seu CPF. Agende</p>
        </div>
        <button>
            <EllipsisVertical width={24} height={24} className="text-zinc-600" />
        </button>
        </div>
    )
}