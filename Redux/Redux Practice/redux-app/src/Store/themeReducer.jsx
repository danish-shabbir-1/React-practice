import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: 'blue'
    },
    reducers: {
      updateTheme:(state, data) => {
        state.theme = data.payload
      }
    }
  })

  export const { updateTheme } = themeSlice.actions


  export default themeSlice