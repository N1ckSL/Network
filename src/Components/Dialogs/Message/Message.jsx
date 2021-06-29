import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  let addText = React.createRef();
  let addMessage = () => {
    let text = addText.current.value;
    alert(text);
  };

  return (
    <div className={s.message__wrapper}>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Message;
