import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    newsList:[],
    loading:true,

}
const API_KEY="pub_69266ad19f7163bc1269d3ac4a5d7ce6b3a6"

export const getNews = createAsyncThunk(
    "news/getNews",
    async ()=>{
        const url =`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=tr,en`;
        const {data} = await axios.get(url);
        return data.results;
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        clearNewsList: (state) => {
            state.newsList = [];
        }
    },
    extraReducers: {
        [getNews.pending]: (state, action) => {
           
            state.loading = true;
        },
        [getNews.fulfilled]: (state, action) => {
            state.newsList = action.payload;
            state.loading = false;
        },
        [getNews.rejected]: (state, action) => {
            state.loading = false;
        }

    }
});
export const {clearNewsList} = newsSlice.actions;

export default newsSlice.reducer;

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.

//&extraReducers
//! baska slice'lardaki tanimlanan action'lara cevap vermek
//! bilhassa  createAsyncThunk tarafindan olusturulan action'lara
//! cevap vermek icin kullanilir
