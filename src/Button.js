import styles from './Button.module.css';

function Button({buttonName,onButtonClick}){
    return (
        <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
    );
}

export default Button;