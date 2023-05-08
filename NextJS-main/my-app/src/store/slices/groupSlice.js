import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";

export const fetchGroup = createAsyncThunk("group/fetchGroup",  (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.vk.com/method/groups.getById?&group_ids=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
      method: "GET",
      dataType: "jsonp",
      success: (data) => {
        const result = data
        resolve(result);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
});


const initialState = {
  group: [],
  status: null,
  error: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGroup.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchGroup.fulfilled, (state, action) => {
      state.status = "Ответ получен";
      state.group = action.payload.response ? action.payload.response[0] :null ;
      state.error = null;
    });
    
    builder.addCase(fetchGroup.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const groupReducer = groupSlice.reducer;
