import React from 'react'
import './profile.css'
import { FcPaid, FcReadingEbook, FcImport} from "react-icons/fc";
import { Link ,Outlet} from 'react-router-dom';
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profileSideBar">
          <div className="accountNameDiv">
            <div className="accountImage">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="profileImg" />
            </div>
            <div className="accName">
              <span>Hello,</span>
              <p>GrandCanyon</p>
            </div>
          </div>

          <div className="sideBarTitle">
          <FcPaid/><p>MY ORDERS</p>
          </div>

          <div className="accSettingDiv">
            <div className="sideBarTitle">
            <FcReadingEbook /><p>ACCOUNT SETTING</p>
            </div>
            <ul className="sideBarSubMenu">
              <Link to="/profile">
                <li>Personal Information</li>
              </Link>
              <Link to="/profile/manage_address">
                <li>Manage Addresses</li>
              </Link>
            </ul>
          </div>
          <div className="sideBarTitle">
            <FcImport/> <p>LOGOUT</p>
          </div>  
        </div>
        <div className="profileContent">
          <Outlet/>
        </div>
          
      </div>
    </>
  )
}

export default Profile