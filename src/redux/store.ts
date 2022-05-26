import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../redux/account/acountSlice'
import modalSlice from './modal/modalRateSlice'

const store = configureStore({
  reducer: {
    account: accountSlice,
    modalShow: modalSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
