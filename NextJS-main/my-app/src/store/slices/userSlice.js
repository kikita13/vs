import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";


export const fetchUser = createAsyncThunk("user/fetchUser", (user) => {
  const ids = user?.map(data => data?.id)
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.vk.com/method/users.get?&user_ids=${ids?.join(',')}&access_token=${TOKEN}&v=5.131`,
      method: "GET",
      dataType: "jsonp",
      success: (data) => {
        const result = data;
        resolve(result);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
});

const initialState = {
  user: [],
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "Ответ получен";
      state.user = action.payload.response[0];
      state.error = null;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
