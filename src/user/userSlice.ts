//JS Version
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   name: '',
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateName(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { updateName } = userSlice.actions;
// export default userSlice.reducer;

//TS Version
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type userState = {
  name: string;
};

const initialState: userState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
