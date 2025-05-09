import {createSlice} from '@reduxjs/toolkit'

const prefsSlice = createSlice({
    name: 'pref',
    initialState:{
        fontSize:'medium',
        notification : true,
    },

    reducers: {
        setFontSize: (state, action) => {
          state.fontSize = action.payload;
        },
        toggleNotifications: (state) => {
          state.notifications = !state.notifications;
        },
      },
      
  
})

export const { setFontSize, toggleNotifications } = prefsSlice.actions;
export default prefsSlice.reducer;