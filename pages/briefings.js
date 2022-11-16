import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import { gql, useQuery } from '@apollo/client';

export default function Briefings() {

    // const { loading, error, data } = useQuery(GET_STAFF);

    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    //const {staffs} = data

    return (
        <div className="h-screen p-4 dark:bg-white dark:text-black">
            <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Briefings`}</h1>
            <h2>Coming Soon...</h2>
        </div>
    )

}