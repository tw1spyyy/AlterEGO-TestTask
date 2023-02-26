import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { INew, NewsState } from '../../utils/types'


export const fetchNews = createAsyncThunk(
    'auth/fetchNews',
    async (limit:number) => {
        const {data} = await axios.get<INew[]>(`https://jsonplaceholder.typicode.com/posts?_start=${limit}&_limit=5`)
        return data        
    }
)



const initialState:NewsState  = {
    news: []
}

export const newsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   deletePost: (state:NewsState, action) =>{
    const findPost = state.news.find(el => el.id === action.payload)
    if(findPost){
        state.news = state.news.filter(el => el.id !== findPost.id)
    }
   }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state:NewsState, action:PayloadAction<any>) => {
        state.news = [...state.news, ...action.payload]
    })
  },
})

export const {deletePost} = newsSlice.actions

export default newsSlice.reducer