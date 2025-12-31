
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shops from './components/Shops/Shops'
import ResultChart from './components/ResultChart/ResultChart';
import ProductCharts from './components/ProductCharts/ProductCharts';

function App() {
  const shopPromised = fetch('shops.json').then(res=>res.json());

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Shops  shopPromised ={ shopPromised }></Shops>
      </Suspense>

      <ResultChart></ResultChart>
      <ProductCharts></ProductCharts>
    </>
  )
}

export default App
