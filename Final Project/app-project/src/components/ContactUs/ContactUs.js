import './ContactUs.css';

const ContactUs = () => {
    return (
        <main className="main">
            <h1>ContactUs page</h1>
            <form>
                <label for="email">Email</label>
                <input type="email" />
                <label for="telephone-number">Telephone Number</label>
                <input type="number" />
            </form>
        </main>
    );
}

export default ContactUs;