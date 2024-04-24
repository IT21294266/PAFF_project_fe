import { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Tostify } from '../../components';
import COVER_IMAGE from './cover.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { themeGradients } from '../../shared/gradient';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { hasGrantedAnyScopeGoogle } from '@react-oauth/google';
import googleAuth from '../../services/googleAuth/googleAuth';
import GOOGLE_SVG from './icon/google.svg';
import GITHUB_SVG from './icon/github.svg';
import FACEBOOK_SVG from './icon/facebook.svg';

const Auth = () => {
    const navigate = useNavigate();
    const [isLoadingGoogleAuth, setIsLoadingGoogleAuth] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        googleLogout();
        console.log('log out...');
    }, []);

    useEffect(() => {
        if (errorMsg) {
            toast.error(errorMsg);
            setErrorMsg(null);
        }
    }, [errorMsg]);

    const handleGOuath = useGoogleLogin({
        prompt: 'select_account',
        onSuccess: (tokenResponse) => {
            const hasAccess = hasGrantedAnyScopeGoogle(tokenResponse, 'google-scope-1', 'google-scope-2');
            console.debug(tokenResponse.access_token, tokenResponse, hasAccess);
            fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.warn(data);
                    if (data?.id && data?.email && data?.name) {
                        googleAuth(data.name, data.id, data.email, data?.picture).then((data) => {
                            console.log(data.data, '<<<');
                            toast.success(data.data.data);
                        });
                    } else {
                        setErrorMsg('google authenticate fail');
                    }
                    setIsLoadingGoogleAuth(false);
                })
                .catch((error) => {
                    setErrorMsg('google authenticate fail');
                    console.log('Error fetching user info:', error);
                    setIsLoadingGoogleAuth(false);
                });
        },
        onError: (error) => {
            if (typeof error === 'string') {
                setErrorMsg(error);
            }
            setIsLoadingGoogleAuth(false);
        },
    });

    return (
        <Styles.AuthPage>
            <Tostify />
            <Styles.CoverImage src={COVER_IMAGE} />
            <Styles.SocialAuthContainer>
                <Styles.LogoContainer>
                    <img src={GOOGLE_SVG} alt="logo" width={30} height={30} />
                    <h2> WEB NAME</h2>
                </Styles.LogoContainer>
                <Styles.TextContainer>
                    <h1>Join us with your favorite social media account</h1>
                </Styles.TextContainer>
                <Button
                    iconSrc={GOOGLE_SVG}
                    background={themeGradients.secondary}
                    border="none"
                    width="360px"
                    label={'Sign up with Google'}
                    isLoading={isLoadingGoogleAuth}
                    disabled={isLoadingGoogleAuth}
                    textColor="#FFFFFF"
                    onClick={() => {
                        setIsLoadingGoogleAuth(true);
                        // googleLogout();
                        handleGOuath();
                    }}
                />
                <Button
                    iconSrc={FACEBOOK_SVG}
                    background={themeGradients.secondary}
                    border="none"
                    width="360px"
                    label={'Sign up with FaceBook'}
                    // isLoading={true}
                    textColor="#FFFFFF"
                />
                <Button
                    iconSrc={GITHUB_SVG}
                    background={themeGradients.secondary}
                    border="none"
                    width="360px"
                    label={'Sign up with GitHub'}
                    // isLoading={true}
                    textColor="#FFFFFF"
                />
            </Styles.SocialAuthContainer>
        </Styles.AuthPage>
    );
};

export default Auth;
