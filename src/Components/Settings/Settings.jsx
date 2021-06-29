import React, { useState } from "react";
import s from "./Settings.module.css";

import { Button, Divider, Tooltip, Input, AutoComplete, Space } from "antd";
import {
  EnvironmentOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  InfoCircleOutlined,
  UnlockFilled,
  MailFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const { Option } = AutoComplete;

const Complete1 = () => {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "mail.ru", "yahoo.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="new E-mail"
    >
      {result.map((email) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};
// !--Complete1 <-----> Email Input \\

//  LocationSelection <-----> Location \\
const renderTitle = (title) => {
  return (
    <span>
      {title}
      <a
        style={{
          float: "right",
        }}
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
};

const renderItem = (title, count) => {
  return {
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <EnvironmentOutlined /> {count}
        </span>
      </div>
    ),
  };
};

const options = [
  {
    label: renderTitle("Europe"),
    options: [
      renderItem("Belgium"),
      renderItem("Bulgaria"),
      renderItem("Czech Republic"),
      renderItem("Denmark"),
      renderItem("Finland"),
      renderItem("France"),
      renderItem("Germany"),
      renderItem("Great Britain"),
      renderItem("Greece"),
      renderItem("Italy"),
      renderItem("Lichtenstein"),
      renderItem("Moldova, Republic of"),
      renderItem("Norway"),
      renderItem("Poland"),
      renderItem("Portugal"),
      renderItem("Romania"),
      renderItem("Spain"),
      renderItem("Sweden"),
      renderItem("Switzerland"),
    ],
  },
  {
    label: renderTitle("America"),
    options: [renderItem("Canada"), renderItem("Mexico"), renderItem("U.S.A.")],
  },
  {
    label: renderTitle("Asia"),
    options: [
      renderItem("Armenia"),
      renderItem("Azerbaijan"),
      renderItem("China"),
      renderItem("Georgia"),
      renderItem("India"),
      renderItem("Indonesia"),
      renderItem("Japan"),
      renderItem("Russia"),
      renderItem("South Korea"),
      renderItem("Thailand"),
      renderItem("Ukraine"),
      renderItem("Vietnam"),
    ],
  },
];

const Complete = () => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{
      width: 250,
    }}
    options={options}
  >
    <Input.Search size="medium" placeholder="Country" />
  </AutoComplete>
);
// !-- LocationSelection \\

//  Password Input \\
const Password = () => (
  <Space direction="vertical">
    <Input.Password placeholder="current password" />
    <Input.Password
      placeholder="new password"
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  </Space>
);

// !--Password Input \\

const Settings = () => {
  return (
    <div className={s.settings__wrapper}>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UnlockFilled />
              Password
            </span>
          }
          key="1"
        >
          <Password />
          <br /> <br />
          <Button type={"primary"}>Save</Button>
        </TabPane>
        <TabPane
          tab={
            <span>
              <MailFilled />
              E-mail
            </span>
          }
          key="2"
        >
          <div style={{ marginBottom: 16, maxWidth: 300 }}>
            <Complete1 />
          </div>
          <Button type={"primary"}>Save</Button>
        </TabPane>

        <TabPane
          tab={
            <span>
              <EnvironmentFilled />
              Location
            </span>
          }
          key="3"
        >
          <Complete />
          <br />
          <Input
            placeholder="Localitation"
            style={{ width: 200, marginTop: 10 }}
            prefix={<EnvironmentOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Type your localitation: City, village, etc.">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <br /> <br />
          <Button type={"primary"}>Save</Button>
        </TabPane>
      </Tabs>

    
      <Divider orientation="center" style={{ marginTop: 150 }}></Divider>
    </div>
  );
};

export default Settings;
