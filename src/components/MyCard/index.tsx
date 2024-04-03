import { CreditCard } from "lucide-react"
import React from "react"


export const MyCard = () => {
    return (
        <div className="flex bg-gray-200 p-6 rounded-2xl mt-8 items-center mx-4">
            <CreditCard />
            <p className="font-medium text-sm ml-4">Meus cartões</p>
        </div>
    )
}