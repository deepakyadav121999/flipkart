import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "../styles/More.css"
function More() {
  return (
    <div className='more'>
        <div className="more_in">
            <NotificationsIcon/>
            <p className='txt'>Notification Preferences</p>
        </div>
        <hr />
        <div className="more_in">
            <HelpCenterIcon/>
            <p className='txt'>24/7 Customer Care</p>
        </div>
        <hr />
        <div className="more_in">
            <TrendingUpIcon/>
            <p className='txt'>Advertise</p>
        </div>
        <hr />
        <div className="more_in">
            <FileDownloadIcon/>
            <p className='txt'>Download App</p>
        </div>
        </div>
  )
}

export default More