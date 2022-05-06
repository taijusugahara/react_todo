import React,{useEffect} from 'react';
import NavBar from './components/common/NavBar'
import Accounts from './components/accounts/Accounts';
import UserCreate from './components/accounts/UserCreate'
import Tasks  from './components/tasks/Tasks';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {useAppDispatch} from './app/hooks'
import { login,userInfoAsync } from './components/accounts/accountsSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(localStorage.localJWT){
      const login_do = async () => {
        await dispatch(login())
        await dispatch(userInfoAsync())
      }
      login_do()
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Accounts />}/>
        <Route path="/user_create" element={<UserCreate />}/>
        <Route path="/tasks" element={<Tasks />}/>
      </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
