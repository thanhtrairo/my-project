import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Account {
  username: string
  password: string
  request_token: string
}

const initialState: Account = {
  username: '',
  password: '',
  request_token: '',
}

const accountSlice = createSlice({
  name: 'usersDetail',
  initialState,
  reducers: {
    accountLogin: (state, { payload }: PayloadAction<Account>) => {
      return payload
    },
    accountLogout: (state) => {
      return state
    },
  },
})

export const { accountLogin, accountLogout } = accountSlice.actions
export default accountSlice.reducer
