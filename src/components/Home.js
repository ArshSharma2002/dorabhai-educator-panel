import React from 'react'
// import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import Library from './Library';

const Home = () => {
  

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Navbar/>
        {/* main content start */}
        <Grid item className="sidebar" xs={2} >
            <div className="sidebarOptions" ><a href='/' > Dashboard</a></div>
            <div className="sidebarOptions" ><a href='/library' > Library</a></div>
        </Grid>

        {/* <Dashboard/> */}
        <Library/>
        
      </Grid>
    </Box>
    
    </div>
  )
}

export default Home