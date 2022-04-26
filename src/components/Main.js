import React from 'react'
import api from "../utils/Api";
import Card from "./Card";

const Main = (props) => {

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
    }, [])

    React.useEffect(() => {
        api.getUsersCards()
            .then((userCards) => {
                setCards(userCards)
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        <img src={userAvatar} alt="Картинка профиля" className="profile__avatar"/>
                        <button onClick={props.onEditAvatar} type="button" className="profile__avatar-button"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name-container">
                            <h1 className="profile__info-name">{userName}</h1>
                            <button type="button" onClick={props.onEditProfile} className="profile__info-edit-button"/>
                        </div>
                        <p className="profile__info-rank">{userDescription}</p>
                    </div>
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"/>
            </section>
            <section className="places">
                {cards.map((card) =>
                        <Card card={card} key={card._id}/>
                )}
            </section>
        </main>
    )
}

export default Main