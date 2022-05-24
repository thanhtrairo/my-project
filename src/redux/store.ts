import { configureStore } from '@reduxjs/toolkit'
import account from '../redux/account/acountSlice'

const store = configureStore({
  reducer: {
    account: account,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
