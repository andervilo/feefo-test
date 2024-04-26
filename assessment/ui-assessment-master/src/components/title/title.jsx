import React from 'react';

import  './title.css';


export function Title({title}) {
  return(
    <>
      <div className="TitleMain">
        <div><span className='Title'>{title}</span></div>
      </div>
    </>
  ) ;
}
