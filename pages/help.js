import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import { gql, useQuery } from '@apollo/client';

import Link from 'next/link'

export default function HowTo() {

    return (
        <div className="h-screen p-4 dark:bg-white dark:text-black">
            <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Help`}</h1>

            <p className="pb-4">To get the right help for the issue you are having please select one of the buttons below.</p>
            <p className="pb-4">Please do not text or call the person directly as this way there will be no ticket logged against the job.</p>

            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
                <Link href="https://hamiltonchristianschool.atlassian.net/servicedesk/customer/portal/2/group/2/create/10002">
                    <a target="_blank" rel="noreferrer" className="bg-sky-800 w-full md:w-1/3 text-center text-white hover:text-white hover:bg-gray-500 text-md p-4">{"Help ( IT )"}</a>
                </Link>
                <Link href="https://hamiltonchristianschool.atlassian.net/servicedesk/customer/portal/2/group/2/create/10029">
                    <a target="_blank" rel="noreferrer" className="bg-sky-800 w-full md:w-1/3 text-center text-white hover:text-white hover:bg-gray-500 text-md p-4">{"Help ( Maintenance )"}</a>
                </Link>
                <Link href="https://hamiltonchristianschool.atlassian.net/servicedesk/customer/portal/2/group/2/create/10002">
                    <a target="_blank" rel="noreferrer" className="bg-sky-800 w-full md:w-1/3 text-center text-white hover:text-white hover:bg-gray-500 text-md p-4">{"Help ( Hazzard )"}</a>
                </Link>
            </div>

            {/* <iframe src="https://hamiltonchristianschool.atlassian.net/servicedesk/customer/portal/2" className="w-full h-64"></iframe> */}

        </div>
    )

}