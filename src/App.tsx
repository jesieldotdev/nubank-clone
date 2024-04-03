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
import { DesktopView } from './pages/Desktop'

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
      </> : 
      <DesktopView/>
}
    </div>
  )
}

export default App
