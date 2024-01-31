import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: 'red'
    },
    reducers: {
      UpdateTheme:(state, data) => {
        state.theme = data.payload
      }
    }
  })

  export const { UpdateTheme } = themeSlice.actions


  export default themeSlice