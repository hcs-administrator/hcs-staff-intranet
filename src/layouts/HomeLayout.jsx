import { useEffect, useState } from "react"

import TopHeader from "../components/TopHeader"
import SideBar from "../components/SideBar"

import { Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import axios from 'axios'

export default function Dashboard() {

    const [details, setDetails] = useState({})

    const navigate = useNavigate()

    useEffect(() => {

        const getData = async () => {

            if (localStorage.getItem('token') === null) {
                navigate({ pathname: '/' })
            } else {

                const decoded = await jwtDecode(localStorage.getItem('token'));

                let url = `${process.env.VITE_HCS_API}/noco/name-only`
    
                await axios({
            
                    method: 'post',
                    url,
                    data : { data: { eid : decoded.sub.EID }, token: localStorage.getItem('token') }
            
                }).then(result => {
                    
                    setDetails(result.data[0])
                    
                })
               .catch((err) => {
                  console.log(err)
                  document.querySelector('#wrongData').classList.remove('hidden')
                })

            }

        }
        
        getData()
      
    }, [localStorage.getItem('token')])

    return (
        <div>

            <TopHeader heading="Staff Intranet" subHeading={`${Object.keys(details).length > 0 ? 
            `Hi ${details.FirstName}, please select where you want to go from the menu below` : 
            "Please login to see more details"}`} 
            />

            <div className="grid grid-cols-12 gap-0">
                <SideBar className="col-span-2 bg-slate-800 text-white min-h-screen max-h-full " />
                <div className="col-start-3 col-span-10 p-2">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}