import PopupWithForm from "./PopupWithForm";
import React from "react";
import {useRef} from "react";

const EditAvatarPopup = ({isOpened, onClose, onAvatarUpdate}) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAvatarUpdate(inputRef.current.value)
  }

  return (
      <PopupWithForm
          name='edit'
          title='Редактировать аватар'
          onClose={onClose}
          isOpened={isOpened}
          onSubmit={handleSubmit}
      >

          <>
              <label className="popup__field">
                  <input ref={inputRef} className="popup__input popup__input_type_title" type="url"
                         placeholder="Адрес картинки" defaultValue={''}
                         required/>
                  <span className="popup__input-error link-input-error"/>
                  <input type="submit" className="popup__save popup__save_avatar-update"/>
              </label>
          </>
      </PopupWithForm>
  )
}

export default EditAvatarPopup