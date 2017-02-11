import React from 'react';

const SideLink = () => (
  <ul className="side-link">
    <li ><a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&uin=800034239" target="_blank"><div>客服QQ</div></a></li>
    <li><a href="mailto:webguard@b.360.cn"><div>客服邮箱</div></a></li>
    <li><a href="http://bbs.360.cn/forum.php?mod=forumdisplay&fid=3062&filter=typeid&typeid=10560" target="_blank"><div>帮助中心</div></a></li>
    <li><a href="#" data-toggle="modal" data-target="#open-platform"><div>商务合作</div></a></li>
    <li><a href="#" className="to-top"><div>回到顶部</div></a></li>
  </ul>
)

export default SideLink;