import React from 'react'
import './user.css'
import profile from '../../images/profile.jpg'
import { PermIdentity, PhoneAndroid, MailOutline, LocationSearching, CalendarTodayOutlined, Publish } from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser" className='link'>
          <button className="userAddButton">Create</button> 
        </Link> 
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div> 
          <div className="userShowBottom">
            <span className="userShowTile">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodayOutlined className='userShowIcon'/>
              <span className="userShowInfoTitle">10/12/1996</span>
            </div>
            <span className="userShowTile">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">+2348166952851</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>  
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" className="userUpdateInput" placeholder='annabeck99' />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" className="userUpdateInput" placeholder='Anna Beckey' />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" className="userUpdateInput" placeholder='annabeck99@gmail.com' />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" className="userUpdateInput" placeholder='+234 8166952851' />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" className="userUpdateInput" placeholder='NEW YORK | USA' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={profile} alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish className='userUpdateIcon'/> </label>
                <input type="file" name="" id="file" style={{display: "none"}}/>
              </div>  
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
