import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

const ErrorPage = () => (
  <div className="ErrorPage">
    <div className="ErrorPage__Context">
      <img className="ErrorPage__Image" alt="errorPageGirlAlt"/>
      <p className="ErrorPage__Description">Что-то пошло не так...</p>
    </div>
    <div className="ErrorPage__LinkContainer">
      <Link className="ErrorPage__Link" to='/movies'>Вернуться</Link>
    </div>
  </div>
)

export default ErrorPage
