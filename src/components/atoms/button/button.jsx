import Spinner from '../spinner/spinner';
import * as Styles from './styles';

const Button = ({ width, height, background, border, label, onClick, disabled, isLoading, textColor, iconSrc }) => {
    return (
        <Styles.ButtonContainer
            heigh={height}
            width={width}
            background={!disabled ? background : '#e5e1da'}
            border={!disabled ? border : '#bababa'}
            onClick={onClick}
            color={textColor}
        >
            <Styles.Button disabled={disabled}>
                {isLoading ? <Spinner color="#3a3a4e" /> : <img src={iconSrc} alt="social" width={24} height={24} />}
                <span>{label}</span>
            </Styles.Button>
        </Styles.ButtonContainer>
    );
};

export default Button;
