import React, { useState } from 'react'
import { Iproduct } from '../models'
import axios from 'axios'
import { Error } from './error'

interface CreateProductProps {
  onCreate: (product: Iproduct) => void
}

const productData: Iproduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 4.3,
    count: 10,
  },
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    if (value.trim().length === 0) {
      setError('Пожалуйста введите корректный зоголовок')
      return
    }
    productData.title = value
    const response = await axios.post<Iproduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    onCreate(response.data)
  }
  const changeHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setValue(v.target.value)
  }

  return (
    <form className="flex items-center gap-8 flex-col" onSubmit={submitHandler}>
      <input
        type="text"
        className="w-full px-2 py-4 mb-2 outline-0 border-b-2"
        placeholder="Введи заголовок продукта ..."
        value={value}
        onChange={changeHandler}
        /* onChange={(v) => setValue(v.target.value)} */
      />
      {error && <Error error={error} />}
      <button
        className="w-full border rounded-xl px-2 py-4 bg-yellow-400"
        type="submit"
      >
        Создать
      </button>
    </form>
  )
}
