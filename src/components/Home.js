import React from 'react'
import Dashboard from './Dashboard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import Library from './Library';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  

  return (
    <div>
    <Router>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Navbar/>
        {/* main content start */}
        <Grid item className="sidebar" xs={2} >
            <div className="sidebarOptions" ><Link to='/' > Dashboard</Link></div>
            <div className="sidebarOptions" ><Link to='/library' > Library</Link></div>
        </Grid>

    <Routes>
          <Route exact path='/library' element={<Library/>} /> 
          <Route exact path="/" element={<Dashboard/>} />
    </Routes>
        
      </Grid>
    </Box>
    </Router>
    </div>
  )
}

export default Home