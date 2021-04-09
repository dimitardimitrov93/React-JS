import style from './SelectMenu.module.css';

const SelectMenu = ({ category }) => {
    console.log(category);

    switch (category) {
        case 'mocha':
            return (
                <div className={style.inputWrapper}>
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="mocha" selected>Mocha</option>
                        <option value="espresso">Espresso</option>
                        <option value="latte">Latte</option>
                        <option value="cappuccino">Cappuccino</option>
                    </select>
                </div>
            );
        case 'espresso':
            return (
                <div className={style.inputWrapper}>
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="mocha" >Mocha</option>
                        <option value="espresso" selected>Espresso</option>
                        <option value="latte">Latte</option>
                        <option value="cappuccino">Cappuccino</option>
                    </select>
                </div>
            );
        case 'latte':
            return (
                <div className={style.inputWrapper}>
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="mocha" >Mocha</option>
                        <option value="espresso">Espresso</option>
                        <option value="latte" selected>Latte</option>
                        <option value="cappuccino">Cappuccino</option>
                    </select>
                </div>
            );
        case 'cappuccino':
            return (
                <div className={style.inputWrapper}>
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="mocha">Mocha</option>
                        <option value="espresso">Espresso</option>
                        <option value="latte">Latte</option>
                        <option value="cappuccino" selected>Cappuccino</option>
                    </select>
                </div>
            );
        default:
            return (
                <div className={style.inputWrapper}>
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="mocha">Mocha</option>
                        <option value="espresso">Espresso</option>
                        <option value="latte">Latte</option>
                        <option value="cappuccino">Cappuccino</option>
                    </select>
                </div>
            );
    }
}

export default SelectMenu;