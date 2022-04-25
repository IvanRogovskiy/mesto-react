const PopupWithForm = (props) => {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpened ? 'popup_opened' : '' }`}>
            <div className="popup__container">
                <button type="button" onClick={props.onClose} className="popup__close"/>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_type_${props.name}`} name={props.name}>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm