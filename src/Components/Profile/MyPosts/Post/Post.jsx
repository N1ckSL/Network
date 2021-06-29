import React from "react";
import s from "./Post.module.css";
import imgHeart from './heart.png';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png"
          alt=""
        />
       { props.message }
        <div className={s.post__likes}>
          <img src={imgHeart} alt=""/> {props.likes}
        </div>
      </div>
    </div>
  );
};

export default Post;
