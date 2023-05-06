import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";
export const fetchPosts = createAsyncThunk("posts/fetchPosts",  (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.vk.com/method/wall.get?count=100&owner_id=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
      method: "GET",
      dataType: "jsonp",
      success: (data) => {
        const arr1 = data?.response?.items;
        const arr2 = data?.response?.profiles;
        const result = arr1?.map((obj1) => {
          const obj2 = arr2?.find((obj2) => obj2.id === obj1.from_id);
          return { ...obj2, ...obj1 };
        });
        resolve(result);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
});


const initialState = {
  posts: [],
  status: null,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "Ответ получен";
      state.posts = action.payload;
      state.error = null;
    });
    
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const postsReducer = postsSlice.reducer;
