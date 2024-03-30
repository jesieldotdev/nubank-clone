// src/components/CategoryScroll.tsx
import { ArrowLeftRight, Banknote, Barcode, DollarSign, HandCoins, Smartphone, Wallet } from 'lucide-react';
import React from 'react';



interface CategoryScrollProps {
}

export const CardCarrossel: React.FC<CategoryScrollProps> = () => {
    const [selected, setSelected] = React.useState<number>(0)
    const categories = [
        {
            name: 'Facilite seus planos futuros: guarde dinheiro na Caixinhas',
            icon: DollarSign
        },
        {
            name: 'Facilite seus planos futuros: guarde dinheiro na Caixinhas',
            icon: DollarSign
        },


        // Adicione mais categorias conforme necessário
    ].map((item, index) => ({ id: index, ...item }))

    return (<div className="flex overflow-x-auto gap-2 mt-8 px-4">
        {categories.map((category) => (
            <div key={category.id} className="flex-shrink-0 justify-center text-left  w-5/6 ">
                <button
                    onClick={() => setSelected(category.id)}
                    className={`text-sm font-normal px-6 py-6 rounded-lg bg-zinc-200 text-black   text-left flex justify-center items-center h-auto`}>
                    {category.name}

                </button>
            </div>
        ))}
    </div>

    );
};

