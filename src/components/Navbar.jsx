import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { toastSuccessNotify } from '../helpers/ToastNotify'

const Navbar = ({email}) => {
const navigate = useNavigate()

const{users, setUsers}=useContext(AuthContext)

const handleLogout=(email)=>{
const newlist = users.filter((item)=>item.email!==email)
setUsers(newlist)
navigate("/")
toastSuccessNotify('Logged out successfully')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-info gap-2 d-md-flex justify-content-end mb-1">
    {email ? (
      <>
      <button className="btn btn-primary me-3" onClick={()=>handleLogout(email)}>Logout</button>
      </>
    ) : (
      <>
        <button className="btn btn-primary" onClick={()=>navigate("/")}>Login</button>
      </>
    )}
  </nav>
  )
}

export default Navbar