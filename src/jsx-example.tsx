import React, { createElement as e, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  /* return (<h1>App start ...</h1>) */
  /* return React.createElement('h1', {}, 'New start done ...') */
  return e('header', { className: 'header' }, [
    e('nav', { className: 'menu__nav', key: 1 }, [
      e('ul', { className: 'menu__list', key: 1 }, [
        e(
          'li',
          { className: 'menu__item', key: 1 },
          `Главная страница ${count}`
        ),
      ]),
    ]),
    e(
      'button',
      {
        className: 'primary py-2 px-2 border',
        key: 2,
        onClick: () => setCount(count + 1),
      },
      'Заказать разработку сайта'
    ),
  ])
}
