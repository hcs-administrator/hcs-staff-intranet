import { Fragment, useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Image from 'next/image'
import Link from 'next/link'

export const MenuContacts = () => {

    const { data: session } = useSession()
    //const [notices, setNotices] = useState([])
  
    if (session) {
      return (
        <div className="bg-orange-300 text-black w-full h-64 md:h-16 grid grid-cols-1 md:grid-cols-7 items-center">
            <Link href="/contacts_dept"><a className="text-center text-black hover:text-orange-400 hover:bg-slate-200 text-md p-4">{"Departments"}</a></Link>
            <Link href="/contacts_dept_full"><a className="text-center text-black hover:text-orange-400 hover:bg-slate-200 text-md p-4">{"Departments Full"}</a></Link>
            <Link href="/contacts_staff"><a className="text-center text-black hover:text-orange-400 hover:bg-slate-200 text-md p-4">{"Staff List"}</a></Link>
        </div>
      )
    } else {
        return (
            <div>
              <div className="bg-sky-900 w-full h-24 px-4 flex flex-row items-center">
                
                <div className="flex flex-row items-center w-1/3">
                    <Image className="py-4" src="/hcs_logo.png" alt="logo" width={70} height={65} />
                    <h1 className="text-white text-3xl px-4">HCS Intranet</h1>
                </div>

                <div className="flex flex-row text-white justify-end w-full pr-8">

                    <button className="bg-slate-400 p-4 text-white w-48 rounded-xl border-4 border-sky-200" onClick={() => signIn('google')}>
                        <p className="text-xl">Sign In</p>
                    </button>

                </div>
    
              </div>
              <div className="bg-red-900 w-full h-12 px-4 flex items-center" />
            </div>
        )
    }

}