import React from 'react'
import "./profile.css"
import { useSelector ,useDispatch} from 'react-redux'
import { logout } from '../../redux/reducers/authSlice'


export const Profile = () => {
    const {currentUser} = useSelector(store => store.auth)
    const dispatch = useDispatch();
    console.log(currentUser.email)
  return (
    <div className='profile-container'>
        <h1 className='mb-lg'>My Profile</h1>
        <h3>Email : {currentUser.email}</h3>
        <button className='auth-btn reset' onClick={()=>dispatch(logout())}>Log out</button>
    </div>
  )
}
