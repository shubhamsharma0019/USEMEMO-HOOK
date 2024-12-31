
import { useEffect, useMemo,useState } from 'react';
import './App.css'


function App() {
  const [exchange1Data,setExchenge1Data] = useState({});
  const [exchange2Data,setExchange2Data] = useState({});
  const [bankData,setBankData] = useState({});

  useEffect(()=>{
    setExchenge1Data({
      returns:100
    })
  },[])

  useEffect(()=>{
    setExchange2Data({
      returns:100
    })
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income:100
      })
    },5000)
  },[])
  const cryptoCurrency = useMemo(()=>{
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])

  const incomeTax = (cryptoCurrency +bankData.income) * 0.3;
   return (
    <>
      the over all income tax is {incomeTax}
    </>
  )
}

export default App
