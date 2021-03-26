import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import {VscGraph} from 'react-icons/vsc';
import { FiCalendar,FiSettings} from 'react-icons/fi';
import { Link, useLocation,useHistory } from 'react-router-dom';
import Button from '../button/Button';
import axios from '../../utils/axios';
const navItems = [
    {
        name: "Dashboard",
        icon: <BiHomeAlt />,
        link:'/'
    },
    {
        name: "Recruitment",
        icon: <BsPeople />,
        link:'/recruitment'

    },
    {
        name:"Onboarding",
        icon:<CgFileDocument/>,
        link:'/onboarding'

    },

    {
        name: "report",
        icon: <VscGraph />,
        link:'/report'
    },
    {
        name:"Calendar",
        icon:<FiCalendar/>,
        link:'/calendar'
    },

    {
        name: "Settings",
        icon: <FiSettings/>,
        link:'/settings'
    }

            ]


const DashboardLayout = ({children}) =>{
    const history = useHistory()
    const location = useLocation()
    const logoutHanlder = () =>{
        axios.get('/auth/logout')
        .then(response =>{
            localStorage.removeItem('access-token')
            history.push('/login')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <div className="dashboard-layout">
                <nav className="side-nav-bar">
                    <div className="logo-container">
                        <h3>Newton HR</h3>
                    </div>
                    <div className="nav-container">
                        {navItems.map((navItem, index) => (
                            <Link key={index} to={navItem.link}>
                            <div  className={`nav-item ${navItem.link === location.pathname ? 'selected':''}`}>
                                {navItem.icon}
                                <label className="item-name">{navItem.name}</label>
                            </div>
                            </Link>
                        ))}
                    </div>
                    <div className="image-container-small">
                        Add vector of your choice
                    </div>
                    <div style={{position:"absolute",bottom:8}}>
                        <Button onClick={logoutHanlder}>Logout</Button>
                    </div>
                </nav>
                <div className="main-container">
                {children}
                </div>
            </div>
    )
}

export default DashboardLayout;
