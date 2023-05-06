import { TOKEN } from "@/consts/consts";
import { fetchPosts } from "@/store/slices/postSlice";
import React from "react";
import jsonp from "jsonp";
import { useDispatch, useSelector } from "react-redux";
const Button = (props) => {
  const { styles, id, text, setPosts, setGroup } = props;

  const dispatch = useDispatchspatch()
  const posts = useSelectorlector(state => state.posts.posts)

  const handleClick = () => {
    if (+id > 0) {
      getPosts();
    } else {
      jsonp(
        `https://api.vk.com/method/groups.getById?&group_id=${Math.abs(+id)}&extended=1&access_token=${TOKEN}&v=5.131`,
        null,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            getPosts();
            setGroup(data.response[0]);
          }
        }
      );
    }
  };

  return (
    <div className={styles.btn} onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default Button;
