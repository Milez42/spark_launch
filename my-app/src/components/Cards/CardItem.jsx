import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li className="cards__item z-10">
            <Link className='cards__item__link' to={props.path}>
                <figure className="cards__item__pic-wrap object-cover" data-category={props.label}>
                    <img src={props.src} alt="" height="500" width="700" className='object-cover'></img>
                </figure>
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/10 opacity-100 hover:opacity-100'></div>
                <div className="cards__item__info">
                    <h5 className='flex'>{props.name} <p className="cards__item__text mx-4">Funded {props.funded}%</p></h5>
                    
                    <p className="cards__item__text">{props.text}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem;
