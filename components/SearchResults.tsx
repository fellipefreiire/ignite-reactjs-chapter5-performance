import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

interface SearcHResultsProps {
  results: Array<{
    id: number
    price: number
    priceFormatted: string
    title: string
  }>
  onAddToWishList: (id: number) => void
  totalPrice: number
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearcHResultsProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
        )
      })}
    </div>
  )
}