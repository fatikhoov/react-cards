import React from 'react'

export function HeaderTitle() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">
        Карточки товаров на React
      </h1>
      <pre className="w-[300px] whitespace-pre-wrap self-end">
        Карточки товаров подгружают по API через axios, есть loader. В кастомном
        модальном окне можно создать новый товар. Подробная информация скрытая,
        открывается п о кнопке.
      </pre>
    </>
  )
}
