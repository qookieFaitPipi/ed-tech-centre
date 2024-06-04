import { createSlice } from '@reduxjs/toolkit'

// types
import { MainSliceState } from '../../@types/types';

const initialState: MainSliceState = {
  
}

export const MainSlice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {

  },
})

export const {  } = MainSlice.actions

export default MainSlice.reducer 