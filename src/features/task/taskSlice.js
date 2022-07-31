import { createSlice } from "@reduxjs/toolkit";
import { TaskData } from "../../FakeData";

export const taskSlice = createSlice({
  name: "task",
  initialState: { value: TaskData },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload.data);
    },
    deleteTask: (state, action) => {
      // Filter out deleted task
      state.value = state.value.filter((task) => task.id != action.payload.id);
    },
    editTask: (state, action) => {
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          // Update object keys with new values
          Object.keys(action.payload.data).forEach(
            (k) => (task[k] = action.payload.data[k])
          );
        }
      });
    },
    changeStatus: (state, action) => {
      // If status is Open make it Closed and vice versa
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          if (action.payload.status === "Open") {
            task.status = "Closed";
          } else {
            task.status = "Open";
          }
        }
      });
    },
    sortCol: (state, action) => {
      const attr = action.payload.attr;
      // Sort columns in ascending or descending order
      if (action.payload.ascending) {
        state.value = state.value.sort((a, b) =>
          a[attr] > b[attr] ? 1 : b[attr] > a[attr] ? -1 : 0
        );
      } else {
        state.value = state.value.sort((a, b) =>
          a[attr] < b[attr] ? 1 : b[attr] < a[attr] ? -1 : 0
        );
      }
    },
  },
});

export const { addTask, deleteTask, editTask, changeStatus, sortCol } =
  taskSlice.actions;

export default taskSlice.reducer;
