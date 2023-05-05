import { TOKEN } from "@/consts/consts";
import React from "react";
import $ from "jquery";
const Button = (props) => {
  const { styles, id, text, setPosts, setGroup } = props;
  const getPosts = () => {
    setPosts([]);
    $.ajax({
      url: `https://api.vk.com/method/wall.get?count=100&owner_id=${id}&extended=1&access_token=${TOKEN}&v=5.131`,
      method: "GET",
      dataType: "JSONP",
      success: (data) => {
        if (data !== undefined) {
          const arr1 = data?.response?.items;
          const arr2 = data?.response?.profiles;
          const result = arr1.map((obj1) => {
            const obj2 = arr2.find((obj2) => obj2.id === obj1.from_id);
            return { ...obj2, ...obj1 };
          });
          setPosts(result);
          console.log(result);
        }
      },
    });
  }

  const handleClick = (data) => {
    if(id > 0) {
      getPosts()
    } {
      
      $.ajax({
        url: `https://api.vk.com/method/groups.getById?&group_id=${Math.abs(+id)}&extended=1&access_token=${TOKEN}&v=5.131`,
        method: "GET",
        dataType: "JSONP",
        success: (data) => {console.log(data)
          if(data !== undefined) {
            getPosts();
            setGroup(data.response[0])
          }
        }
      })
    }
  };

  return (
    <div className={styles.btn} onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default Button;
