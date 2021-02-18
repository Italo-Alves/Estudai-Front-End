import React from 'react'
import { Link } from 'react-router-dom'

import logoFacebook from '../../../assets/images/icons/facebook-logo.svg'
import logoTwitter from '../../../assets/images/icons/twitter-logo.svg'
import logoInstagram from '../../../assets/images/icons/instagram-logo.svg'
import logoYoutube from '../../../assets/images/icons/youtube-logo.svg'

import { Container, Row, Links } from './styles'

const FooterBack = () => {
  return (
    <Container>
      <Row>
        <span>
          ©2021 - Estudai - Cursos e Aulas Online. Todos os direitos reservados
          CNPJ: XX.XXX.XXX/XXXX-XX
        </span>

        <span>
          <Links>
            <li>
              <Link to="#" rel="noopener noreferrer" title="Facebook">
                <img src={logoFacebook} alt="Facebook" />
              </Link>
            </li>

            <li>
              <Link to="#" rel="noopener noreferrer" title="Twitter">
                <img src={logoTwitter} alt="Twitter" />
              </Link>
            </li>

            <li>
              <Link to="#" rel="noopener noreferrer" title="Instagram">
                <img src={logoInstagram} alt="Instagram" />
              </Link>
            </li>

            <li>
              <Link to="#" rel="noopener noreferrer" title="Youtube">
                <img src={logoYoutube} alt="Youtube" />
              </Link>
            </li>
          </Links>
        </span>
      </Row>
    </Container>
  )
}

export default FooterBack
