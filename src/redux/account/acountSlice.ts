import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountType } from '~/type/type'

const initialState: AccountType = {
  success: false,
  session_id: '',
  accountId: '',
  username: '',
}

const accountSlice = createSlice({
  name: 'usersDetail',
  initialState,
  reducers: {
    accountLogin: (state, { payload }: PayloadAction<AccountType>) => {
      return payload
    },
    accountLogout: () => {
      return {
        success: false,
        session_id: '',
        accountId: '',
        username: '',
      }
    },
  },
})

export const { accountLogin, accountLogout } = accountSlice.actions
export default accountSlice.reducer
