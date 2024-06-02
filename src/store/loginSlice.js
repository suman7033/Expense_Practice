import {createSlice} from "@reduxjs/toolkit";
import showExpense from "../component/Middle/showExpense";


const initialLoginState = {
    showLogin: false,
    token: "",
    email: "",
    showExpense: false,
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
      showExpenseHandler(state,action){
         state.showExpense=!state.showExpense;
      },
      toggleShowLogin(state) {
        state.showLogin = !state.showLogin;
      },
    },
  });
  export const loginAction = loginSlice.actions;
  
  export default loginSlice.reducer;
  