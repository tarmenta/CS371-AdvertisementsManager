import React from 'react'

const Advertisements = ({advertisements}) => {
    return (
    <ul>
      <h2> Advertisement List </h2>
      {advertisements.map((advertisements) => {
        return (
          <li key={advertisements.advertisement_id}>
            <h4> {advertisements.advertisement_title} </h4>
            <p> {advertisements.advertisement_details} </p>
            <p> {advertisements.advertisement_date} </p>
            <p> ${advertisements.price} </p>
            <p> {advertisements.category_id} </p>
            <p> {advertisements.user_id} </p>
            <p> {advertisements.moderator_id} </p>
            <p> {advertisements.status_id} </p>
          </li>
        );
      })}
    </ul>
    )
};

export default Advertisements