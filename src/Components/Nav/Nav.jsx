import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={` ${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      
      <div className={`${s.item} ${s.last}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Find People
        </NavLink>
      </div>

      <div className={`${s.item} ${s.friends}`}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends
        </NavLink>

        <div className={s.friends__list}>
          <div className={s.friends__list__item}>
            <img
              src="https://miro.medium.com/max/512/1*E1WxYQnh9xwLs6MT8BmhUg.png"
              alt=""
            />
            <li>Friend 1</li>
          </div>
          <div className={s.friends__list__item}>
            <img
              src="https://ps.w.org/profile-builder/assets/icon-256x256.png?rev=2257592"
              alt=""
            />
            <li>Friend 2</li>
          </div>
          <div className={s.friends__list__item}>
            <img
              src="https://www.clipartmax.com/png/full/170-1707274_admin-activation-from-cashflowproducts-registered-user.png"
              alt=""
            />
            <li>Friend 3</li>
          </div>
        </div>
      </div>

    
      <div className={`${s.item} ${s.last}`}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
