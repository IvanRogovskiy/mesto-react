const Main = () => {

    const handleEditAvatarClick = () => {
        const editAvatarPopup = document.querySelector('.popup_type_update-avatar');
        editAvatarPopup.classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        const editProfilePopup = document.querySelector('.popup_type_edit');
        editProfilePopup.classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        const addCardPopup = document.querySelector('.popup_type_add');
        addCardPopup.classList.add('popup_opened');
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        <img src="#" alt="Картинка профиля" className="profile__avatar"/>
                        <button onClick={handleEditAvatarClick} type="button" className="profile__avatar-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name"/>
                            <button type="button" onClick={handleEditProfileClick} className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank"/>
                    </div>
                </div>
                <button type="button" onClick={handleAddPlaceClick} className="profile__add-button"/>
            </section>
            <section className="places">
            </section>
        </main>
    )
}

export default Main