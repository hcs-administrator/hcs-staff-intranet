import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import Image from 'next/image'

import { gql, useQuery } from '@apollo/client';

import { MenuContacts } from "../../components/Menu_Contact"

const GET_DEPARTMENTS = gql`
  query GET_DEPARTMENTS {
    departments {
        name
        email
        staff {
        firstname
        lastname
        email
        }
    }
    }
`;

export default function Contacts() {

    const { loading, error, data } = useQuery(GET_DEPARTMENTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const {departments} = data

    return (
        <Fragment>
            <MenuContacts />
            <div className="h-full p-4 dark:bg-white dark:text-black">
                <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Contacts`}</h1>
                <h2 className="text-2xl pb-4">Click on the department name to email the whole group</h2>
                {departments.filter(d => d.name !== "Staff-Reliever").map((dept, i) => {
                    return (
                        <Fragment key={i}>
                        <div className="grid col-span-3 grid-cols-mail gap-2 w-full md:w-1/3 border border-gray-300 pl-2">
                            <h2 className="text-sky-700 font-bold grid content-center text-base md:text-xl">{dept.name} - ({dept.staff.length})</h2>
                            <a className="w-1/2" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${dept.email}`} target="_blank" rel="noreferrer">
                                <Image src="/gmail.png" alt="cat" width={80} height={60} />    
                            </a>
                            <span className="w-1/2 cursor-pointer" onClick={() => navigator.clipboard.writeText(dept.email)}>
                                <Image src="/copy.png" alt="cat" width={80} height={100} />
                            </span>
                        </div>
                        <ul>
                            {dept.staff.map((st, i) => {
                                return (
                                    <li key={i} className="grid col-span-3 grid-cols-mail w-full md:w-1/3  border border-gray-300 pl-2">
                                        {`${st.firstname} ${st.lastname}`}
                                    </li>
                                )
                            })}
                        </ul>
                        </Fragment>
                    )
                })}
            </div>
        </Fragment>
    )

}