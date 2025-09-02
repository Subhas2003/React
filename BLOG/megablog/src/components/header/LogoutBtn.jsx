import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'


const Logout = () => {

    const dispatch = useDispatch()
    const logoutHandeler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandeler}
        ></button>
    )
}

export default Logout
