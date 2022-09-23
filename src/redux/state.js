import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { selectedpage: '', isOpened: true };

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: { value: initialStateValue },
  reducers: {
    changeSidebarState: (state, action) => {
      state.value = action.payload;
    },

    resetSidebarState: (state) => {
      state.value = initialStateValue;
    },

    changePathname: (state, action) =>{
      state.value.selectedpage = action.payload;
    },
  },
});

export const { changeSidebarState, resetSidebarState, changePathname } = sidebarSlice.actions;

export default sidebarSlice.reducer;
