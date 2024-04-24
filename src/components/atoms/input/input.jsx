import * as Styles from './styles';

const Input = ({ placeholder, label, isPassWord, onChange, labelTextColor }) => {
    return (
        <Styles.InputContainer>
            <Styles.InputLabel color={labelTextColor}>{label}</Styles.InputLabel>
            <Styles.Input placeholder={placeholder} type={isPassWord && 'password'} onChange={onChange} />
        </Styles.InputContainer>
    );
};

export default Input;
