import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[60px] flex justify-between px-8 bg-gray-500 text-white items-center">
      <span>Фатихов Владислав</span>
      <span>
        <Link to="/" className="mr-6">
          Карточки товаров
        </Link>
        <Link to="/about">О продукте</Link>
      </span>
    </nav>
  )
}
