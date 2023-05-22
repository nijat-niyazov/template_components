import { configureStore } from '@reduxjs/toolkit'
import comparing from './slice'


export const store = configureStore({
  reducer: {
    comparer: comparing
  },
})