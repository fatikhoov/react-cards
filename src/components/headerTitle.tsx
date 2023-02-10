import React from 'react'

export function HeaderTitle() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Карточки товаров на React c TypeScript
      </h1>
      <pre className="w-[300px] whitespace-pre-wrap self-end">
        <p>Подгружаю по API через axios.</p>
        <p>В кастомном модальном окне можно создать новый товар.</p>
      </pre>
    </>
  )
}
