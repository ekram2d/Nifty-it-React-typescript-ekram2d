import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import Home from './components/Home/Home/Home'

function App() {
  const [count, setCount] = useState<number>(0);


  return (
    <>
   <Header></Header>
   <Home></Home>
   <Footer></Footer>
   
    </>
  )
}

export default App
