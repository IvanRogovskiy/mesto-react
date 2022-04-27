const ImagePopup = (props) => {
  return (
      <div className={`popup popup_type_full ${props.selectedCard.isOpened ? 'popup_opened' : ''}`}>
          <div className="popup__container-full">
              <img alt="Полноразмерная картинка" src={props.selectedCard.link} className="popup__container-full-image"/>
              <h2 className="popup__container-full-name">{props.selectedCard.name}</h2>
                  <button type="button" className="popup__close" onClick={props.onClose}/>
          </div>
      </div>
  )
}

export default ImagePopup