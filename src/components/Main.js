const Main = () => {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        <img src="#" alt="Картинка профиля" className="profile__avatar"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name"/>
                            <button type="button" className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank"/>
                    </div>
                </div>
                <button type="button" className="profile__add-button"/>
            </section>
            <section className="places">
            </section>
        </main>
    )
}

export default Main