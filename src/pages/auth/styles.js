import styled from 'styled-components';
import { themeGradients } from '../../shared/gradient';

export const AuthPage = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
`;

export const CoverImage = styled.img`
    display: block;
    height: 100vh;
    object-fit: fill;
    @media (max-width: 1060px) {
        display: none;
    }
`;

export const SocialAuthContainer = styled.div`
    padding: 0 40px 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    h1 {
        margin: 0 0 24px 0;
        font-family: 'Kaushan Script', cursive !important;
        font-size: 42px;
        font-weight: 800;
    }
    @media (max-width: 1060px) {
        padding: 0 20px;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
`;

export const TextContainer = styled.div`
    display: inline-block;
    background-image: var(--primary-main, linear-gradient(267deg, #6363fa 50.05%, #cc53fc 134.37%));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const LogoContainer = styled.div`
    display: flex;
    width: fit-content;
    gap: 12px;
    align-items: center;
    h2 {
        font-family: 'Kaushan Script', cursive !important;
        color: #6363fa;
    }
`;
