import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Header from '../../components/Header'
import FooterTop from '../../components/Footers/FooterTop'
import FooterBack from '../../components/Footers/FooterBack'
import ButtonTop from '../../components/ButtonTop'
import Carousel from '../../components/SliderCarousel'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import logoMoney from '../../assets/images/icons/icon-service-01.svg'
import logoPDF from '../../assets/images/icons/icon-service-02.svg'
import logoQuestion from '../../assets/images/icons/icon-service-03.svg'

import { CoursesData } from './CoursesData'

import { Container } from './styles'

import './Landing.css'

const PageLanding = () => {
  return (
    <Container>
      <Header />
      <div style={{ marginTop: '65px' }}></div>
      <Carousel />
      <main className="content mt-0">
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
              <div className="block pt-4 pt-md-5 pr-5 pl-5 pb-4">
                <h2 className="block-title">
                  O Caminho mais rápido até sua aprovação
                </h2>
                <div className="d-flex flex-wrap justify-content-around">
                  {CoursesData.map((item, index) => {
                    return (
                      <div key={index} className={item.divCName}>
                        <img src={item.icon} alt={item.title} />
                        <p className={item.pCName}>{item.title}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="sales-force pb-3">
              <div className="salesforce p-4">
                <div className="lead-text">
                  Assine nosso
                  <b> Newsletter </b>e receba
                  <b> Novidades sobre Provas, Matérias </b>
                  <br />e<b> E-books.</b>
                </div>
                <div id="forms">
                  <form id="forms_layout">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group first_name labels">
                          <label htmlFor="first_name">Nome</label>
                          <input
                            className="input_labels form-control"
                            id="last-name"
                            maxLength={40}
                            name="first-name"
                            size={20}
                            data-placeholder="NOME"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group email labels">
                          <label htmlFor="email">Email</label>
                          <input
                            className="input_labels form-control"
                            id="email"
                            maxLength={80}
                            name="email"
                            type="email"
                            size={20}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group phone labels">
                          <label htmlFor="phone">Telefone</label>
                          <input
                            className="input_labels form-control"
                            id="phone"
                            maxLength={15}
                            name="phone"
                            size={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="button-layout btn btn-primary btn-block btn-sm"
                        type="button"
                        id="btnNewsletter"
                      >
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
            <a href="?" className="link-orange">
              Ver todos os artigos
            </a>
          </div>
        </section>
        <section className="section section-why pb-0 pl-3 pr-3">
          <div className="container-full">
            <h2 className="title">Por que escolher o Estudai?</h2>
            <div className="d-flex flex-wrap justify-content-center mb-5">
              <div className="item pl-3 pr-3">
                <img src={logoMoney} alt="Dinheiro" className="thumb" />
                <h4 className="subtitle mt-4 mb-2">
                  Satisfação ou seu dinheiro de volta
                </h4>
                <p>
                  Confiamos em nosso trabalho. Por isso, você tem 30 dias para
                  testar nossos cursos. Consulte nossos Termos de Uso.
                </p>
              </div>
              <div className="item pl-3 pr-3">
                <img src={logoPDF} alt="PDF" className="thumb" />
                <h4 className="subtitle mt-4 mb-2">Download ilimitado</h4>
                <p>
                  Não há limites de visualizações ou de downloads. Baixe as
                  videoaulas e PDFs para estudar quando e onde você estiver.
                </p>
              </div>
              <div className="item pl-3 pr-3">
                <img src={logoQuestion} alt="Dúvidas" className="thumb" />
                <h4 className="subtitle mt-4 mb-2">Fórum de dúvidas</h4>
                <p>
                  Envie perguntas pela nossa plataforma e acompanhe as dúvidas
                  dos outros alunos. Nossos professores vão auxiliá-los
                  respondendo e comentando dúvidas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ButtonTop />
      <footer>
        <FooterTop />
        <FooterBack />
      </footer>
    </Container>
  )
}

export default withRouter(PageLanding)
