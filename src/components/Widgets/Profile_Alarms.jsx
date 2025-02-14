import { useEffect, useState } from "react"
import axios from 'axios'
import PropTypes from 'prop-types';

const Profile_Alarms = ({details}) => {

  const [areas, setAreas] = useState([])

  useEffect(() => {

    const getData = async () => {

      await axios({

        method: 'post',
        url: `${process.env.VITE_HCS_API}/noco/alarm-areas`,
        data: { token: localStorage.getItem('token') }

      }).then(resp => {

        const all_areas = resp.data

        const temp = all_areas.filter(x => x.nc_99dy___nc_m2m_iiq_ezk_7os.filter(x => x.table1_id === details.Id))

        setAreas(temp)

      })

    }

    if (areas.length === 0) {
      getData()
    }

  }, [areas])

  return (
    <div className="flex flex-col space-y-2">
        <h2>Alarm Details:</h2>

        <table className="w-2/3 mt-4">
          <tbody>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/3">Tecom UserName:</td>
              <td className="border-2 border-gray-300 pl-2 w-2/3">{`${details.Tecom_User_ID === null ? "No Data" : details.Tecom_User_ID}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/3">Tecom Pin:</td>
              <td className="border-2 border-gray-300 pl-2 w-2/3">{`${details.Tecom_User_PIN === null ? "No Data" : details.Tecom_User_PIN}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/3">Tecom Fob:</td>
              <td className="border-2 border-gray-300 pl-2 w-2/3">{`${details.Tecom_Fob_Number === null ? "No Data" : details.Tecom_Fob_Number}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/3 align-top">Your Access Areas:</td>
              <td className="border-2 border-gray-300 pl-2 w-2/3">
                <ul className="pl-4 list-disc mb-4">
                    {areas.map((area, i) => <li className="h-4" key={i}>{area.Block}</li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>        
    </div>
  )
}

Profile_Alarms.propTypes = {
  details: PropTypes.object //.isRequired
}

export default Profile_Alarms
