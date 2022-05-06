export interface TaskListType {
  account_input : Authen,
  user_create_input : UserCreateInputType,
  is_login: boolean,
  user_info :UserInfo,
}

export interface Authen{
  email: string,
  password: string,
}

export interface UserCreateInputType{
  username : string,
  email: string,
  password: string,
}

export interface UserInfo{
  id : string,
  email: string,
  username : string
}