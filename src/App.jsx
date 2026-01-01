
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shops from './components/Shops/Shops'
import ResultChart from './components/ResultChart/ResultChart';
import ProductCharts from './components/ProductCharts/ProductCharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

function App() {
  const shopPromised = fetch('shops.json').then(res=>res.json());
  const marksPromised = axios('marksData.json');

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <Shops  shopPromised ={ shopPromised }></Shops>
      </Suspense>

      <ResultChart></ResultChart>
      <ProductCharts></ProductCharts>

      <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <MarksChart marksPromised={marksPromised}></MarksChart>
      </Suspense>
    </>
  )
}

export default App
