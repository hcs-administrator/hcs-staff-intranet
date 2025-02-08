import { useEffect, useState } from "react"

import TopHeader from "../components/TopHeader"
import SideBar from "../components/SideBar"

import { Outlet } from "react-router-dom";

import axios from 'axios'

export default function Dashboard() {

    const [details, setDetails] = useState({})


    useEffect(() => {

        const getData = async () => {
    
            await axios({

                method: 'get',
                url: `${import.meta.env.VITE_NOCO_URL}/api/v1/db/data/v1/Staff/Staff/find-one?fields=EID,FirstName&where=(EID,eq,JK)`,
                headers : {
                'xc-token': import.meta.env.VITE_NOCO_TOKEN,
                }

            }).then(async resp => {

                setDetails(resp.data)

            })

        }
        
        if (Object.keys(details).length === 0 && localStorage.getItem('token') !== null) {
            getData()
        }
      
    })

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