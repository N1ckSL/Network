import React from "react";
import s from "./News.module.css";
import newsPhoto from "../../Assets/Images/3.jpg";

import { Input } from "antd";
import { Row, Col, Divider } from "antd";
const style = { background: "#0092ff", padding: "8px 0" };

const { Search } = Input;
const onSearch = (value) => console.log(value);

const News = () => {
  return (
    <div className={s.news__wrapper}>
      <div className={s.searchbar__wrapper}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className={s.news__list__wrapper}>
        <div className={s.news__list}>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className={s.newslist__item}>
                <div className={s.item__header}>News 1</div>
                <div className={s.item__content}>
                  <div className={s.item__img__wrapper}>
                    {" "}
                    <img className={s.item__img} src={newsPhoto} alt="" />
                  </div>
                  <div className={s.item__intro}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quasi facere consectetur cumque fugiat modi non
                    dicta. Cum eius quas nam dignissimos qui error adipisci
                    accusamus quibusdam fugiat libero molestias, exercitationem
                    soluta assumenda impedit necessitatibus explicabo ipsa
                    corrupti id facilis mollitia officiis! Natus nemo asperiores
                    alias, maxime numquam fugit dicta?
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default News;
