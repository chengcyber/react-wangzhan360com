import React from 'react';

const Section2 = ({
    active
}) => {

    const firstLevelClass = active ? "first-level first-level-animation" : "first-level";
    const leftNumClass = active ? "left-num left-num-animation" : "left-num";
    const thirdLevelClass = active ? "third-level third-level-animation" : "third-level";

    return (
      <div className="section animation-block">
          <div className={firstLevelClass}></div>
          <div className="second-level">
              <div className="left-num"></div>
              <div className="right-text">
                  <p>网站卫士 专注安全防护</p>
                  <p>网站卫士成立5周年，积累攻防经验，构造可信赖</p>
                  <p>的网站安全防护产品</p>
                  <p>平台内部采用多层安全架构，全力保护用户隐私，</p>
                  <p>让您的网站百毒不侵</p>
              </div>
          </div>
          <div className={thirdLevelClass}>
              <div className="white-bg"></div>
          </div>
      </div>
    );
}

export default Section2;