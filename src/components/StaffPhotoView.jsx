import axios from 'axios'
import { useState, useEffect} from 'react'

const StaffPhotoView = () => {
  const [allStaff, setAllStaff] = useState([])

  const [allDepartments, setAllDepartments] = useState([])

  useEffect(() => {

    const loadData = async () => {

      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_HCS_API}/open-noco/staff-photos`,
      }).then(result => {

        if (result.data.length > 0) {
          setAllStaff(result.data)
        }

      })
      .catch(err => console.log(err))

    }

    const getDepartments = async () => {

      await axios({
        method: 'get',
        url: `${import.meta.env.VITE_HCS_API}/open-noco/get-departments`,
      }).then(result => {

        if (result.data.length > 0) {
          setAllDepartments(result.data)
        }

      })
      .catch(err => console.log(err))

    }

    loadData()

    getDepartments()

  }, [])

  return (
    <div className="grid grid-cols-1 gap-4">

      {allDepartments.map((dept, i) => {
          return (

            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0">
            <span className="text-2xl p-2 col-span-1 sm:col-span-2 md:col-span-4 bg-blue-950 text-white">{`${dept.Name}`}</span>
            {allStaff.filter(staff => {
              return staff.Department.split(',').includes(dept.Name)
            }).map(staff => {
              return (
                <div key={staff.EID} className="px-2 flex flex-col items-center sm:items-start md:items-start">
                  <img src={staff.hasPhoto ? `${import.meta.env.VITE_PHOTO_URL}/photos/${staff.EID}-R.jpg` : `${import.meta.env.VITE_PHOTO_URL}/photos/no-photo.jpg`} alt="photo" className="w-2/3"/>
                  <h2 className="font-bold">{`${staff.FirstName} ${staff.LastName}`}</h2>
                  {staff.Role1 === "" ? <br /> : <p>{`${staff.Role1}`}</p>}
                  {staff.Role2 === "" ? <br /> : staff.Role2 === null ? staff.Role1 === "Teacher" ? `Year ${staff.Year}` : <br /> : <p>{`${staff.Role2}`}</p>}
                  <p><a href={`mailto:${staff.Email.toLowerCase()}@hamiltonchristian.school.nz`}>{`Email ${staff.FirstName}`}</a></p>
                </div>
              )
            })}
          </div>

          )
        }
      )}
      
    </div>
  )
}

export default StaffPhotoView