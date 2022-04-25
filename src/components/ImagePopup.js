const ImagePopup = () => {
  return (
      <div className="popup popup_type_full">
          <div className="popup__container-full">
              <img alt="Полноразмерная картинка" className="popup__container-full-image"/>
                  <h2 className="popup__container-full-name"/>
                  <button type="button" className="popup__close"/>
          </div>
      </div>
  )
}

export default ImagePopup