import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

interface SearcHResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResults({ results }: SearcHResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  )
}