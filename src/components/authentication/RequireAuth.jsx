import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate,useLocation } from 'react-router-dom'

export const RequireAuth = () => {
    const {currentUser} = useSelector(store => store.auth)
    const location = useLocation();
    
  return (
    currentUser.uid ? <Outlet /> : <Navigate to="/login" state={{from:location}} replace />
  )
}
