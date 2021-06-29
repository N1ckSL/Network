import React from "react";
import { Form, reduxForm } from "redux-form";
import s from "./ProfileDataForm.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../common/Preloader/FormsControl/FormsControl";

const ProfileDataForm = ({handleSubmit, profile, error }) => {
    
  return (
    <Form className={s.profile__description__edit} onSubmit={handleSubmit}>
      <div className={s.profileedit__btn}>
        <button >Save</button> { error && <div className={s.form__error}>{ error }</div>}
      </div>
       <div className={s.profile__contacts}>
           Contacts: {Object.keys(profile.contacts).map(key => {
               return <div key={key} className={s.contacts__item}> 
               {key}: {createField(key, "contacts." + key, [], Input)}
           </div>
           })}
        </div> 
      <div>Full Name: {createField("Full Name", "fullName", [], Input)}</div>
      <div>About Me:  { createField("About me", "aboutMe", [], Textarea) } </div>
      <div>Looking for a Job: { createField("", "lookingForAJob", [], Input, {type:"checkbox"}) } </div>
      <div>My Skills: { createField("My Skills", "lookingForAJobDescription", [], Textarea) }  </div>

    </Form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm);

export default ProfileDataFormReduxForm;
