import { ColorRing } from 'react-loader-spinner';

const Spinner = ({ size, color, strokeWidth }) => {
    return (
        <ColorRing
            visible={true}
            height={size ?? '30'}
            width={size ?? '30'}
            color={color ?? 'grey'}
            strokeWidth={strokeWidth ?? '5'}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};

export default Spinner;
