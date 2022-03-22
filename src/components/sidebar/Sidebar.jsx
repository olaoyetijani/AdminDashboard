import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, Report, WorkOutline } from '@material-ui/icons'

export default function 
() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
            <li className="sidebarListItem active"><LineStyle className='sidebarIcon'/>Home</li>
            </Link>
            <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Analytics</li>
            <li className="sidebarListItem"><TrendingUp className='sidebarIcon'/>Sales</li>
          </ul>
        </div>  

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Qiuck Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
              <li className="sidebarListItem"><LineStyle className='sidebarIcon'/>Users</li>
            </Link>
            <Link to="/products" className='link'>
              <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Product</li>  
            </Link>
            <li className="sidebarListItem"><TrendingUp className='sidebarIcon'/>Transactions</li>
            <li className="sidebarListItem"><TrendingUp className='sidebarIcon'/>Reports</li>
          </ul>
        </div>  

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"><WorkOutline className='sidebarIcon'/>Mail</li>
            <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Feedback</li>
            <li className="sidebarListItem"><TrendingUp className='sidebarIcon'/>Messages</li>
          </ul>
        </div>  

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"><WorkOutline className='sidebarIcon'/>Manage</li>
            <li className="sidebarListItem"><Timeline className='sidebarIcon'/>Analytics</li>
            <li className="sidebarListItem"><Report className='sidebarIcon'/>Reports</li>
          </ul>
        </div>  

      </div>
    </div>
  )
}
