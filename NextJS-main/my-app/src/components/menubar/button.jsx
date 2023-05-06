import { TOKEN } from "@/consts/consts";
import React from "react";
import jsonp from "jsonp";
const Button = (props) => {
  const { styles, id, text, setPosts, setGroup } = props;

  const getPosts = () => {
    jsonp(
      `https://api.vk.com/method/wall.get?count=100&owner_id=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
      null,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          const arr1 = data?.response?.items;
          const arr2 = data?.response?.profiles;
          const result = arr1.map((obj1) => {
            const obj2 = arr2.find((obj2) => obj2.id === obj1.from_id);
            return { ...obj2, ...obj1 };
          });
          setPosts(result);
        }
      }
    );
  };

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
