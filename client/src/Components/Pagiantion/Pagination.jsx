import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";

const Pagination = (props) => {

  return (
    <div>
      <ul>
        {props.poke?.map((e) => (
          <li>
            <Link to={`pokemon/${e.id}`} key={e.id}>
              <Card name={e.name} type={e.types} image={e.image} id={e.id} />
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={props.prevF}>prev</button>
      <span>page {props.current + 1}</span>
      <button onClick={props.nextF}>next</button>
    </div>
  );
};

export default Pagination;
