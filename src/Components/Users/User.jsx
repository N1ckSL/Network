import React from "react";
import s from "./Users.module.css";
import userPhoto from "..//../Assets/Images/1.png";
import { NavLink } from "react-router-dom";

let User = ({ user,follow,unfollow,followingInProgress }) => {

  return (
        // <User key={u.id} user={u} followingInProgress={followingInProgress} />

          <div className={s.user__profile}>
            <div className={s.profile__intro}>
              <div className={s.user__photo__wrapper}>
                <NavLink className={s.photo__subtitle} to={"/profile" + user.id}>
                  <img
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={s.user__photo}
                    alt=""
                  />
                </NavLink>
              </div>

              <div className={s.button__wrapper}>
                {user.followed ? (
                  <button
                    disabled={followingInProgress.some(
                      (id) => id === user.id
                    )}
                    className={s.unfollow__button}
                    onClick={() => {
                      unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some(
                      (id) => id === user.id
                    )}
                    className={s.follow__button}
                    onClick={() => {
                      follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.profile__info__wrapper}>
              <div className={s.profile__info}>
                <NavLink className={s.name__link} to={"/profile" + user.id}>
                  <div className={`${s.info__name} ${s.truncate}`}>{user.name}</div>
                </NavLink>

                <div className={`${s.info__description} ${s.truncate}`}>{user.status}</div>
              </div>
              <div className={s.profile__sub}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        )}


export default User;
