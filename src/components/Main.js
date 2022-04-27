import React from 'react'
import api from "../utils/Api";
import Card from "./Card";

const Main = ({onEditAvatar, onEditProfile, onCardClick, onAddPlace}) => {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getMyProfileInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.avatar);
                setUserAvatar(userData.avatar)
            })
            .catch(err => console.log(err))
    }, [])

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
                        {userAvatar && (<img src={userAvatar} alt="Картинка профиля" className="profile__avatar"/>)}
                        <button onClick={onEditAvatar} type="button" className="profile__avatar-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name">{userName}</h1>
                            <button type="button" onClick={onEditProfile} className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank">{userDescription}</p>
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