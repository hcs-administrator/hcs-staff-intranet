import { useEffect, useState } from "react"
import axios from 'axios'

const PhoneExtensions = () => {

    const [list, setList] = useState([])

    useEffect(() => {

        const loadData = async () => {

            await axios({
                method: 'post',
                url : `${import.meta.env.VITE_HCS_API}/voip/get-users`,
                data : { token: localStorage.getItem('token') }
            })
            .then(async resp => {

                console.log(resp.data)

                setList(resp.data)
            })
            .catch(err => err)

        }

        loadData()

    }, [])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold my-4">HCS Phonebook - Interal Extensions</h1>
            <p className="mb-4">Please note these extensions are not available for the public. These can only be used with the Secure Voip App.</p>
            <table className="w-1/2">
                <thead>
                    <tr className="border border-slate-300">
                        <th className="w-2/6 text-left p-2">Name</th>
                        <th className="w-2/6 text-left p-2">Extension</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => {

                        return (
                            <tr key={item.extension} className="border border-slate-300">
                                <td className="w-3/12 text-left p-2">{item.displayname}</td>
                                <td className="w-1/12 text-left p-2">{item.extension}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PhoneExtensions