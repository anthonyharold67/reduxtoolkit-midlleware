import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { clearUser } from '../features/authSlice';

export default function Navbar() {
  const navigate=useNavigate()
  /* // let user=useSelector(state=>state.auth.user) */
  const {user}=useSelector(state=>state.auth)
  const dispatch = useDispatch();
  console.log(user) 
  const handleClick=(e)=>{
  // user ? navigate('/login') : navigate('/')
  if(user){
    dispatch(clearUser())
    navigate('/login')
  }
  navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor:"pointer" }} onClick={()=>navigate("/")}>
            Clarusway News
          </Typography>
          <Button color="inherit" onClick={handleClick}>{user ? "Logout":"Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
