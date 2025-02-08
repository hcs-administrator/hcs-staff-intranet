import PropTypes from 'prop-types';
import { useNavigate, NavLink } from 'react-router-dom';

const TopHeader = ({heading, subHeading, viewLink = "", editLink = ""}) => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col">

      <div className="w-full flex flex-row justify-between items-center bg-blue-900 py-2">

        <div className="h-14 bg-blue-900 text-white flex flex-row items-center pl-4">
          <img src="/hcs-logo-120.png" alt="logo" className="h-full p-2" />
          <span className="font-light text-2xl pl-2">{heading}</span>
        </div>

        <div className="w-24 h-12 bg-red-800 hover:bg-red-900 p-4 text-white text-xl flex justify-center items-center mx-2 rounded-xl">
        {localStorage.getItem('token') !== null ? 
          <button onClick={() => {
              localStorage.removeItem('token') 
              navigate({ pathname: '/' })
              navigate(0)
          }} >Logout</button> : 
          <button onClick={() => navigate({ pathname: '/login' })}>Login</button>
        }
        </div>

      </div>
      <div className="grid grid-cols-12 w-full h-10 bg-blue-950 text-white items-center pl-4">
        <p className="col-span-5">{subHeading}</p>
        {viewLink !== "" ? <NavLink to={`${viewLink}`} className="text-lg hover:bg-blue-300 flex justify-center">View</NavLink> : null}
        {editLink !== "" ? <NavLink to={`${editLink}`} className="text-lg hover:bg-blue-300 flex justify-center">Edit</NavLink> : null}        
      </div>
    </div>
  )
}

TopHeader.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  viewLink: PropTypes.string,
  editLink: PropTypes.string
}

export default TopHeader