import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { slide as Menu } from 'react-burger-menu'
import './burgermenu.css';

import {useAppSelector,useAppDispatch} from '../../app/hooks'
import { useNavigate } from 'react-router-dom';

import {isLogin,logout} from '../accounts/accountsSlice'
import { Link } from 'react-router-dom';

const NavBar:React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const is_login = useAppSelector(isLogin)
  const Logout = async () => {
    await dispatch(logout())
    localStorage.removeItem('localJWT')
    navigate("/login")
  }

  // const [anchorEl,setAnchorEl] = useState(null)
  // const open = Boolean(anchorEl);
  // const handleClick = (event:any) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"#39094a"}}>
          <Toolbar sx={{alignItems:"center"}}>
          <Menu isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen} 
            width={ '50%' } customBurgerIcon={
            <IconButton
            size="large"
            sx={{ mr: 2,color:"#ffffff",display: {xs:"block",sm:"none"} ,padding:0, height:"24px !important",width:"24px !important" }}
            >
            <MenuIcon />
            </IconButton>
          }>
              <Link className="menu-item" to="/" onClick={closeSideBar}>Home</Link>
              <Link className="menu-item" to="/tasks" onClick={closeSideBar}>Tasks</Link>
          </Menu>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button color="inherit">
              {is_login ? <p onClick={Logout}>Logout</p>:
              <>
                <Link to="login" style={{ textDecoration: 'none', color: '#ffffff' , marginRight : "10px" }}>ログイン</Link>
                <Link to="user_create" style={{ textDecoration: 'none', color: '#ffffff' }}>新規登録</Link>
              </>
              }
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavBar