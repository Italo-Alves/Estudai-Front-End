import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PageHeader from '../../components/PageHeaderBootstrap';
import PageFooterSite from '../../components/FooterSiteBootstrap'
import PageFooterSocial from '../../components/FooterSocialBootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faAngleUp} from '@fortawesome/free-solid-svg-icons/faAngleUp'; 

import studyIcon from '../../assets/images/icons/study.svg';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import icon01 from '../../assets/images/icons/icon-01.svg';
import icon02 from '../../assets/images/icons/icon-02.svg';
import icon03 from '../../assets/images/icons/icon-03.svg';
import icon04 from '../../assets/images/icons/icon-04.svg';
import icon05 from '../../assets/images/icons/icon-05.svg';
import icon06 from '../../assets/images/icons/icon-06.svg';
import icon07 from '../../assets/images/icons/icon-07.svg';
import icon08 from '../../assets/images/icons/icon-08.svg';
import icon09 from '../../assets/images/icons/icon-10.svg';
import logoMoney from '../../assets/images/icons/hand-holding-usd-solid.svg';
import logoPDF from '../../assets/images/icons/file-pdf-solid.svg';
import logoQuestion from '../../assets/images/icons/icon-service-03.svg';

import './styles.css';
import './script.js';
import Carousel from '../../components/SliderCarousel';

function PageLanding() {
    return (
        <div className="scrollBar">
            <PageHeader />
            <Carousel />
            <main className="content mt-0">
                <button id="toTopButton" className="mr-4">
                    <i className="fas fa-angle-up"></i>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                         Estudar
                     </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                         Dar aulas
                     </Link>
                </div>
                <section>
                    <div className="d-flex justify-content-between pt-3 pr-3 pl-3 home-services-container">
                        <div className="our-services pb-3">
                            <div className="block pt-4 pt-md-5 pr-4 pl-4 pb-3">
                                <h2 className="block-title">O Caminho mais rápido até sua aprovação</h2>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <div className="icon-block">
                                        <img src={icon01} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon02} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon03} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon04} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon05} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon06} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon07} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon08} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                    <div className="icon-block">
                                        <img src={icon09} alt="" />
                                        <p className="icon-block__title">Curso por área de ensino</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sales-force pb-3">
                            <div className="salesforce p-4">
                                <div className="lead-text">
                                    Assine nosso
                                    <b> Newsletter </b>
                                    e receba
                                    <b> Novidades sobre Provas, Matérias </b>
                                    <br />
                                    e
                                    <b> E-books.</b>
                                </div>
                                <div id="forms">
                                    <form id="forms_layout">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group first_name labels">
                                                    <label htmlFor="first_name">Nome</label>
                                                    <input className="input_labels form-control" id="last-name" maxLength={40} name="first-name" size={20} data-placeholder="NOME" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group email labels">
                                                    <label htmlFor="email">Email</label>
                                                    <input className="input_labels form-control" id="email" maxLength={80} name="email" type="email" size={20} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group phone labels">
                                                    <label htmlFor="phone">Telefone</label>
                                                    <input className="input_labels form-control" id="phone" maxLength={15} name="phone" size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="button-layout btn btn-primary btn-block btn-sm" type="button">
                                                <b>Inscreva-se gratuitamente</b>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-0 pb-0 pt-md-5 pl-3 pr-3" id="posts">
                    <div className="container-full">
                        <h2 className="title mb-3">Artigos Recentes</h2>  
                    </div>
                    <div className="text-center text-md-right mt-5 mt-md-0">
                        <a href="..." className="link-orange">Ver todos os artigos</a>
                    </div>
                </section>
                <section className="section section-why pb-0 pl-3 pr-3">
                    <div className="container-full">
                        <h2 className="title">Por que escolher o Estudai?</h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="item pl-3 pr-3">
                                <img src={logoMoney} alt="Dinheiro" className="thumb" />
                                <h4 className="subtitle mt-4 mb-2">Satisfação seu dinheiro de volta</h4>
                                <p>Confiamos em nosso trabalho. Por isso, você tem 30 dias para testar nossos cursos. Consulte nossos Termos de Uso.</p>
                            </div>
                            <div className="item pl-3 pr-3">
                                <img src={logoPDF} alt="PDF" className="thumb" />
                                <h4 className="subtitle mt-4 mb-2">Download ilimitado</h4>
                                <p>Não há limites de visualizações ou de downloads. Baixe as videoaulas e PDFs para estudar quando e onde você estiver.</p>
                            </div>
                            <div className="item pl-3 pr-3">
                                <img src={logoQuestion} alt="Dúvidas" className="thumb" />
                                <h4 className="subtitle mt-4 mb-2">Forum de dúvidas</h4>
                                <p>Envie perguntas pela nossa plataforma e acompanhe as dúvidas dos outros alunos. Nossos professores vão auxiliá-los respondendo e comentando dúvidas.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <PageFooterSite />
            <PageFooterSocial />
        </div>
    )
}

export default withRouter(PageLanding)