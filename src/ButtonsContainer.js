import styles from './ButtonsContainer.module.css';
import Button from './Button';
function ButtonsContainer({onButtonClick}){
    let buttonNames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",];
    return (
        <div className={styles.buttonsContainer}>
            {
                buttonNames.map(
                    (buttonName)=>(
                        <Button buttonName={buttonName} onButtonClick={onButtonClick}></Button>
                    )
                )
            }
        </div>
    );
}

export default ButtonsContainer;