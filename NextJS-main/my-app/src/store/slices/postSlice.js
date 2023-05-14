import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FIELDS, TOKEN } from "@/consts/consts";
import $ from "jquery";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (props) => {
  const {owner_id} = props
  const code = `var posts = API.wall.get({"count": 100,"owner_id":1, "fields": ${FIELDS}}); return posts;`
  await $.ajax({
    url: `https://api.vk.com/method/execute`,
    method: 'GET',
    dataType: 'jsonp',
    data: code,
    success: (data) => {
      return data.response
    }

  })
})

const initialState = {
  posts: [],
  profiles: [],
  status: "Ожидание запроса",
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
