import { useEffect, useState } from "react"
import axios from 'axios'
import PropTypes from 'prop-types';

const Profile_Papercut = ({details}) => {

  const [pc, setPC] = useState({})

  useEffect(() => {

    const getData = async () => {

        await axios({

          method: 'post',
          url: `${process.env.VITE_HCS_API}/pc/me`,
          data: { token: localStorage.getItem('token') }

        }).then(resp => {

          setPC(resp.data)

        })

    }

    if (Object.keys(pc).length === 0) {
      getData()
    }

  })

  return (
    <div className="flex flex-col">
      <h2>Print Balance:</h2>

      {pc === undefined ? "No Data" : 
        <table className="w-96 mt-4">
          <tbody>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Balance</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`$${parseFloat(pc[2]).toFixed(2)}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Pages Left B/W</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`${Math.floor(pc[2] / 0.02)}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Pages Left Colour</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`${Math.floor(pc[2] / 0.06)}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Your Photocopy code</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`${pc[4]}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Pages you have printed</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`${pc[6]}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-32">Print Job Completed</td>
              <td className="border-2 border-gray-300 pl-2 w-32">{`${pc[7]}`}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  )
}

Profile_Papercut.propTypes = {
  details: PropTypes.object //.isRequired
}
export default Profile_Papercut