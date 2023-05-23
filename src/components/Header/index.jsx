import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/rickdbs.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Henrique Santos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}