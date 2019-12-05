import React from 'react';

const PageTitle = (props) => {
  return (
    <div className="align-items-center">
      <div className="h2 font-weight-bolder flex-fill">{props.title}</div>
      {/*<div><a href="">받은쿠폰</a><a href="">혜택</a><a href=""><i className="fal fa-bell"></i></a></div>*/}
    </div>
  );
};

export default PageTitle;
