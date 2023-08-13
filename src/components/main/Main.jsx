import React from 'react';
import "./Main.scss";
import {data} from "../../Helper/data";

const Main = () => {
  console.log(data);
  return (
    <div className='card-container'>
        <h1>Main</h1>
    </div>
  )
}

export default Main