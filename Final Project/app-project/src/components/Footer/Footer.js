import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <ul>
                <li>
                    <a href="https://facebook.com">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://google.com">
                        <i className="fab fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <p>Sip &amp; Smile 2021 &copy;</p>
        </footer>
    );
}

export default Footer;