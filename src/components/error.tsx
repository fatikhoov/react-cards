import React from 'react'
import { useProducts } from '../hook/products'

interface ErrorMessagePrors {
  error: string
}

export function Error({ error }: ErrorMessagePrors) {
  /* const { error } = useProducts() */
  return <p className="text-center text-red-700">{error}</p>
}
