import React from "react";
import s from "./Music.module.css";

import { Row, Col, Slider } from "antd";
import { Tabs } from "antd";
const style = { background: "#0092ff", padding: "8px 0" };
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Music = () => {
  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="LoFi" key="1">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>

          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/DWcJFNfaw9c"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>

          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/-5KAN9_CzSA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/5yx6BWlEVcY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </TabPane>

      <TabPane tab="Pop" key="2"></TabPane>

      <TabPane tab="Classical" key="3">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/XULUBg_ZcAU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col className="gutter-row" span={6}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/u6d9Eeg1jok"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
};

export default Music;
