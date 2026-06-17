import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type User = {
  name: string;
  color: string;
};
type UserState = {
  users: User[];
  showList: boolean;
  submitUser: boolean;
  loading: boolean;
  error: string;
};
const initialState: UserState = {
  users: [],
  showList: false,
  submitUser: false,
  loading: false,
  error: ''
};
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            if (!action.payload.name) return
            state.submitUser = true
            state.users.push({name:action.payload.name, color:action.payload.color})
        },
        toggleList: (state) => {
            if (state.users.length === 0) return
            state.submitUser = false
            state.showList = !state.showList
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users.splice(action.payload, 1)
        }
        
    }
})
export const actions = userSlice.actions
export default userSlice.reducer