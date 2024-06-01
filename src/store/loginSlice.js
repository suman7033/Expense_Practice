import {createSlice} from "@reduxjs/toolkit";


const initialLoginState = {
    showLogin: false,
    token: "",
    email: "",
  };
  
  const loginSlice = createSlice({
    name: "login",
    initialState: initialLoginState,
    reducers: {
      login(state, action) {
        state.token = action.payload.idToken;
        state.email = action.payload.email;
        state.showLogin=true;
      },
      ragister(state,action){
         state.token=action.payload.idToken
         console.log("token",action.payload.idToken);
         state.showLogin=true;
      },
      logout(state) {
        state.token = "";
        state.email = "";
        state.showLogin=false;

      },
      toggleShowLogin(state) {
        state.showLogin = !state.showLogin;
      },
    },
  });
  export const loginAction = loginSlice.actions;
  
  export default loginSlice.reducer;
  