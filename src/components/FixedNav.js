import React from 'react';
import './FixedNav.css';

const FixedNav = ({navContentList}) => {
  return (
    <header className="top-nav">
      <div className="top-nav-wrapper">
        <ul className="top-nav-list welcome-list">
            <li className="active"><a href="/index/index">首页</a></li>
            <li><a href="/sundry/product_introduce">产品介绍</a></li>
            <li><a href="/sundry/platform">开放平台API</a></li>
            <li><a href="/sundry/stationmaster">站长服务</a></li>
            <li><a href="/sundry/about_us">关于我们</a></li>
            <span className="top-nav-logo"><a href="/index/index"></a></span>
        </ul>
        <ul className="top-nav-loginList">
            <li><a className="signIn" href="#">登录</a></li>
            <li className="loginLine"></li>
            <li><a className="signUp" href="#">注册</a></li>
        </ul>
      </div>
    </header>
  )
}


export default FixedNav;
