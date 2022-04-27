const PopupWithForm = ({onClose, name, isOpened, title, children}) => {
    return (
        <div className={`popup popup_type_${name} ${isOpened ? 'popup_opened' : '' }`}>
            <div className="popup__container">
                <button type="button" onClick={onClose} className="popup__close"/>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_type_${name}`} name={name}>
                    {children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm