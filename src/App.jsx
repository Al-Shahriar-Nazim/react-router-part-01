
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shops from './components/Shops/Shops'

function App() {
  const shopPromised = fetch('shops.json').then(res=>res.json());

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Shops  shopPromised ={ shopPromised }></Shops>
      </Suspense>
    </>
  )
}

export default App
