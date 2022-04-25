import '../App.css';
import headerLogoPath from '../images/header-logo.svg'
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Page from "./Page";

function App() {
  return (
    <>
        {/*<div className="page-container">*/}
        {/*        <Header/>*/}
        {/*        <Main/>*/}
        {/*        <Footer/>*/}
        {/*</div>*/}
        <Page/>
        <div className="popup popup_type_edit">
            <div className="popup__container">
                <button type="button" className="popup__close"/>
                <form className="popup__form popup__form_type_edit" name="edit-profile">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <fieldset className="popup__input-form">
                        <label className="popup__field">
                            <input className="popup__input popup__input_type_name" name="name"
                                   type="text" placeholder="Имя" id="name" value="" autoComplete="off"
                                   minLength="2" maxLength="40" required/>
                            <span className="popup__input-error name-input-error"/>
                        </label>
                        <label className="popup__field">
                            <input className="popup__input popup__input_type_rank" name="rank" autoComplete="off"
                                   type="text" id="rank" placeholder="Профессиональная деятельность" value=""
                                   minLength="2" maxLength="200" required/>
                            <span className="popup__input-error rank-input-error"/>
                        </label>
                    </fieldset>
                    <input type="submit" className="popup__save" value="Сохранить"/>
                </form>
            </div>
        </div>
        <div className="popup popup_type_add">
            <div className="popup__container">
                <button type="button" className="popup__close"/>
                <form className="popup__form popup__form_type_add" name="add-card">
                    <h2 className="popup__title">Новое место</h2>
                    <fieldset className="popup__input-form">
                        <label className="popup__field">
                            <input className="popup__input popup__input_type_title" name="title" type="text"
                                   placeholder="Название" id="title" value=""
                                   required minLength="2" maxLength="40"/>
                            <span className="popup__input-error title-input-error"/>
                        </label>
                        <label className="popup__field">
                            <input className="popup__input popup__input_type_src" name="src" type="url" id="src"
                                   placeholder="Ссылка на картинку" value="" required/>
                            <span className="popup__input-error src-input-error"/>
                        </label>
                    </fieldset>
                    <input type="submit" className="popup__save" value="Создать"/>
                </form>
            </div>
        </div>
        <div className="popup popup_type_full">
            <div className="popup__container-full">
                <img alt="Полноразмерная картинка" className="popup__container-full-image"/>
                    <h2 className="popup__container-full-name"/>
                    <button type="button" className="popup__close"/>
            </div>
        </div>
        <template id="place-template">
            <div className="place">
                <img alt="Изображение места" className="place__image"/>
                <div className="place__info">
                    <h2 className="place__name"/>
                    <div className="place__fav-container">
                        <button type="button" className="place__fav"/>
                        <p className="place__fav-counter">5</p>
                    </div>
                </div>
                <img src="" alt="Кнопка удаления карточки"
                     className="place__delete"/>
            </div>
        </template>
        <div className="popup popup_type_delete">
            <div className="popup__container">
                <form className="popup__form" name="delete-card" noValidate>
                    <h2 className="popup__title popup__title_confirm-delete">Вы уверены?</h2>
                    <input type="submit" className="popup__save popup__save_confirm-delete" value="Да"/>
                </form>
                <button type="button" className="popup__close"/>
            </div>
        </div>
        <div className="popup popup_type_update-avatar">
            <div className="popup__container">
                <button type="button" className="popup__close"/>
                <form className="popup__form popup__form_type_update-avatar" name="update-avatar">
                    <h2 className="popup__title">Обновить аватар</h2>
                    <fieldset className="popup__input-form">
                        <label className="popup__field">
                            <input className="popup__input popup__input_type_title" name="link" type="url"
                                   placeholder="Адрес картинки" id="link" value=""
                                   required/>
                            <span className="popup__input-error link-input-error"/>
                        </label>
                    </fieldset>
                    <input type="submit" className="popup__save popup__save_avatar-update" value="Сохранить"/>
                </form>
            </div>
        </div>
    </>
  );
}

export default App;
