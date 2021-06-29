import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "./User";

import { Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <div>
      <div className={s.search}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className={s.users__wrapper}>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Users;
