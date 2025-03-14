import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userToken: null,
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const {setUserToken} = userSlice.actions;

export const selectUserToken = (state: any) => state.user.userToken;

export default userSlice.reducer;
