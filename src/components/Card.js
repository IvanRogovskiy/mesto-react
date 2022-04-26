
import React from "react";
import cardDeletePath from "../images/place-delete.svg";

const Card = (props) => {
  return (
      <div className="place">
          <img alt="Изображение места" src={props.card.link} className="place__image"/>
          <div className="place__info">
              <h2 className="place__name">{props.card.name}</h2>
              <div className="place__fav-container">
                  <button type="button" className="place__fav"/>
                  <p className="place__fav-counter">{props.card.likes.length}</p>
              </div>
          </div>
          <img alt="Кнопка удаления карточки" src={cardDeletePath}
               className="place__delete"/>
      </div>
  )
}

export default Card