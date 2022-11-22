import React from 'react'
import { NavLink } from 'react-router-dom'

export const NonPage = () => {
  return (
    <article className="article">
      <h1 className="article__title">Страница не найдена</h1>
      <p className="article__paragraph">
        Простие! Но вы перешли на адрес которого нет.
        <p className='non'><NavLink to={'/'}>На главную</NavLink></p>
      </p>
    </article>
  )
}

