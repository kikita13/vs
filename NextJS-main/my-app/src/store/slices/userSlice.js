import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";

const fields = 'activities,about,blacklisted,blacklisted_by_me,books,bdate,can_be_invited_group,can_post,can_see_all_posts,can_see_audio,can_send_friend_request,can_write_private_message,career,common_count,connections,contacts,city,country,crop_photo,domain,education,exports,followers_count,friend_status,has_photo,has_mobile,home_town,photo_100,photo_200,photo_200_orig,photo_400_orig,photo_50,sex,site,schools,screen_name,status,verified,games,interests,is_favorite,is_friend,is_hidden_from_feed,last_seen,maiden_name,military,movies,music,nickname,occupation,online,personal,photo_id,photo_max,photo_max_orig,quotes,relation,relatives,timezone,tv,universities'
export const fetchUser = createAsyncThunk("user/fetchUser", async (ids) => {
  const batchSize = 1000;
  let results = [];
  const batches = [];
   for (let i = 0; i < ids.length; i += batchSize) {
    batches.push(ids.slice(i, i + batchSize));
  }
  
  for (const batch of batches) {
    const result = await new Promise((resolve, reject) => {
      $.ajax({
        url: `https://api.vk.com/method/users.get?user_ids=${batch.join(",")}&fields=${fields}&access_token=${TOKEN}&v=5.131`,
        method: "GET",
        dataType: "jsonp",
        success: (data) => {
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
    results.push(result);
  }
  let all = [];
  results?.map(data => all.push(...data?.response))
  return all;
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
      state.user = action.payload;
      state.error = null;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "Ошибка";
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
