import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card1 from './Card1';

const Card = () => {
 
  return (
    <div className='cart-gen mt-4' >
      <div  className='d-flex gap-3 flex-row overflow-scroll' id='con'>
      <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
        <div>
          <Card1></Card1>
        </div>
      </div>

      
    </div>
  );
};

export default Card;

