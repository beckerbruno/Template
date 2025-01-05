import React from 'react'

interface PortfolioSummaryProps {
  totalValue: number
  totalGrowth: number
}

export default function PortfolioSummary({ totalValue, totalGrowth }: PortfolioSummaryProps) {
  return (
    <div className="portfolio-summary">
      <h2>Resumo da Carteira</h2>
      <p>Valor Total: R$ {totalValue.toFixed(2)}</p>
      <p>Valorização Total: R$ {totalGrowth.toFixed(2)} ({(totalGrowth / totalValue * 100).toFixed(2)}%)</p>
    </div>
  )
}