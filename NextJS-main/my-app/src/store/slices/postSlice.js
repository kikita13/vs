import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/consts";
import $ from "jquery";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (id) => {
  const count = 100; // количество запрашиваемых постов за раз (граничение vk-api wall.get max 100)
  const maxPosts = 300; // количество постов, которое нужно вывести в общем
  let offset = 0; // отступ постов от начала стены (для того чтобы получать больше 100 постов)

  let allPosts = []; // значение всех постов для их дальнейшей обработки в один массив
  let allProfiles = []; // значение всех пользователей, от которых были оставлены посты на стене 
  let combinedArray = []
  try {
    while (allPosts.length < maxPosts) {
      const response = await $.ajax({
        url: `https://api.vk.com/method/wall.get?count=${count}&offset=${offset}&owner_id=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
        method: "GET",
        dataType: "jsonp",
      }); // происходит запрос на vk-api extended=1 для вывода поля profiles

      const posts = response?.response?.items; //присваиваем полученные данные о постах
      const newProfiles = response?.response?.profiles; //присваиваем полученные данные о пользователях, от которых были оставлены посты на стене 

      allPosts = allPosts.concat(posts); // объединяем запросы по 100 штук о постах в один массив
      allProfiles = allProfiles.concat(newProfiles); // объединяем запросы по 100 штук о пользователях в один массив

      if (posts.length < count) { // если количество полученных постов меньше чем запрошено, то функция останавливается
        break;
      }
      const ownerIds = [];                                //
      allPosts.forEach((post) => {                        // // получение списка id пабликов из которых были сделаны репосты на стену
        if (post.copy_history) {                          //
          post.copy_history.forEach((history) => {        //
            ownerIds.push(Math.abs(history.owner_id));              //
          });                                             //
        }                                                 //
      });                                                 //
      const filteredOwnersIds = [...new Set(ownerIds)];   //, а также удаление дубликатов
    
      combinedArray = allPosts.map((post) => { // объединяем данные о пользователе и посте в один объект info
        const profile = allProfiles.find(
          (profile) => post?.from_id == profile?.id
          );

          const info = {
          post_copyHistory: post?.copy_history,
          post_copyHistoryOwnersIds: filteredOwnersIds, // id групп из которых сделан репост (как поместить его не в каждый объект я хз)
          user_id: profile?.id,
          user_sex: profile?.sex,
          user_nickname: profile?.screen_name,
          user_avatar50: profile?.photo_50,
          user_avatar100: profile?.photo_100,
          user_onlineInfo: profile?.online_info,
          user_isOnline: profile?.online,
          user_firstName: profile?.first_name,
          user_LastName: profile?.last_name,
          user_canAccessClosed: profile?.can_access_closed,
          user_isClosed: profile?.is_closed,
          post_donut: post?.donut,
          post_comments: post?.comments,
          post_shortTextRate: post?.short_text_rate,
          post_hash: post?.hash,
          post_type: post?.type,
          post_attachments: post?.attachments,
          post_date: post?.date,
          post_edited: post?.edited,
          post_fromId: post?.from_id,
          post_id: post?.id,
          post_isFavorite: post?.is_favorite,
          post_likes: post?.likes,
          post_ownerId: post?.owner_id,
          post_source: post?.post_source,
          post_type: post?.post_type,
          post_reposts: post?.reposts,
          post_text: post?.text,
          post_views: post?.views,
        };

        return info 
      });
      offset += count;              // в случае если получено count постов то отступает 
    }
    return {posts: combinedArray, // от начала стены count постов и повторяем запрос, 
    profiles: allProfiles}        // отступая от начала стены count постов
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
