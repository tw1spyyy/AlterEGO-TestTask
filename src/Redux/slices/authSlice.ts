import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { getStateFromLS } from '../../utils/getStateFromLs'
import { AuthState, User } from '../../utils/types'



export const fetchUsers = createAsyncThunk(
    'auth/fetchUsers',
    async () => {
        const {data} = await axios.get<User[]>('./users.json')
        return data
    }
)

const {isAuth} = getStateFromLS()

const initialState : AuthState = {
    users: [],
    isAuth: !!isAuth,
    error:''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   formSubmit(state: AuthState, action:PayloadAction<User>) {
    const {login, password} = action.payload
    const user = state.users.find((el:User) => el.login === login && el.password === password)
    if(user) {
        state.isAuth = true
        localStorage.setItem('isAuth', 'true')
        state.error = ''
    } else {
        state.error = 'Ім\'я користувача або пароль введено неправильно'
    }
    
   },
   leaveAccount(state:AuthState){    
    state.isAuth = false
    localStorage.setItem('isAuth', 'false')
   }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state:AuthState, action:PayloadAction<any>) => {
        state.users = [...action.payload]
    })
  },
})

export const {formSubmit, leaveAccount} = authSlice.actions

export default authSlice.reducer