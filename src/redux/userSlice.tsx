import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userid: null,
  },
  reducers: {
    setUserID: (state, action) => {
      state.userid = action.payload;
    },
  },
});

export const {setUserID} = userSlice.actions;

export const selectUserID = (state: any) => state.user.userid;

export default userSlice.reducer;
