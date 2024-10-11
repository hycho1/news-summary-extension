import { configureStore } from "@reduxjs/toolkit";
import articleSlice from './slice/articleSlice';

const store = configureStore({
    reducer: {
        article: articleSlice.reducer,
      },
});

export default store;