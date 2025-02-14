import PropTypes from 'prop-types';

const Profile_Voip = ({details}) => {

  return (
    <div className="flex flex-col">
        <h2>Voip Details:</h2>
        <table className="w-2/3 mt-4">
          <tbody>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/2">Your User Account Number:</td>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details.PhoneLogin === null ? "No Data" : details.PhoneLogin}`}</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-300 pl-2 w-1/2">Your Extension:</td>
              <td className="border-2 border-gray-300 pl-2 w-1/2">{`${details.PhoneExt === null ? "No Data" : details.PhoneExt}`}</td>
              </tr>
          </tbody>
        </table>    
    </div>
  )
}

Profile_Voip.propTypes = {
  details: PropTypes.object //.isRequired
}


export default Profile_Voip