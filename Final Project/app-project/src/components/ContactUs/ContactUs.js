import style from './ContactUs.module.css';
// import onContactFormSubmit from '../../services/contactFormService';

const ContactUs = () => {
    return (
        <main className={style.main}>
            <h1 id="contactForm" className={style.contactUsHeading}>Write us</h1>

            <form className={style.contactForm} onSubmit={onContactFormSubmit}>

                <div className={style.formInputWrapper}>
                    <input id="email" type="email" placeholder="Email" />
                </div>

                <div className={style.formInputWrapper}>
                    <input id="telephoneNumber" type="number" placeholder="Telephone Number" />
                </div>

                <div className={style.formInputWrapper}>
                    <textarea id="message" name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className={style.formButtonWrapper}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>
    );
}

export default ContactUs;