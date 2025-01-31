import { createSlice } from '@reduxjs/toolkit';
import {
  deleteLocalStorage,
  loadLocalStorage,
  saveLocalStorage,
} from '@shared/services/LocalStorageService';
import { AppThunk } from '@store/store';
import { ILoginForm } from '@features/auth/types';
import { updateProfile } from '@shared/slices/profileSlice';

interface AuthState {
  isAuthenticated: boolean;
  isAuthenticatedChecked: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticatedChecked: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuthorizationSuccess: (state) => {
      state.isAuthenticated = true;
      state.isAuthenticatedChecked = true;
    },
    checkAuthorizationFailure: (state) => {
      state.isAuthenticated = false;
      state.isAuthenticatedChecked = true;
    },
    loginSuccess(state) {
      state.isAuthenticated = true;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export const checkAuthorization = (): AppThunk => async (dispatch) => {
  const authToken = loadLocalStorage('authToken');
  const user = loadLocalStorage('user');

  if (authToken && user) {
    dispatch(authActions.checkAuthorizationSuccess());
    dispatch(updateProfile(user));
  } else {
    dispatch(authActions.checkAuthorizationFailure());
  }
};

export const login =
  (values: ILoginForm): AppThunk =>
  async (dispatch) => {
    const user = {
      name: 'test',
      email: values.username,
    };

    dispatch(authActions.loginSuccess());
    dispatch(updateProfile(user));
    saveLocalStorage('authToken', 'test');
    saveLocalStorage('user', user);
  };

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(authActions.logoutSuccess());

  deleteLocalStorage('authToken');
  deleteLocalStorage('user');
};

export const authReducer = authSlice.reducer;
