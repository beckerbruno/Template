import React from 'react'

interface DividendInfoProps {
  totalDividends: number
}

export default function DividendInfo({ totalDividends }: DividendInfoProps) {
  return (
    <div className="dividend-info">
      <h2>Informações de Dividendos</h2>
      <p>Total de Dividendos Recebidos: R$ {totalDividends.toFixed(2)}</p>
    </div>
  )
}