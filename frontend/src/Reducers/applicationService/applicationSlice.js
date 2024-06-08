import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "fr",
  categories: [], // Initial empty array for categories
  mainLoader: false,
};

// Define slice for application state
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setMainLoader: (state, action) => {
      state.mainLoader = action.payload;
    },

    // Add more reducers as needed for category-related actions
  },
});

// Export action creators
export const { setLanguage, setCategories, setMainLoader } =
  applicationSlice.actions;

export default applicationSlice.reducer;
