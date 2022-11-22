import { Fragment, useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Image from 'next/image'
import Link from 'next/link'

export const Menu = () => {

    const { data: session } = useSession()
      
    if (session) {
      return (

        <div>
          <div className="grid grid-cols-icon md:grid-cols-icon-md pl-4 items-center w-full h-16 order-1 bg-hcs-blue">
            <Image className="py-4" src="/hcs_logo.png" alt="logo" width={35} height={40} />
            <h1 className="text-white text-2xl px-4 text-left">HCS Intranet</h1>
            <div className="hidden md:flex flex-row-reverse">

                <div className="w-full h-12 md:h-auto grid md:grid-cols-5 items-center order-3">
                  <Link href="/"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Home"}</a></Link>
                          <Link href="/contacts/stafflist"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Contacts"}</a></Link>
                          <Link href="/howto"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"How-To's"}</a></Link>
                          <Link href="/briefings"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Briefings"}</a></Link>
                          <Link href="/help"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Help"}</a></Link>
                </div>

                <div className="w-64 h-16 pl-6 pr-2">
                  <button className="bg-hcs-blue-off mt-1 px-2 text-sky-500 w-full rounded-xl border border-gray-400 h-14" onClick={() => signOut()}>
                      
                    <div className="grid grid-cols-button h-16">
                        <p className="text-white grid content-center">Hi {session.user.name.split(" ")[0]}</p>

                        <div className="row-span-2 grid content-center -mt-2">
                          <Image 
                            src={`https://hcs.net.nz/photos/STAFF_PHOTOS/${session.user.email.split("@")[0].toUpperCase()}-S.jpg`} 
                            alt={session.user.email.split("@")[0]} width={100} height={100} 
                            className="rounded-full"
                          />
                        </div>

                        <span className='text-xs text-orange-300'>Click to sign out</span>
                    </div>

                  </button>
                </div>

            </div>
            <button id="menuButton" className="bg-hcs-blue w-full h-12 sm:h-12 px-4 grid md:hidden justify-center content-center text-2xl" onClick={() => {
              document.querySelector('#mobileMenu').classList.toggle('hidden')
              document.querySelector('#menuButton').innerHTML = document.querySelector('#menuButton').innerHTML == "x" ? "=" : "x"
            }}>
              <h1 className="text-white text-2xl px-4 text-left">=</h1>
            </button>
          </div>

          
          <div id="mobileMenu" className="hidden md:hidden">
            <div className="h-auto bg-sky-900 grid grid-rows-mobile-menu px-2 pt-4">

                <div className="w-full h-12 md:h-auto grid grid-cols-1 md:grid-cols-5 items-center order-3">
                  <Link href="/"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Home"}</a></Link>
                          <Link href="/contacts/stafflist"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Contacts"}</a></Link>
                          <Link href="/howto"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"How-To's"}</a></Link>
                          <Link href="/briefings"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Briefings"}</a></Link>
                          <Link href="/help"><a className="m-1 bg-sky-600 md:bg-hcs-blue md:m-0 text-center text-white hover:text-white hover:bg-sky-800 text-md p-2 md:p-2" onClick={() => {
                    document.querySelector('#mobileMenu').classList.toggle('hidden')
                  }}>{"Help"}</a></Link>
                </div>

                <div className="w-full h-14">
                  <button className="bg-hcs-blue px-2 mt-1 text-sky-500 w-full rounded-xl border border-sky-500 h-12" onClick={() => signOut()}>
                      <p className="text-white grid content-center">Hi {session.user.name.split(" ")[0]}<br/><span className='text-xs text-orange-300'>Click to sign out</span></p>
                  </button>
                </div>

            </div>
          </div>

        </div>

      )
    } else {
        return (
            <div>
              <div className="grid pl-4 items-center w-full h-12 order-1 bg-hcs-blue">
                
                <div className="grid grid-cols-icon items-center w-full h-12 order-1">
                  <Image className="py-4" src="/hcs_logo.png" alt="logo" width={35} height={40} />
                  <h1 className="text-white text-2xl px-4">HCS Intranet</h1>
                </div>
    
              </div>
              <div className="bg-hcs-red w-full h-6 px-4 flex items-center" />
            </div>
        )
    }

}