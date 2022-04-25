const Main = (props) => {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        <img src="#" alt="Картинка профиля" className="profile__avatar"/>
                        <button onClick={props.onEditAvatar} type="button" className="profile__avatar-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name"/>
                            <button type="button" onClick={props.onEditProfile} className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank"/>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"/>
            </section>
            <section className="places">
            </section>
        </main>
    )
}

export default Main