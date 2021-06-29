import React from "react";
import s from "./ProfileStatus.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
     props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };


  
  return (
    <>
        
      <div className={s.profile__status}>
        {!editMode && (
          <div className={s.status__uneditable}>
            <span onDoubleClick={activateEditMode}>
              {props.status || "______________"}
            </span>
          </div>
        )}
        {editMode && (
          <div className={s.status__editable}>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  );
};

// <div className={s.description__text}>
//   {props.profile.aboutMe ? (
//     <div className>
//       <h3>{props.profile.aboutMe}</h3>
//     </div>
//   ) : (
//     <div>
//       <h3>
//         I wish there was a way to know you're in the good old days before you've
//         actually left them...
//       </h3>
//     </div>
//   )}
// </div>;

export default ProfileStatusWithHooks;
