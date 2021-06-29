import React from "react";
import s from "./Login.module.css";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/Preloader/FormsControl/FormsControl";
import {
  requiredField,
  maxLengthCreator,
} from "../Utils/Validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { Divider } from "antd";

const maxLength25 = maxLengthCreator(25);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form className={s.login__form} onSubmit={handleSubmit}>
      <div className={s.login__inputs}>
        {createField("Email","email",[requiredField, maxLength25],Input )}
        {createField("Password","password",[requiredField, maxLength25],Input, { type: "password"} )}
        {createField(null,"rememberMe",[],Input, { type: "checkbox"}, "Remember Me" )}

        {captchaUrl && <img src={captchaUrl}></img>}
        {captchaUrl && createField("captcha image","captcha",[requiredField],Input,{} ) }

      { error && <div className={s.form__error}>{ error }</div>}
      </div>
      <div>
        <button className={s.login__button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.login__page}>
      <Divider>Login</Divider>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl= {props.captchaUrl} />
      <Divider></Divider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
