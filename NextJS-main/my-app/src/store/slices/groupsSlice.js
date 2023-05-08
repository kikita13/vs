import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";

export const fetchGroups = createAsyncThunk("groups/fetchgroups",  (id) => {
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
  groups: [],
  status: null,
  error: null,
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.pending, (state) => {
      state.status = "Загрузка...";
      state.error = null;
    });
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.status = "Ответ получен";
      state.groups = action.payload.response ? action.payload.response[0] :null ;
      state.error = null;
    });
    
    builder.addCase(fetchGroups.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const groupsReducer = groupsSlice.reducer;
