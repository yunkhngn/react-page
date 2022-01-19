import React from 'react';

const Time = ({data}) => {
  return (<>
    <div className="menu-time">
        {data.days + data.daynumber}
        <span className="active time"></span>
    </div> 
    </>);
};

export default Time;
