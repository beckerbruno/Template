import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import StockList from '../components/stockList'
import DividendInfo from '../components/divInfo'
import { Stock } from '../lib/types'
import PortfolioSummary from '../components/portyfolioSummary'
import {db, auth} from '../lib/firebaseConfig'

const HomePage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [totalValue, setTotalValue] = useState(0)
  const [totalDividends, setTotalDividends] = useState(0)
  const [totalGrowth, setTotalGrowth] = useState(0)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchStocks(user.uid)
      }
    })

    return () => unsubscribe()
  }, [])

  const fetchStocks = async (userId: string) => {
    const stocksCollection = collection(db, `users/${userId}/stocks`)
    const stocksSnapshot = await getDocs(stocksCollection)
    const stocksList = stocksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Stock))
    setStocks(stocksList)

    // Calcular totais
    const value = stocksList.reduce((sum, stock) => sum + stock.currentPrice * stock.quantity, 0)
    const dividends = stocksList.reduce((sum, stock) => sum + stock.totalDividends, 0)
    const growth = stocksList.reduce((sum, stock) => sum + (stock.currentPrice - stock.purchasePrice) * stock.quantity, 0)

    setTotalValue(value)
    setTotalDividends(dividends)
    setTotalGrowth(growth)
  }

  const handleStockUpdate = (updatedStock: Stock) => {
    setStocks(prevStocks => prevStocks.map(stock => 
      stock.id === updatedStock.id ? updatedStock : stock
    ))
  }

  return (
    <div className="dashboard">
      <h1>Minha Carteira de Ações</h1>
      <PortfolioSummary totalValue={totalValue} totalGrowth={totalGrowth} />
      <DividendInfo totalDividends={totalDividends} />
      <StockList stocks={stocks} onStockUpdate={handleStockUpdate} />
    </div>
  )
}
export default HomePage;