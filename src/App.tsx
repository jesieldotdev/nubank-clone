// import './App.css'
import React from 'react'
import { AppBar } from './components/AppBar'
import { BankWallet } from './components/BankWallet'
import { BankWalletDesktop } from './components/BankWalletDesktop'
import { CardCarrossel } from './components/CardCarosels'
import { CardDesktop } from './components/CardDesktop'
import { CardMessages } from './components/CardMessages'
import CategoryScroll from './components/CategoryScroll'
import { HeaderDesktop } from './components/HeaderDesktop'
import { MyCard } from './components/MyCard'

function App() {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
      const checkMobile = () => {
          setIsMobile(window.innerWidth <= 768); // 768px é um breakpoint comum para dispositivos móveis
      };

      // Verifica a largura da janela quando o componente é montado
      checkMobile();

      // Atualiza o estado quando a janela é redimensionada
      window.addEventListener('resize', checkMobile);

      // Limpa o evento quando o componente é desmontado
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      {isMobile ? <>
        <div className='bg-primary px-6 py-2'>
          <AppBar />
          <CardMessages />
        </div>
        <div className='py-6'>
          <BankWallet className='px-4' />
          <CategoryScroll />
          <MyCard />
          <CardCarrossel />

        </div>
      </> : <>
        <div className='bg-customGray'>
          <HeaderDesktop />
          <div className='bg-primary px-12 py-6 grid grid-cols-3 gap-4'>
            <BankWalletDesktop className='items-center flex' />
            <div className="bg-customGray2 rounded-xl mr-12  items-center flex px-6 py-4 w-auto ">
              <p className="font-light">Veja os descontos que preparamos para você no<br/>  <span className='text-primary'>Shopping Nubank</span></p>
            </div>
            <div className="bg-customGray2 rounded-xl mr-12 items-center flex px-6 py-4 ">
              <p className="font-light"><span className='text-primary'>25% de desconto</span> em empréstimo com portabilidade de salário </p>
            </div>
         
          </div>
        </div>
      </>}
    </div>
  )
}

export default App
