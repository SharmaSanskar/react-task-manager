import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
