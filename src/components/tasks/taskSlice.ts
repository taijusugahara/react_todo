import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios";
import {AccountInputState,Authen,UserCreateInputType} from './types'
const apiUrl = process.env.REACT_APP_DEV_API_URL;



const initialState:AccountInputState ={
  account_input : {
    email: "",
    password: "",
  },
  user_create_input : {
    username : "",
    email: "",
    password: "",
  },
  is_login : false,
  user_info : {
    id : "",
    email: "",
    username: "",
  },
}

export const loginAsync = createAsyncThunk(
  'account/login',
  async (authen: Authen) => {
    const res = await axios.post(login_url, authen, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const userCreateAsync = createAsyncThunk(
  'account/create',
  async (params: UserCreateInputType) => {
    console.log(params)
    const res = await axios.post(user_create_url, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const userInfoAsync = createAsyncThunk(
  'account/user_info',
  async () => {
    const res = await axios.get(user_info_url, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data[0];
  }
);

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    editEmail: (state,action: PayloadAction<string>) => {
      state.account_input.email = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state,action) => {
        localStorage.setItem("localJWT", action.payload.access);
        state.is_login = true
      })
  },
});

export const {
   editEmail,
   editPassword,
   editCreateUsername,
   editCreateEmail,
   editCreatePassword,
   login,
   logout,
  } = TaskSlice.actions;

export const selectAccount = (state: RootState) => state.account.account_input
export const selectUserCreate = (state: RootState) => state.account.user_create_input
export const isLogin = (state: RootState) => state.account.is_login
export const selectUserInfo = (state: RootState) => state.account.user_info

export default TaskSlice.reducer;
