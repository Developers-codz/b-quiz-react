import { Outlet,Navigate,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

export const RestrictRoute = () => {
    const {currentUser} = useSelector(store => store.auth)
    const location = useLocation();
  return (
    currentUser.uid ?<Navigate to={"/"} replace state={{from : location}}/> :<Outlet />
  )
}
