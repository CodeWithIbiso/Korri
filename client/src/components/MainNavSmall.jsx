import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles =makeStyles({
    menu:{
        "& .MuiPaper-root":{
            backgroundColor:'red'
        }
    }
})

export default function MenuAppBar() {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const localStorageData = JSON.parse(localStorage.getItem('userProfile'))
  const dispatch= useDispatch()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}> 
      <AppBar position="static" elevation={0}>
        <Toolbar  disableGutters style={{backgroundColor:'#263238'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'segoe ui',fontWeight:'bold' }}>
            Korri
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                  <MoreIcon/>
              </IconButton>
              <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={classes.menu}
                style={{fontWeight:'bold',fontFamily:'segoe ui'}}
                
              >
                <MenuItem component={Link} to='/' onClick={handleClose}>Home</MenuItem>
                <MenuItem component={Link} to='/Buy' onClick={handleClose}>Buy</MenuItem>
                <MenuItem component={Link} to='/Rent' onClick={handleClose}>Rent</MenuItem> 
                {localStorageData ===null &&<MenuItem component={Link} to='/signing' onClick={handleClose}>Sign In</MenuItem>}
                {localStorageData !==null &&<MenuItem component={Link} to='/' onClick={()=>{dispatch({type:'LOGOUT'})}}>Logout</MenuItem>}
                <MenuItem component={Link} to='/gallery' onClick={handleClose}>Gallery</MenuItem>
                <MenuItem component={Link} to='/about' onClick={handleClose}>FaQs</MenuItem>
                {localStorageData !==null &&<MenuItem component={Link} to='/account' onClick={handleClose}>Account</MenuItem>}
                <MenuItem component={Link} to='/store' onClick={handleClose}>Check out our Store !</MenuItem>
              </Menu>
            </div>
          )}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
