import React from 'react';

import logoFacebook from '../../assets/images/icons/facebook-logo.svg';
import logoTwitter from '../../assets/images/icons/twitter-logo.svg';
import logoInstagram from '../../assets/images/icons/instagram-logo.svg';
import logoYoutube from '../../assets/images/icons/youtube-logo.svg';

import './styles.css';

export default function PageFooterSocialBootstrap(){
    return(
        <div className="footer-social bg-blue">
            <div className="footer-row">
            <span>©2020 - Estudai -
                Cursos e Aulas Online.
                Todos os direitos reservados
                CNPJ: XX.XXX.XXX/XXXX-XX
            </span>

            <span>
                    <ul className="links">
                        <li>
                            <a href="https://pt-br.facebook.com/" rel="noopener noreferrer" target="_blank" title="Facebook">
                                <img src={logoFacebook} alt="Facebook" />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/login?lang=pt" rel="noopener noreferrer" target="_blank" title="Twitter">
                                <img src={logoTwitter} alt="Twitter" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/?hl=pt-br" rel="noopener noreferrer" target="_blank" title="Instagram">
                                <img src={logoInstagram} alt="Instagram" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/?hl=pt&gl=BR" rel="noopener noreferrer" target="_blank" title="Youtube">
                                <img src={logoYoutube} alt="Youtube" />
                            </a>
                        </li>
                    </ul>
                </span>


            </div>
        </div>
    )
}