import { ChevronRight, CircleHelp, Shield, SlidersVertical, UserRound } from "lucide-react"
import React from "react"


export const Menu = () => {
    const items = [
        {
            name: 'Me ajuda',
            icon: CircleHelp
        },
        {
            name: 'Meus dados',
            icon: UserRound
        },
        {
            name: 'Configurar app',
            icon: SlidersVertical
        },
        {
            name: 'Segurança',
            icon: Shield
        },
        {
            name: 'Me ajuda',
            icon: CircleHelp
        },
        {
            name: 'Meus dados',
            icon: UserRound
        },
        {
            name: 'Configurar app',
            icon: SlidersVertical
        },
        {
            name: 'Segurança',
            icon: Shield
        },
    ].map((item, index) => ({id: index, ...item}))
    return (
        <div className="p-6 rounded-lg flex flex-col justify-center bg-white w-1/4 mt-8 shadow-lg gap-4">
            {
                items.map(item =>
                    <div
                    key={item.id} 
                    className="flex 
            transition ease-in-out delay-50 hover:translate-x-2  duration-50 justify-between">
                        <p className="flex w-full text-[#7a7a80] text-xs items-center"><item.icon className="mr-2" />{item.name}</p> <ChevronRight className="text-[#7a7a80]" />
                        <hr className="h-px bg-zinc-600 border-0 dark:bg-gray-700"></hr>
                    </div>
                )
            }

        </div>
    )
}