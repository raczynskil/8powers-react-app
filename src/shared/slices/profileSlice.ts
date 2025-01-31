import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '@store/store';

interface ProfileState {
  name: string;
  email: string;
}

const initialState: ProfileState = {
  name: '',
  email: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileSuccess(state, action: PayloadAction<ProfileState>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const profileActions = profileSlice.actions;

export const updateProfile =
  (data: ProfileState): AppThunk =>
  async (dispatch) => {
    dispatch(profileActions.updateProfileSuccess(data));
  };

export const profileReducer = profileSlice.reducer;
