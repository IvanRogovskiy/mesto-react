import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

const Page = (props) => {
    return (
        <div className="page-container">
            <Header/>
            <Main/>
            <Footer/>
            <PopupWithForm name={'add'} title={'Новое место'} children={
                <>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_title" name="title" type="text"
                               placeholder="Название" id="title" defaultValue=""
                               required minLength="2" maxLength="40"/>
                        <span className="popup__input-error title-input-error"/>
                    </label>
                    <label className="popup__field">
                        <input className="popup__input popup__input_type_src" name="src" type="url" id="src"
                               placeholder="Ссылка на картинку" defaultValue="" required/>
                        <span className="popup__input-error src-input-error"/>
                    </label>
                    <input type="submit" className="popup__save" value="Создать"/>
                </>
            }/>
        </div>
    )
}

export default Page