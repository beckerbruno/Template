import React, { useState } from 'react'
import { Stock } from '../types/types'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'

interface StockListProps {
  stocks: Stock[]
  onStockUpdate: (updatedStock: Stock) => void
}

export default function StockList({ stocks, onStockUpdate }: StockListProps) {
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleEdit = (stock: Stock) => {
    setEditingId(stock.id)
  }

  const handleSave = async (stock: Stock) => {
	const db = getFirestore();
	const stockRef = doc(db, `users/${stock.userId}/stocks/${stock.id}`);
	
	// Apenas os campos que precisam ser atualizados
	const stockDataToUpdate = {
	  quantity: stock.quantity,
	  purchasePrice: stock.purchasePrice,
	  currentPrice: stock.currentPrice,
	  totalDividends: stock.totalDividends,
	};
  
	try {
	  await updateDoc(stockRef, stockDataToUpdate);
	  onStockUpdate(stock); // Atualiza a lista localmente
	  setEditingId(null); // Sai do modo de edição
	} catch (error) {
	  console.error("Erro ao salvar dados da ação:", error);
	}
  };
  

  return (
    <div className="stock-list">
      <h2>Minhas Ações</h2>
      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Quantidade</th>
            <th>Preço de Compra</th>
            <th>Preço Atual</th>
            <th>Dividendos Totais</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>
                {editingId === stock.id ? (
                  <input 
                    type="number" 
                    value={stock.quantity} 
                    onChange={(e) => onStockUpdate({...stock, quantity: Number(e.target.value)})}
                  />
                ) : stock.quantity}
              </td>
              <td>
                {editingId === stock.id ? (
                  <input 
                    type="number" 
                    value={stock.purchasePrice} 
                    onChange={(e) => onStockUpdate({...stock, purchasePrice: Number(e.target.value)})}
                  />
                ) : `R$ ${stock.purchasePrice.toFixed(2)}`}
              </td>
              <td>
                {editingId === stock.id ? (
                  <input 
                    type="number" 
                    value={stock.currentPrice} 
                    onChange={(e) => onStockUpdate({...stock, currentPrice: Number(e.target.value)})}
                  />
                ) : `R$ ${stock.currentPrice.toFixed(2)}`}
              </td>
              <td>
                {editingId === stock.id ? (
                  <input 
                    type="number" 
                    value={stock.totalDividends} 
                    onChange={(e) => onStockUpdate({...stock, totalDividends: Number(e.target.value)})}
                  />
                ) : `R$ ${stock.totalDividends.toFixed(2)}`}
              </td>
              <td>
                {editingId === stock.id ? (
                  <button onClick={() => handleSave(stock)}>Salvar</button>
                ) : (
                  <button onClick={() => handleEdit(stock)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}