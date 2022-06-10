import React from 'react'
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <>
      <Grid item className="mainPage" xs={10}>
      <div className="dashboardHeading textMid" >Banner / Announcements / Important Notifications</div>
      <div className='divContainer' >
        <div className='dashboardOpt textMid' >LIBRARY</div>
        <div className='dashboardOpt textMid' >SEMESTER-COURSES</div>
        <div className='dashboardOpt textMid' >PERFORMANCE</div>
      </div>
      <div className='divContainer' >
        <div className='dashboardOpt textMid' >LIVE CLASS</div>
        <div className='dashboardOpt textMid' >HELP & SUPPORT</div>
        <div className='dashboardOpt textMid' >TOOLS</div>
      </div>
      {/* <Grid item className="textMid dashboardOpt" xs={12}>
        Banner / Announcement / Important Notifications
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} className="textMid" sm={4} md={4} key={index}>
            item-1
          </Grid>
        ))}
    </Grid> */}
    </Grid>
    </>
  )
}

export default Dashboard