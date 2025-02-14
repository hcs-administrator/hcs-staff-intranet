import PropTypes from 'prop-types';


const Profile_Devices = ({details}) => {

  return (
    <div className="flex flex-col">
        <h2>Devices Details:</h2>

        <table className="w-2/3 mt-4">
          <tbody>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details[`Macbook Model`] === null ? "No Data" : details[`Macbook Model`] }`}</td>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details[`Macbook Serial`] === null ? "No Data" : details[`Macbook Serial`]}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details[`iPad Model`] === null ? "No Data" : details[`iPad Model`] }`}</td>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details[`iPad Serial`] === null ? "No Data" : details[`iPad Serial`]}`}</td>
              </tr>
          </tbody>
        </table>   
    </div>
  )
}

Profile_Devices.propTypes = {
  details: PropTypes.object //.isRequired
}

export default Profile_Devices