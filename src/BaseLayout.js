import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Pages/Login'
import FirstPage from './Pages/FirstPage'
import Menu from './components/Menu'
export default function BaseLayout(props) {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  )
}
