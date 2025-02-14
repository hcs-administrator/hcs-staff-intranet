import axios from 'axios'
import { useEffect, useState } from "react"

import { jwtDecode } from "jwt-decode";

import Profile_Papercut from "../components/Widgets/Profile_Papercut"
import Profile_Alarms from '../components/Widgets/Profile_Alarms';
import Profile_Voip from '../components/Widgets/Profile_Voip';
import Profile_Devices from '../components/Widgets/Profile_Devices'
import Profile_Photo from '../components/Widgets/Profile_Photo'

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

        //`${process.env.VITE_STATIC_URL}/signatures/main/index.html?token=${localStorage.getItem('token')}&eid=${user.EID}`
        //`${process.env.VITE_STATIC_URL}/signatures/reply/index.html?token=${localStorage.getItem('token')}&eid=${user.EID}`

        getData()
    }, [])

    return (
        <div className="col-span-4 col-start-5 grid grid-cols-10" >
            <div className="col-start-1 col-span-7 space-y-2">
                
                <h1>{`Welcome ${user.FirstName}!`}</h1>
                <p>Below you will find some useful information and some quick goto links.</p>

                <div className="h-4">&nbsp;</div>

                <h2>Email Signatures</h2>
                <p>Click on the buttons below to see the various email signatures that you can use in your email clients.</p>
                <div className="flex space-x-2">
                    <button onClick={() => window.open(`${process.env.VITE_STATIC_URL}/signatures/main/index.html?token=${localStorage.getItem('token')}&eid=${user.EID}`, "_blank")}  className="bg-red-500  hover:bg-red-700  cursor-pointer rounded-2xl p-5 text-white visited:text-white font-bold">Full Signature</button>
                    <button onClick={() => window.open(`${process.env.VITE_STATIC_URL}/signatures/reply/index.html?token=${localStorage.getItem('token')}&eid=${user.EID}`, "_blank")}  className="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-2xl p-5 text-white visited:text-white font-bold">Reply Signature</button>
                </div>

                <div className="h-4">&nbsp;</div>

                <Profile_Papercut />
                <Profile_Alarms details={user}/>
                <Profile_Voip details={user}/> 
                <Profile_Devices details={user} />

            </div>
            <div className="col-start-8 col-span-2">
                {/* <img src={`${process.env.VITE_STATIC_URL}/photos/${user.EID}-R.jpg`} alt="staff photo" className='rounded-2xl' /> */}
                <Profile_Photo details={user} />
            </div>
        </div>
    )
}

export default Me