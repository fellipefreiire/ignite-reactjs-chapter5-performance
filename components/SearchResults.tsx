import { ProductItem } from "./ProductItem"

interface SearcHResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResults({ results }: SearcHResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  )
}