import React, { useState } from 'react'
import { Iproduct } from '../models'
interface ProductProps {
  product: Iproduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = [
    'py-2 px-4 border bg-yellow-400 rounded-xl',
    btnBgClassName,
  ]

  return (
    <div className="border rounded-2xl w-80 h-min py-8 px-4 shadow-2xl flex items-center gap-8 flex-col">
      <div className="flex flex-col items-center gap-8">
        <div className="min-h-40 flex items-center gap-1 flex-col">
          <img className="w-28 h-28" src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
        <div>
          <button
            onClick={() => setDetails((s) => !s)}
            className={btnClasses.join(' ')}
          >
            {details ? 'Закрыть детали' : 'Открыть детали'}
          </button>
        </div>
      </div>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Рейтинг:{' '}
            <span style={{ fontWeight: '700' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  )
}
