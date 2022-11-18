import { Fragment, useState, useEffect, use } from 'react'
import { useSession } from "next-auth/react"

import { gql, useQuery } from '@apollo/client';

import { MenuContacts } from "../../components/Menu_Contact"

const GET_STAFF = gql`
  query GET_STAFF {
        staffs {
            firstname
            lastname
            email
            department {
                name
            }
            extension
        }
    }
`;

export default function Contacts() {

    const { loading, error, data } = useQuery(GET_STAFF);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const {staffs} = data

    return (
        <Fragment>
            <MenuContacts />
            <div className="h-full p-4 dark:bg-white dark:text-black">
                <h1 className="text-2xl pb-4 font-bold col-span-1 md:col-span-3">{`Contacts`}</h1>
                <h2 className="text-2xl pb-4">Click on the staff name to email them</h2>
                <table className="w-full lg:w-1/2 border-gray-300 border border-collapse">
                    <thead className="border-gray-300 border">
                        <tr>
                            <th className="border-gray-300 border">Name</th>
                            <th className="border-gray-300 border">Extension</th>
                            <th className="border-gray-300 border">Email</th>
                        </tr>
                    </thead>
                {staffs.filter(d => d.department.some(d => d.name !== "Staff-Reliever")).map((st, i) => {
                    return (
                        <tr key={i}>
                            <td className="border-gray-300 border p-2">{`${st.firstname} ${st.lastname}`}</td>
                            <td className="border-gray-300 border p-2">{st.extension}</td>
                            <td className="border-gray-300 border p-2">
                            <a className="text-sky-700 font-bold" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${st.email}`} target="_blank" rel="noreferrer"><span>{st.email}</span></a>
                            </td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </Fragment>
    )

}