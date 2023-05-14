import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN } from "@/consts/token";
import $ from 'jquery'

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (props) => {
    const code = `var posts = API.wall.get({"count": 100,"owner_id":1}); return posts;`
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
  comments: [], 
  status: null,
  error: null
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.status = 'pending'
      state.error = null
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.error = null
      state.status = 'fulfilled'
      state.comments = action.payload
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'rejected'
    });
  },
});

export const { nameAction} = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;





// export const fetchComments = createAsyncThunk(
//   "comments/fetchComments",
//   async (props) => {
//     const { owner_id, post_id } = props;
    
//     const code = `
//       var posts = API.wall.get({ owner_id: ${owner_id}, count: 100 }).items;
//       var comments = [];
      
//       posts.forEach(function(post) {
//         var postComments = API.wall.getComments({
//           owner_id: ${owner_id},
//           post_id: post.id,
//           need_likes: 1,
//           count: 100,
//           extended: 1
//         }).items;
        
//         comments = comments + postComments;
//       });
      
//       return comments;
//     `;
    
//     try {
//       const response = await $.ajax({
//         url: `https://api.vk.com/method/execute`,
//         method: 'GET',
//         data: {
//           code,
//           access_token: TOKEN,
//           v: '5.131'
//         },
//         dataType: 'jsonp'
//       });
      
//       return response.response;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );
