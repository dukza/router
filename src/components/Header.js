import React from 'react';
import {NavLink} from "react-router-dom";
import  './Header.css';


const MainNav = () => {
  return (
    <div className="w-100 d-flex mainNav">
      <NavLink exact to="/" className="nav-item flex-fill" activeClassName="active">쿠폰</NavLink>
      <NavLink to="/about/dyha" className="nav-item flex-fill">생활</NavLink>
      <NavLink to="/MainNav" className="nav-item flex-fill">결제</NavLink>
      <NavLink to="/mypage" className="nav-item flex-fill">금융</NavLink>
      <NavLink to="/login" className="nav-item flex-fill">더보기</NavLink>
    </div>
  );
};

export default MainNav;
