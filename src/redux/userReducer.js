import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id : ""
  }
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    userExist: (state, action) => {
      state.user = action.payload;
    } , 
    userNotExist   : (state , action) =>{
        return initialState;
    }


  }
});

// Export the reducer and actions separately
export const { userExist , userNotExist } = userSlice.actions;
export default userSlice.reducer; // Export the reducer as default
