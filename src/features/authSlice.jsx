import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user:"",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = "";
        }
    }
});
export const {setUser, clearUser} = authSlice.actions;

export default authSlice.reducer;

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice ismi, state'lerin baslangic degerleri ve reducer'lar key-value yapisi seklinde tanimlanir.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.