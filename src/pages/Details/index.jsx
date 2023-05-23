import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tags'


export function Details(){

 return(
    <Container>
        <Header/>

        <main>
            <Content>
                <ButtonText title="Excluir nota"/>

                <h1>
                    Introdução ao React
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia maiores 
                    fugiat dolores obcaecati tempora, atque ratione neque illo assumenda ab 
                    provident maxime alias esse aliquam error, voluptatibus inventore expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia maiores 
                    fugiat dolores obcaecati tempora, atque ratione neque illo assumenda ab 
                    provident maxime alias esse aliquam error, voluptatibus inventore expedita.
                </p>

                <Section title="Links úteis">
                    <Links>
                        <li><a href="#">https://www.rocketseat.com.br/</a></li>
                        <li><a href="#">https://www.rocketseat.com.br/</a></li>
                        
                    </Links>
                </Section>

                <Section title="Marcadores">
                    <Tag title="express"/>
                    <Tag title="node.js"/>

                </Section>


                <Button title="Voltar"/>
            </Content>
        </main>
    </Container>
 ) 
}