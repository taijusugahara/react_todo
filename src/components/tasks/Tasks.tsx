import React from 'react'
import {selectUserInfo} from '../accounts/accountsSlice'
import {useAppSelector,useAppDispatch} from '../../app/hooks'

export const Tasks = () => {
  const user_info = useAppSelector(selectUserInfo)
  return (
    <>
      {user_info.username && <p>{user_info.username}さん Welcome</p>}
      <div>Tasks</div>
      <p>ログイン成功です。</p>
    </>
  )
}

export default Tasks