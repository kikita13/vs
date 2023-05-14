import { TOKEN } from "@/consts/consts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $ from 'jquery';

export const fetchComments = createAsyncThunk("comments/fetchComments", async (posts) => {
  const count = 100;
  const promises = posts.map((post, index) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
          url: `https://api.vk.com/method/wall.getComments?owner_id=${post.post_ownerId}&post_id=${post.post_id}&need_likes=1&count=${count}&extended=1&thread_items_count=8&access_token=${TOKEN}&v=5.131`,
          method: "GET",
          dataType: "jsonp",
          success: (data) => {
            const newComments = data?.response?.items;
            const infoProfiles = data?.response?.profiles;
            const infoGroups = data?.response?.groups;
            resolve({ newComments, infoProfiles, infoGroups }); // Возвращаем объект с комментариями, информацией о профилях и информацией о группах
          },
          error: (error) => {
            reject(error);
          },
        });
      }, 200 * index); // Задержка на 1 секунду между запросами (можете изменить значение по желанию)
    });
  });
  

  const results = await Promise.all(promises);
  const allComments = results.flatMap((result) => result.newComments); // Объединяем массивы комментариев в один
  const infoProfiles = results.flatMap((result) => result.infoProfiles); // Объединяем массивы информации о профилях в один
  const infoGroups = results.flatMap((result) => result.infoGroups); // Объединяем массивы информации о группах в один

  return { allComments, infoProfiles, infoGroups };
});

const initialState = {
  comments: [],
  infoGroups: [],
  infoProfiles: [],
  status: null,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = "Ответ получен";
      state.comments = action.payload?.allComments;
      state.infoGroups = action.payload?.infoGroups;
      state.infoProfiles = action.payload?.infoProfiles;
      state.error = null;
    });

    builder.addCase(fetchComments.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
