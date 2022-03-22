import React from 'react'
import './widgetSm.css'
import WidgetSmImage from '../../images/profile.jpg'
import { Visibility } from '@material-ui/icons'

export default function () {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={WidgetSmImage} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
        </li>

        <li className="widgetSmListItem">
          <img src={WidgetSmImage} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
        </li>

        <li className="widgetSmListItem">
          <img src={WidgetSmImage} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
        </li>

        <li className="widgetSmListItem">
          <img src={WidgetSmImage} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
        </li>

        <li className="widgetSmListItem">
          <img src={WidgetSmImage} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
        </li>
      </ul>
    </div>
  )
}
