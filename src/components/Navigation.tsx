import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[60px] flex justify-between px-8 bg-gray-500 text-white items-center">
      <span>Hi</span>
      <span>
        <Link to="/" className="mr-6">
          Магазин
        </Link>
        <Link to="/about">Контакты</Link>
      </span>
    </nav>
  )
}
