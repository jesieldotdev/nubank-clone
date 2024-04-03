import { DollarSign, LucideIcon } from "lucide-react"
import React from "react"

interface CardProps {
    title?: string
    icon: React.JSX.Element
}

export const Card = ({
    icon,
    title
}: CardProps) => {
    return (
        <div className="bg-white rounded-lg flex flex-col py-4 gap-2 items-center text-center w-44 transition ease-in-out delay-50 hover:-translate-y-2  duration-50 shadow-zinc-400/40 shadow-lg">
            <div className="rounded-full p-6 bg-gray bg-[#e8e8f0]">
                {icon}
            </div>
            <p className="text-[#7a7a80] text-xs font-medium w-full">{title}</p>

        </div>
    )
}