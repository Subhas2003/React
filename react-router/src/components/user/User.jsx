import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {uderId}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User:{uderId}
    </div>
  )
}

export default User
