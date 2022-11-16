import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import { gql, useQuery } from '@apollo/client';

import {MenuContacts} from "../components/Menu_Contact"

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
                        <a className="text-sky-700 font-bold" href={`mailto:${dept.email}`}><h2 className="text-xl">{dept.name} - ({dept.staff.length})</h2></a>
                        <ul>
                            {dept.staff.map((st, i) => {
                                return (
                                    <li key={i}>
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