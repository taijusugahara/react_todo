import React from 'react'
import {useAppSelector,useAppDispatch} from '../../app/hooks'
import { useNavigate } from 'react-router-dom';
import {  selectUserCreate,
          editCreateUsername, 
          editCreateEmail, 
          editCreatePassword,
          loginAsync,
          userCreateAsync,
          userInfoAsync
         } from './accountsSlice'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const UserCreate:React.FC = () => {
  const input_user_create = useAppSelector(selectUserCreate)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const changeUsername =async (e:any) => {
    await dispatch(editCreateUsername(e.target.value))
  }

  const changeEmail =async (e:any) => {
    await dispatch(editCreateEmail(e.target.value))
  }

  const changePassword =async (e:any) => {
    await dispatch(editCreatePassword(e.target.value))
  }

  const Submit = async (e:any) => {
    e.preventDefault()
    try{
      await dispatch(userCreateAsync(input_user_create)).unwrap()
      const auth = {
        'email' : input_user_create.email,
        'password' : input_user_create.password
      }
      await dispatch(loginAsync(auth))
      await dispatch(userInfoAsync())
      navigate('/tasks')
    }catch(e){}
  }

  return (
    <Container>
      <form style={{ width:"80%", margin:"100px auto 0 auto"}}>
      <TextField
            required
            label="Username"
            size="small"
            fullWidth
            onChange={changeUsername}
            sx={{display:"block",mb:"30px"}}
        />
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

export default UserCreate