import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import Bundle from './Bundle';

// import Home from "bundle-loader?lazy&name=home!pages/Home/Home.jsx";
// import Page1 from "bundle-loader?lazy&name=page1!pages/Page1/Page1.jsx";
// import Counter from "bundle-loader?lazy&name=counter!pages/Counter/Counter.jsx";
// import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo.jsx";

import Home from "pages/Home/Home.jsx";
import Page1 from "pages/Page1/Page1.jsx";
import Counter from "pages/Counter/Counter.jsx";
import UserInfo from "pages/UserInfo/UserInfo.jsx";

// const Loading = function () {
//   return <div>Loading...</div>
// };

// const createComponent = (component) => (props) => (
//   <Bundle load={component}>
//     {
//       (Component) => Component ? <Component {...props} /> : <Loading/>
//     }
//   </Bundle>
// );

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userinfo">UserInfo</Link></li>
      </ul>
      <Switch>
        {/* <Route exact path="/" component={createComponent(Home)} />
        <Route path="/page1" component={createComponent(Page1)} />
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/userinfo" component={createComponent(UserInfo)}/> */}
        
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/counter" component={Counter} />
        <Route path="/userinfo" component={UserInfo} />
      </Switch>
    </div>
  </Router>
);


export default getRouter;