import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userid: null,
  },
  reducers: {
    setUserID: (state, action) => {
      console.log('Setting User ID:', action.payload);
      state.userid = action.payload;
    },
  },
});

export const {setUserID} = userSlice.actions;

export const selectUserID = (state: any) => state.user.userid;

export default userSlice.reducer;
