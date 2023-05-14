import { TOKEN } from "@/consts/token";
import $ from 'jquery'
import { FIELDS, FIELDS_USER } from "@/consts/fields";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (props) => {
    const {owner_id, max_posts} = props
    const code = `var posts = API.wall.get({"count": 100,"owner_id":1,"extended":1,"fields":"${FIELDS_USER.toString()}"}); return posts;`
    let result = []
   await $.ajax({
      url: `https://api.vk.com/method/execute`,
      method: 'GET',
      data: {
        code,
        access_token: TOKEN,
        v: '5.131'
      },
      dataType: 'jsonp',
      success: (data) => {
        result.push(data.response)
      },
      error: (err) => {console.log(err);}
      
      
    })
    return result
  }
);

const initialState = {
  posts_count: '',
  posts_items: [],
  posts_profiles: [],
  posts_groups: [],
  status: null,
  error: null
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'pending'
      state.error = null
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts_items = action.payload?.items
      state.posts_count = action.payload?.count
      state.posts_groups = action.payload?.groups
      state.posts_profiles = action.payload?.profiles
      state.error = null
      state.status = 'fulfilled'
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'error'
    });
  },
});


export const postsSliceReducer = postsSlice.reducer;
