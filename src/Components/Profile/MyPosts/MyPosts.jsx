import React, { PureComponent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxLengthCreator,
} from "../../Utils/Validators/validators";
import { Textarea } from "../../common/Preloader/FormsControl/FormsControl";

const maxLength300 = maxLengthCreator(300);

const MyPosts = React.memo((props) => {
  let postElements = [...props.posts].reverse().map((p) => (
    <Post key={p.id} message={p.message} likes={p.likesCount} />
  ));

  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.posts__block}>
      <h2>My Posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>New Posts</div>
      {postElements}
    </div>
  );
});
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={Textarea}
          placeholder={"Share your thoughts"}
          validate={[requiredField, maxLength300]}
        />
      </div>
      <div>
        <button className={s.post__button}>Add Post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
