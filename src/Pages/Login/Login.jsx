import React from "react";
import * as Components from './Components';
import style from "./Style.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [signIn, toggle] = React.useState(true);
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // Após o login bem-sucedido, redirecione para a página "Home"
        navigate('/'); // Certifique-se de que a rota para a Home é '/'
    };

    const handleCreate = () => {
        // Aqui você pode adicionar a lógica para criar a conta
        // Após criar a conta com sucesso, redirecione para a página "Home"
        navigate('/'); // Certifique-se de que a rota para a Home é '/'
    };

    return (
        <div className={style.DivLogin}>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Button onClick={handleCreate}>Criar</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Entrar</Components.Title>
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
                        <Components.Button onClick={handleSignIn}>Entrar</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Bem vindo de volta!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start your journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
}

export default Login;
