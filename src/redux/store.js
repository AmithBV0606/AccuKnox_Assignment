import { configureStore } from '@reduxjs/toolkit'
import widgetSlice from "../features/widgetSlice"

export const store = configureStore({
  reducer: {
    widget: widgetSlice
  },
});