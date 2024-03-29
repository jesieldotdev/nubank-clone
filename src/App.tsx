// import './App.css'
import { AppBar } from './components/AppBar'
import { BankWallet } from './components/BankWallet'
import { CardCarrossel } from './components/CardCarosels'
import { CardMessages } from './components/CardMessages'
import CategoryScroll from './components/CategoryScroll'
import { MyCard } from './components/MyCard'

function App() {

  return (
    <div>
      <div className='bg-primary px-6 py-2'>
        <AppBar />
        <CardMessages />
      </div>
      <div className='py-6'>
        <BankWallet className='px-4' />
        <CategoryScroll />
        <MyCard/>
        <CardCarrossel />
      
      </div>

    </div>
  )
}

export default App
