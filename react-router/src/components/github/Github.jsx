import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     // fetch('https://api.github.com/users/hiteshchoudhary')
    //     fetch('https://api.github.com/users/Subhas2003')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers:{data.followers}
            <img className=' rounded-full' src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github
export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/Subhas2003")
    return response.json()
}
