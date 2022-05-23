import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Account {
  success: boolean
  session_id: string
}

const initialState: Account = {
  success: false,
  session_id: '',
}

const accountSlice = createSlice({
  name: 'usersDetail',
  initialState,
  reducers: {
    accountLogin: (state, { payload }: PayloadAction<Account>) => {
      return payload
    },
    accountLogout: () => {
      return {
        success: false,
        session_id: '',
      }
    },
  },
})

export const { accountLogin, accountLogout } = accountSlice.actions
export default accountSlice.reducer
