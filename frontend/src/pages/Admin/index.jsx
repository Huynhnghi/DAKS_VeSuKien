import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/NavbarAdmin'
import Breadcrumbs from '../../components/BreadCrumbs/BreadCrumbs';

function AdminPages() {
  return (
    <>
      <Breadcrumbs />
      <div className="d-flex">
        <div className="w-[20%]">
          <Navbar />
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </ >
  )
}

export default AdminPages