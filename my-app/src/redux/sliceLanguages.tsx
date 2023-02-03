import { createSlice, PayloadAction} from '@reduxjs/toolkit'



interface DataUser {
    name:string
}

const INITIAL_STATE: DataUser[] = [
  {name: 'completou'}
]
const sliceDataUser = createSlice({
    name: 'dataUser',
    initialState: INITIAL_STATE,
    reducers: {
        addDataUser(state, { payload }: PayloadAction<string> ){
            return [...state, {name: payload }]
        }
    }
})

export default sliceDataUser.reducer;
export const { addDataUser } = sliceDataUser.actions;
export const useDataUser = (state: any) => {
    return state.dataUser
}