import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, createUserDocument } from "./../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const initialState = {
  currentUser: {},
  authenticating: false,
};

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async (details) => {
    const { email, password } = details;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      localStorage.setItem("user",JSON.stringify(user ? user : null))
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signinHandler = createAsyncThunk(
  "auth/signinHandler",
  async (details) => {
    const { email, password } = details;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      createUserDocument(user,{
          email:user.email,
          id:user.id,
          score:0
      })
      localStorage.setItem("user",JSON.stringify(user ? user : null))
      return user
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: auth,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginHandler.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.currentUser = action.payload;
        state.authenticating = false;
      })
      .addCase(loginHandler.pending, (state) => {
        state.authenticating = true;
      })

      .addCase(signinHandler.pending, (state) => {
        state.authenticating = true;
      })
      .addCase(signinHandler.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.authenticating = false;
      });
  },
});

export default authSlice.reducer;
