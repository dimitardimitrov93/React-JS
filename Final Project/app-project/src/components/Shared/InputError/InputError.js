import style from './InputError.module.css';

const InputError = ({ children }) => {

    if (!children) {
        return null;
    }

    return (
        <div className={style.inputError}>{children}</div>
    )
}

export default InputError;