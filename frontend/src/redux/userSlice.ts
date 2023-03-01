import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false,
    
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        }

    }
})

export const { loginStart,loginSuccess,loginFailure  } = userSlice.actions;
export default userSlice.reducer;