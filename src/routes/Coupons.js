import React from 'react';
import {Route, NavLink, BrowserRouter as Router} from "react-router-dom";

import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageTitle from "../components/PageTitle";

const Coupon = ({match}) => {
  return (
    <div>
      <div className="h2">{match.params.title}</div>
    </div>
  );
};

const Coupons = () => {
  return (
    <Router>
      <div className="w-100 pageWrap">
        <PageTitle title="쿠폰"/>
        <div className="w-100 d-flex pageNav">
          <NavLink exact className="nav-item flex-fill" to="/" activeClassName="active">추천</NavLink>
          <NavLink className="nav-item flex-fill" to="/Coupon/dedline">종료임박</NavLink>
          <NavLink className="nav-item flex-fill" to="/Coupon/food">푸드</NavLink>
          <NavLink className="nav-item flex-fill" to="/Coupon/fashion">패션</NavLink>
          <NavLink className="nav-item flex-fill" to="/Coupon/beaty">뷰티</NavLink>
          <NavLink className="nav-item flex-fill" to="/Coupon/pet">반려동물</NavLink>
        </div>
        <Route path="/Coupon/:title" component={Coupon}></Route>
      </div>
    </Router>
  );
};

export default Coupons;
