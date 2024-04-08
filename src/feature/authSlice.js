import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: false,
    userData: null
}

const authSlices = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload.userData,
            state.status = true
        },
        logout: (state) => {
            state.userData = null,
            state.status = false
        }
    }
})

export const {login, logout} = authSlices.actions;
export default authSlices.reducer;