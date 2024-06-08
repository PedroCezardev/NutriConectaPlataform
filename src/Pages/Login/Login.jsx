import React from "react";
import * as Components from './Components';
import style from "./Style.module.css";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg';

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
                        <Components.Title>Criar conta</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='Email' placeholder='Email' />
                        <Components.Input type='Telefone' placeholder='Telefone' />
                        <Components.Input type='Cnpj' placeholder='Cnpj' />
                        <Components.Input type='Endereco' placeholder='Endereco' />
                        <Components.Input type='Descricao' placeholder='Descricao' />
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
                            <img src={logo} alt="Logo" className={style.logo} />
                            <Components.TitleDescription>Bem vindo de volta!</Components.TitleDescription>
                            <Components.Paragraph>
                                Possui uma conta? Faça login com suas credenciais cadastradas!
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Entrar
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <img src={logo} alt="Logo" className={style.logo} />
                            <Components.TitleDescription>Olá, não possui conta?</Components.TitleDescription>
                            <Components.Paragraph>                              
                                Aproveite! Inicie agora e comece sua jornada conosco
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Criar conta
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
}

export default Login;
