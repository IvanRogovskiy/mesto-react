import React from 'react'
import { CurrentUserContext } from '../contexts/currentUserContext';
import api from "../utils/Api";
import Card from "./Card";

const Main = ({onEditAvatar, onEditProfile, onCardClick, onAddPlace}) => {

    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getUsersCards()
            .then((userCards) => {
                setCards(userCards)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        {currentUser.avatar && (<img src={currentUser.avatar} alt="Картинка профиля" className="profile__avatar"/>)}
                        <button onClick={onEditAvatar} type="button" className="profile__avatar-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name">{currentUser.name}</h1>
                            <button type="button" onClick={onEditProfile} className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__add-button"/>
            </section>
            <section className="places">
                {cards.map((card) =>
                        <Card card={card} onImageClick={onCardClick} key={card._id}/>
                )}
            </section>
        </main>
    )
}

export default Main