import PropTypes from 'prop-types';

const Profile_Photo = ({details}) => {

    return Object.keys(details).length > 0 ? (
        <div className="row-span-2">
            <img src={details.hasPhoto ? `${import.meta.env.VITE_STATIC_URL}/photos/${details.EID}-R.jpg` : `${import.meta.env.VITE_STATIC_URL}/photos/no-photo.jpg`} alt="photo" className="w-full rounded-lg" />
            <div className="mt-4 flex flex-col space-y-1">
            <h2>{`${details.FirstName} ${details.LastName}`}</h2>
            <h3>{`${details.Role1 === null ?  "" : details.Role1}`}</h3>
            <h3>{`${details.Role2 === null ?  "" : details.Role2}`}</h3>
            <h3>{`${details.Department === null ?  "" : details.Department}`}</h3>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )

}

Profile_Photo.propTypes = {
    details: PropTypes.object //.isRequired
}

export default Profile_Photo