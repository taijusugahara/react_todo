import React,{useEffect} from 'react'
import {selectAccount,isLogin,selectUserInfo} from './accountsSlice'
import {useAppSelector,useAppDispatch} from '../../app/hooks'
import { editEmail,editPassword,login } from './accountsSlice'
import { loginAsync,userInfoAsync } from './accountsSlice'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Accounts:React.FC = () => {

  const input_account = useAppSelector(selectAccount)
  const is_login = useAppSelector(isLogin)
  const user_info = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const changeEmail =async (e:any) => {
      await dispatch(editEmail(e.target.value))
    }

  const changePassword =async (e:any) => {
    await dispatch(editPassword(e.target.value))
  }

  const Submit = async (e:any) => {
    e.preventDefault()
    try {
      //unwrap
      await dispatch(loginAsync(input_account)).unwrap(); 
      navigate('/tasks')
    }
    catch(error){}
    await dispatch(userInfoAsync())
  }

  return (
    <Container>
      <form style={{ width:"80%", margin:"150px auto 0 auto"}}>
        <TextField
            required
            label="Email"
            size="small"
            fullWidth
            onChange={changeEmail}
            sx={{display:"block",mb:"30px"}}
        />
        <TextField
            required
            label="Password"
            size="small"
            fullWidth
            onChange={changePassword}
            sx={{display:"block",mb:"30px"}}
        />
        <Button variant="contained" onClick={Submit }  sx={{display:"block",width:"100%"}}>送信</Button>
      </form>
    </Container>
  )
}

export default Accounts