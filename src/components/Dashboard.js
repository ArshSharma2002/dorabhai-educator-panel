import React from 'react'
import Grid from '@mui/material/Grid';
import {
  Link
} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Grid item className="mainPage" xs={10}>
      <div className="dashboardHeading textMid" >Banner / Announcements / Important Notifications</div>
      <div className='divContainer' >
        <div className='dashboardOpt textMid' ><Link style={{color:'black',textDecoration:'none'}} to='/library'>LIBRARY</Link></div>
        <div className='dashboardOpt textMid' >SEMESTER-COURSES</div>
        <div className='dashboardOpt textMid' >PERFORMANCE</div>
      </div>
      <div className='divContainer' >
        <div className='dashboardOpt textMid' >LIVE CLASS</div>
        <div className='dashboardOpt textMid' >HELP & SUPPORT</div>
        <div className='dashboardOpt textMid' >TOOLS</div>
      </div>
    </Grid>
    </>
  )
}

export default Dashboard