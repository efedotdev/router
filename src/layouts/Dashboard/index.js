import React from 'react'
import Menu from '../../component/Menu'
import { Outlet } from 'react-router-dom'

function DashbordLayout() {
  return (
    <div>
      <Menu />
      <div id='content'>
       <Outlet />
      </div>
    </div>
  )
}

export default DashbordLayout