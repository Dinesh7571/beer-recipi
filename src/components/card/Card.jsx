import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({ name, tagline, image, to }) => {
  return (
    <>
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="article-body">
            <h2>{name}</h2>
            <p>{tagline}</p>
            <Link to={to} className="read-more">
              Read more
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card