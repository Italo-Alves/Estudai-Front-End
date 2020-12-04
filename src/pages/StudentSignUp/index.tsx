import React from 'react';

import PageHeader from '../../components/PageHeaderBootstrap';
import PageFooterSiteBootStrap from '../../components/FooterSiteBootstrap';
import PageFooterSocialBootstrap from '../../components/FooterSocialBootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';

import './styles.css';
import './script.jsx';
import './validate.js';

export default function Cadastro() {
    
        return (
            <div className="scrollBar">
            <PageHeader />
            <main className="content">
                <button id="toTopButton" className="mr-4">
                    <i className="fas fa-angle-up"></i>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <h1 className="page-header mt-5 ml-4 mr-5">Cadastro de Alunos</h1>
                <div className="mb-2 mt-1">
                    <form method="POST" id="formRegister" name="formRegister">
                        <fieldset>
                            <div className="mt-2 ml-4 mr-4 mb-4">
                                <div className="block p-3">
                                    <h5>Dados Pessoais</h5>
                                    <div className="form-row">
                                        <div className="form-group col-12 col-md-6">
                                            <label htmlFor="firstName" className="required">Nome</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" minLength={2} required />
                                        </div>
                                        <div className="form-group col-12 col-md-6">
                                            <label htmlFor="lastName" className="required">Sobrenome</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" minLength={2} required />
                                        </div>

                                        <div className="form-group col-12 col-md-6">
                                            <label htmlFor="documentNumber" className="required">CPF</label>
                                            <input type="text" className="form-control" id="documentNumber" name="documentNumber" placeholder="Apenas números" maxLength={11} required />
                                        </div>

                                        <div className="form-group col-12 col-md-6">
                                            <label htmlFor="birthday" className="required">Data de Nascimento</label>
                                            <input type="date" className="form-control" id="birthday" name="birthday" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="block p-3 mt-3">
                                    <h5>Endereço</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-2">
                                            <label htmlFor="zip" className="required">CEP</label>
                                            <input type="text" className="form-control" id="zip" maxLength={8} name="zip" required />
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label htmlFor="state" className="required">Estado</label>
                                            <select name="state" id="state" className="form-control" required>
                                                <option>Selecione</option>
                                                <option value="AC">Acre</option>
                                                <option value="AL">Alagoas</option>
                                                <option value="AP">Amapá</option>
                                                <option value="AM">Amazonas</option>
                                                <option value="BA">Bahia</option>
                                                <option value="CE">Ceará</option>
                                                <option value="DF">Distrito Federal</option>
                                                <option value="ES">Espírito Santo</option>
                                                <option value="GO">Goiás</option>
                                                <option value="MA">Maranhão</option>
                                                <option value="MT">Mato Grosso</option>
                                                <option value="MS">Mato Grosso do Sul</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="PA">Pará</option>
                                                <option value="PB">Paraíba</option>
                                                <option value="PR">Paraná</option>
                                                <option value="PE">Pernambuco</option>
                                                <option value="PI">Piauí</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="RN">Rio Grande do Norte</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                                <option value="RO">Rondônia</option>
                                                <option value="RR">Roraima</option>
                                                <option value="SC">Santa Catarina</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="SE">Sergipe</option>
                                                <option value="TO">Tocantis</option>

                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="city" className="required">Cidade</label>
                                            <input type="text" id="city" className="form-control" name="city" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-5">
                                            <label htmlFor="address" className="required">Rua</label>
                                            <input type="text" className="form-control" id="address" name="address" placeholder="Ex.: Avenida Paulista" required />
                                        </div>

                                        <div className="form-group col-md-1">
                                            <label htmlFor="number" className="required">Número</label>
                                            <input type="text" className="form-control" id="number" name="number" maxLength={5} required />
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label htmlFor="addressDetails">Complemento</label>
                                            <input type="text" className="form-control" id="addressDetails" name="addressDetails" placeholder="Casa, Apartamento, Bloco..." />
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label htmlFor="neighborhood" className="required">Bairro</label>
                                            <input type="text" className="form-control" id="neighborhood" name="neighborhood" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="block p-3 mt-3">
                                    <h5>Telefone</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="foneHome" className="required">Celular</label>
                                            <input type="text" className="form-control" id="foneMobile" name="foneMobile" placeholder="Celular com DDD" required />
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label htmlFor="foneHome">Residencial</label>
                                            <input type="text" className="form-control" id="foneHome" name="foneHome" maxLength={11} placeholder="Telefone com DDD" />
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label htmlFor="foneCompany">Comercial</label>
                                            <input type="text" className="form-control" id="foneCompany" name="foneCompany" maxLength={11} placeholder="Telefone com DDD" />
                                        </div>
                                    </div>
                                </div>
                                <div className="block p-3 mt-3">
                                    <h5>Login</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email" className="required">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email que será utilizado para login" required />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="password" className="required">Senha</label>
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Utilize uma senha forte" minLength={6} maxLength={15} required />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="password_confirm" className="required">Confirmar Senha</label>
                                            <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Digite a senha novamente" minLength={6} maxLength={15} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="legend">Campos <span style={{color: 'red'}}>*</span> são obrigatórios</h6>
                            <div className="form-group mt-2 text-center m-4 mt-4">
                                <button type="submit" className="btn btn-block btn-primary" id="btn-cadastrar">Cadastrar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </main>
            <footer>
                <PageFooterSiteBootStrap />
                <PageFooterSocialBootstrap />
            </footer>
        </div>
    )
}

        