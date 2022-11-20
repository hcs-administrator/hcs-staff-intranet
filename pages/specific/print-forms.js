import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import { GoogleApiProvider } from 'react-gapi'
import { useGoogleApi } from 'react-gapi'

export default function HowTo() {

    useEffect(() => {

        return (
            <GoogleApiProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                <MyAuthComponent />
                <MyDriveComponent />
            </GoogleApiProvider>
        )

    }, [])

    return (
        <div className="h-screen p-4 dark:bg-white dark:text-black">
            <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Print Google Forms`}</h1>
        </div>
    )

}

export function MyAuthComponent() {
    const gapi = useGoogleApi({
      scopes: [
        'profile',
      ],
    })
  
    const auth = gapi?.auth2.getAuthInstance()
  
    return <div>{
      !auth
        ? <span>Loading...</span>
        : auth?.isSignedIn.get()
          ? `Logged in as "${auth.currentUser.get().getBasicProfile().getName()}"`
          : <button onClick={() => auth.signIn()}>Login</button>
    }</div>
}

export function MyDriveComponent() {
    const gapi = useGoogleApi({
      discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      ],
      scopes: [
        'https://www.googleapis.com/auth/drive.metadata.readonly',
      ],
    })
  
    if (!gapi) {
      return <div>Some loading screen</div>
    }
  
    // access the Drive API per gapi.client.drive
}