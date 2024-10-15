import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncArticleFetch:any = createAsyncThunk(
    'articleSlice/asyncArticleFetch',
    async () => {
      var client_id = '1F1hHOT4obL85Nl8WY35';
      var client_secret = 'lpCrfwcbsp';
      //const resp = await fetch('https://openapi.naver.com/v1/search/news.json?query=' + encodeURI('노벨문학상'),{
      const resp = await fetch('v1/search/news.json?query=' + encodeURI('노벨문학상'),{  
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
      });
      const data = await resp.json();
      console.log('articleSlice/asyncArticleFetch', data);
      return data.items;
    }
  )

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState: {
        modalStatus: false,
        asyncStatus: 'Standby',
        articleInfo: [
          {
            title: '',
            description:'',
            pubDate:'',
            link:'',
            originallink:''
          }
        ]
    },
    reducers:
    {
      modalStateChange: (state, action) => {
        console.log('state.modalStatus',state.modalStatus, action.payload);
        state.modalStatus = !state.modalStatus;
      }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncArticleFetch.pending, (state,action)=>{
            state.asyncStatus = 'Loading';
          })
          builder.addCase(asyncArticleFetch.fulfilled, (state,action)=>{
            //action.payload를 article형식에 맞게 변환해서 넣어야 함
            console.log('action.payload',action.payload)
            //state.articleInfo = [ ...state.articleInfo, action.payload];
            state.articleInfo = action.payload;
            state.asyncStatus = 'complete';
          })
          builder.addCase(asyncArticleFetch.rejected, (state,action)=>{
            state.asyncStatus = 'fail';
          })
    }
});

export default articleSlice;
export const { modalStateChange } = articleSlice.actions;