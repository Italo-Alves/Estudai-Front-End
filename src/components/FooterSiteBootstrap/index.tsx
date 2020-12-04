/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './styles.css';

export default function PageFooterSiteBootStrap(){
    return(
        <div className="footer-site">
            <div className="content container mt-4 mb-4 mt-md-5 mb-md-5">
                <div className="row pr-0 pl-0 pr-md-3 pl-md-3">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <h3 className="title titleFooter">Institucional</h3>
                        <div className="column">
                            <ul id="menu-institucional" className="menu">
                                <li className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Quem Somos</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Segurança</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Termos de Uso</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Política de 
                                    Privacidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <h3 className="title titleFooter">Suporte</h3>
                        <div className="column">
                            <ul id="menu-institucional" className="menu">
                                <li id="menuItemPacotes" className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Pacotes</a>
                                </li>
                                <li id="menuItemPerguntasFrequentes" className="list-unstyled">
                                    <a href="#" className="tc-menu-inner">Perguntas Frequentes</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 mb-4">
                        <h3 className="title titleFooter">Fale Conosco</h3>
                        <div itemProp="address">
                            <p className="address mb-0">
                                <span itemProp="streetAddress">Rua Virgínia Ferni, 400</span>
                                <br/>
                                Itaquera - <span itemProp="addressLocality">São Paulo </span>
                                -
                                <span itemProp="addressRegion"> SP</span>
                                <br />
                                CEP <span itemProp="postalCode">08253-000</span>
                            </p>
                        </div>
                        <p></p>
                        <h3 className="title">Email</h3>
                        <span className="email">
                            <a href="#" target="_blank">exemplo123@hotmail.com</a>
                        </span>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}