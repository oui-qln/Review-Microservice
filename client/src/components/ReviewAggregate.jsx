import React from 'react';
import WriteReview from './WriteReview';
import style from './reviewAggregate.css';

/*
  needs to have a overall rating component
  rating distribution component
  advanced filter div at the bottom
*/

function ReviewAggregate() {
  return (
    <>
      <div className={style.aggReview}>
        <WriteReview />
      </div>
      <div className="advanced-filters">
        <div>advanced Filters</div>
      </div>
    </>
  );
}

export default ReviewAggregate;
