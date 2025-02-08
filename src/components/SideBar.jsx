import PropTypes from 'prop-types';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from "react-icons/hi";

const SideBar = ({className, user}) => {

    const [listItems, setListItems] = useState([])
    const [hasToken, setHasToken] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {

        const loadData = async () => {

            await axios({
                method: 'get',
                url: `${process.env.VITE_HCS_API}/open-noco/get-intranet-menu-items`,
            }).then(result => {
                const temp = result.data.filter(item => item.isHidden === 0 )                
                setListItems(temp)
                
            })
    
        }

        if (count === 0) {
            setHasToken(localStorage.getItem('token'))
            setCount(count + 1)
            loadData()

            //console.log(hasToken)
        }

    }, [count, hasToken])

    return (
        <div className={className}>
            <ul className="sidebar-ul">

            {listItems.filter(item => {

                if (hasToken === null) {
                    return item.mustBeLoggedIn === 0
                } else {
                    //return (item.nc_99dy___nc_m2m_ovifwmx539s.filter(x => x.table2_id === user).length === 1 ?? item) || item.nc_99dy___nc_m2m_ovifwmx539s.length === 0
                    return item
                }

            }).map(item => {

                return (
                    <li key={item.Id} className="px-4 py-2 hover:bg-slate-500 hover:cursor-pointer">
                        {item.isExternal ? 
                            <a className="sidebar-links" href={item.link} target="_blank" rel="noreferrer">
                                <span className="pr-2">{item[`Role Name`]}</span>
                                <HiOutlineExternalLink />
                            </a>
                        :
                            <NavLink to={item.link} className="sidebar-links">
                                {item[`Role Name`]}
                            </NavLink>
                        }
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

SideBar.propTypes = {
    className: PropTypes.string, //.isRequired
    user: PropTypes.number
}
export default SideBar