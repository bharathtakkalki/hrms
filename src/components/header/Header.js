import React from "react";
import Input from "../input/Input";
import {FiSearch} from 'react-icons/fi';
import {BiSend} from 'react-icons/bi';
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../avatar/Avatar";


const Header = ({ pageHeader }) => {
    return (

        <header className="header">
            <div className="page-header">
                <h1 className="heading">{pageHeader}</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"40%"}}>
            <div className="action-container">
                <Input placeholder="Search..." icon={<FiSearch/>} classes={{inputComponentClass:"hover-action"}} />
                <BiSend className="action-icon" />
                <IoIosNotificationsOutline  className="action-icon"/>
            </div>
            <div className="profile-container">
                <label>Rabindra Kumar</label>
                <Avatar/>
            </div>
            </div>
        </header>
    )
}


export default Header;