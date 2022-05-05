import '../App.css';
import React from "react";
import '../index.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/currentUserContext';

const App = () => {

    const [currentUser, setCurrentUser] = React.useState();

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({
        isOpened: false,
        name: "",
        link: ""
    });

    React.useEffect(() => {
        api.getMyProfileInfo()
        .then((userData) => {
            console.log(userData);
            setCurrentUser(userData)
        })
        .catch(err => console.log(err))
    }, [])

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    
    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard({...selectedCard, isOpened: false})
    }

    const handleCardClick = (card) => {
        setSelectedCard({
            isOpened: true,
            name: card.name ,
            link: card.link,
        })
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className={'page-container'}>
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                name='add'
                title='Новое место'
                onClose={closeAllPopups}
                isOpened={isAddPlacePopupOpen}>
                <>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_title" name="title" type="text"
                            placeholder="Название" id="title"
                            required minLength="2" maxLength="40"/>
                        <span className="popup__input-error title-input-error"/>
                    </label>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_src" name="src" type="url" id="src"
                            placeholder="Ссылка на картинку" required/>
                        <span className="popup__input-error src-input-error"/>
                    </label>
                    <input type="submit" className="popup__save" value="Создать"/>
                </>
                </PopupWithForm>
            <PopupWithForm
                name='name'
                title='Редактировать профиль'
                onClose={closeAllPopups}
                isOpened={isEditProfilePopupOpen}>
                <>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_name" name="name"
                            type="text" placeholder="Имя" id="name" defaultValue="" autoComplete="off"
                            minLength="2" maxLength="40" required/>
                        <span className="popup__input-error name-input-error"/>
                    </label>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_rank" name="rank" autoComplete="off"
                            type="text" id="rank" placeholder="Профессиональная деятельность"
                            minLength="2" maxLength="200" required/>
                        <span className="popup__input-error rank-input-error"/>
                    </label>
                    <input type="submit" className="popup__save" value="Сохранить"/>
                </>
            </PopupWithForm>
            <PopupWithForm
                name='edit'
                title='Редактировать аватар'
                onClose={closeAllPopups}
                isOpened={isEditAvatarPopupOpen}>
                <>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_title" name="link" type="url"
                            placeholder="Адрес картинки" id="link" defaultValue=""
                            required/>
                        <span className="popup__input-error link-input-error"/>
                        <input type="submit" className="popup__save popup__save_avatar-update" value="Сохранить"/>
                    </label>
                </>
            </PopupWithForm>
            <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
