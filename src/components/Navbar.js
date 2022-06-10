import React from 'react'
import logo from '../logo.svg'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
      <>
    <Grid item className="navbar logoSide" xs={2}>
          <a href="/"><img src={logo} alt="Dorabhai" /></a>
        </Grid>
        <Grid item direction="row" container justifyContent="flex-end" alignItems="center" className="navbar" xs={10}>
                <IconButton
                    size="large"
                    style={{margin:"10px",backgroundColor:"pink"}}
                    aria-label="show 17 new notifications"
                    color="inherit"
                    >
                    <Badge badgeContent={7} color="error">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                    size="large"
                    style={{margin:"10px",backgroundColor:"pink"}}
                    edge="end"
                    aria-label="account of current user"
                    //   aria-controls={menuId}
                    aria-haspopup="true"
                    //   onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
        </Grid>
        </>
  )
}

export default Navbar