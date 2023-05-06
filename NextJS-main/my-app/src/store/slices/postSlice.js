import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (id) => {
  const count = 100;
  const maxPosts = 100;
  let offset = 0;

  let allPosts = [];
  let allProfiles = [];

  try {
    while (allPosts.length < maxPosts) {
      const response = await $.ajax({
        url: `https://api.vk.com/method/wall.get?count=${count}&offset=${offset}&owner_id=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
        method: "GET",
        dataType: "jsonp",
      });

      const posts = response?.response?.items;
      const newProfiles = response?.response?.profiles;

      allPosts = allPosts.concat(posts);
      allProfiles = allProfiles.concat(newProfiles);

      if (posts.length < count) {
        break;
      }

      offset += count;
    }

    return {
      posts: allPosts,
      profiles: allProfiles,
    };
  } catch (error) {
    throw new Error(error);
  }
});

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
      state.posts = action.payload.posts;
      state.profiles = action.payload.profiles;
      state.error = null;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const postsReducer = postsSlice.reducer;
