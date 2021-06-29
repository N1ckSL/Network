import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/1.png";
import ProfileDataForm from "./ProfileDataForm";

import { message, Button } from 'antd';
import { Divider } from 'antd';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <div className={s.profileinfo__wrapper}>
      <div className={s.profileimg__wrapper}></div>

      <div className={s.description__wrapper}>
        <div className={s.profile__avatar}>
          <img
            className={s.avatar__img}
            src={profile.photos.large || userPhoto}
            alt=""
          />
          {isOwner && (
            <input
              className={s.load__photo}
              type={"file"}
              onChange={onMainPhotoSelected}
            />
          )}
        </div>
        <div className={s.username}>{profile.fullName}</div>

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}

        <ProfileStatusWithHooks
          className={s.profile__status}
          status={status}
          updateStatus={updateStatus}
        />
        <Divider  orientation="left"></Divider>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={s.profile__description}>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>Full Name: {profile.fullName}</div>
      <div>Looking for a Job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJob && (
        <div>My Skills: {profile.lookingForAJobDescription} </div>
      )}
      <div>About Me: {profile.aboutMe}</div>

      {isOwner && (
        <div className={s.profileedit__btn}>
          <Button type="primary" onClick={goToEditMode}>Edit</Button>
          {/* <button onClick={goToEditMode}>Edit</button> */}
        </div>
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.profile__contacts}>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
