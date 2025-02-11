import axios from 'axios'
import { useEffect, useState } from "react"

import { jwtDecode } from "jwt-decode";

const Me = () => {

    const [user, setUser] = useState({})
    //const [profile, setProfile] = useState({})

    useEffect(() => {

        const getData = async () => {

        if (localStorage.getItem('token') === null) {
            navigate({ pathname: '/' })
        } else {

            const decoded = await jwtDecode(localStorage.getItem('token'));

            let url = `${process.env.VITE_HCS_API}/noco/me`

            await axios({
        
                method: 'post',
                url,
                data : { data: { eid : decoded.sub.EID }, token: localStorage.getItem('token') }
        
            }).then(result => {

                const me = result.data[0]

                console.log(me)
                
                setUser(me)
                
            })
           .catch((err) => {
              console.log(err)
            })

        }}

        getData()
    }, [])

    return (
        <div className="col-span-4 col-start-5 grid grid-cols-8" >
            <div className="col-start-1 col-span-6 bg-green-200 space-y-4">
                
                <h1>{`Welcome ${user.FirstName}!`}</h1>
                <p>Below you will find some useful information and some quick goto links.</p>

                <div classNme="h-12">&nbsp;</div>

                <h2>Email Signatures</h2>
                <p>Click on the buttons below to see the various email signatures that you can use in your email clients.</p>
                <div className="flex space-x-2">
                    <button className="bg-red-500  hover:bg-red-700  cursor-pointer rounded-2xl p-5 text-white font-bold">Full Signature</button>
                    <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-2xl p-5 text-white font-bold">Reply Signature</button>
                </div>

                <div classNme="h-12">&nbsp;</div>

                <h2>Print Balance</h2>

                <div classNme="h-12">&nbsp;</div>

                <h2>Alarm Details</h2>

                <div classNme="h-12">&nbsp;</div>

                <h2>VoIP Details</h2>

                <div classNme="h-12">&nbsp;</div>

                <h2>Device Details</h2>

                <div classNme="h-12">&nbsp;</div>

            </div>
            <div className="col-start-7 col-span-2 bg-blue-200">
                <img src={`${process.env.VITE_STATIC_URL}/photos/${user.EID}-R.jpg`} alt="staff photo" />
            </div>
        </div>
    )
}

export default Me