// src/components/CategoryScroll.tsx
import { ArrowLeftRight, Banknote, Barcode, DollarSign, HandCoins, Smartphone, Wallet } from 'lucide-react';
import React from 'react';



interface CategoryScrollProps {
}

export const CategoryScroll: React.FC<CategoryScrollProps> = () => {
  const [selected, setSelected] = React.useState<number>(0)
  const categories = [
 {  
  name: 'Área Pix',
  icon: DollarSign
 },
 {  
  name: 'Pagar',
  icon: Barcode
 },
 {  
  name: 'Pagar emprestado',
  icon: HandCoins
 },
 {  
  name: 'Transferir',
  icon: Banknote
 },
 {  
  name: 'Recarga de celular',
  icon: Smartphone
 },
 {  
  name: 'Cobrar',
  icon: HandCoins
 },
 {  
  name: 'Caixinhas',
  icon: Wallet
 },
 
 // Adicione mais categorias conforme necessário
].map((item,index) => ({id:index, ...item}))

function selectedClass(sel:number){
  if(sel === selected)return 'bg-zinc-200 text-black'
  else return 'bg-zinc-800 text-white'
}
  
 return (<div className="flex overflow-x-auto gap-2 w-screen mt-8 w-screen w-auto px-4">
      {categories.map((category) => (
        <div key={category.id} className="flex-shrink-0 justify-center text-center  max-w-24 ">
          <button 
          onClick={()=>setSelected(category.id)}
          className={`inline-block  text-sm font-semibold px-6 py-6 rounded-full bg-zinc-200 text-black w-20 h-20 text-center flex justify-center items-center` }>
            <category.icon size={24} />
          </button>
          <p className='mt-2 text-sm font-semibold max-w-20 text-center'>{category.name}</p>
        </div>
      ))}
    </div>
   
 );
};

export default CategoryScroll;
