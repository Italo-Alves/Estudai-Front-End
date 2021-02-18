import React from 'react'

import { Link } from 'react-router-dom'

import {
  Container,
  Content,
  Row,
  Column,
  Title,
  ListMenu,
  EmailSpan
} from './styles'

const FooterTop = () => {
  return (
    <Container>
      <Content>
        <Row>
          <Column>
            <Title>Institucional</Title>
            <div>
              <ListMenu>
                <li>
                  <Link to="#">Quem Somos</Link>
                </li>
                <li>
                  <Link to="#">Segurança</Link>
                </li>
                <li>
                  <Link to="#">Termos de Uso</Link>
                </li>
                <li>
                  <Link to="#">Política de Privacidade</Link>
                </li>
              </ListMenu>
            </div>
          </Column>
          <Column>
            <Title>Suporte</Title>
            <div>
              <ListMenu id="menu-institucional" className="menu">
                <li id="menuItemPacotes" className="list-unstyled">
                  <Link to="#">Pacotes</Link>
                </li>
                <li id="menuItemPerguntasFrequentes" className="list-unstyled">
                  <Link to="#">Perguntas Frequentes</Link>
                </li>
              </ListMenu>
            </div>
          </Column>
          <Column>
            <Title>Fale Conosco</Title>
            <div itemProp="address">
              <p style={{ fontSize: '14px' }}>
                <span itemProp="streetAddress">Rua Virgínia Ferni, 400</span>
                <br />
                <span>Itaquera - </span>
                <span itemProp="addressLocality">São Paulo </span>
                <span>-</span>
                <span itemProp="addressRegion"> SP</span>
                <br />
                <span>CEP </span>
                <span itemProp="postalCode">08253-000</span>
              </p>
            </div>
            <p></p>
            <Title>Email</Title>
            <EmailSpan>
              <Link to="#">exemplo123@hotmail.com</Link>
            </EmailSpan>
          </Column>
        </Row>
      </Content>
    </Container>
  )
}

export default FooterTop
