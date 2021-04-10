import style from './SuccessMessage.module.css';

const SuccessMessage = ({ children }) => {

    if (!children) {
        return null;
    }

    return (
        <div className={style.successMessage}>{children}</div>
    )
}

export default SuccessMessage;