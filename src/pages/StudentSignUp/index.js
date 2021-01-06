import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';
import $ from 'jquery';

import { Header } from '../../components/Header';
import { FooterInstitucional, FooterSocial } from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { showError } from '../SignIn/script';

import './styles.css';
import './script.jsx';
import './validate.js';

class StudentSignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      documentNumber: '',
      birthday: '',
      zip: '',
      state: '',
      city: '',
      address: '',
      number: '',
      addressDetails: '',
      neighborhood: '',
      foneMobile: '',
      foneHome: '',
      foneCompany: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ city: $("#city").val() });
    this.setState({ address: $("#address").val() });
    this.setState({ neighborhood: $("#neighborhood").val() });
    this.setState({ state: $("#state").val() });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    this.state.documentNumber = this.state.documentNumber.replace(/[^\d]+/g, '');
    this.state.zip = this.state.zip.replace(/[^\d]+/g, '');
    this.state.foneMobile = this.state.foneMobile.replace(/[^\d]+/g, '');
    this.state.foneHome = this.state.foneHome.replace(/[^\d]+/g, '');
    this.state.foneCompany = this.state.foneCompany.replace(/[^\d]+/g, '');

    if ($("#foneCompany").val() === '') {
      this.state.foneCompany = null;
    }

    if ($("#foneHome").val() === '') {
      this.state.foneHome = null;
    }

    await api.post('/student', this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/auth/login");
      })
      .catch(error => {
        showError("Falha ao tentar cadastrar")
        console.log(error);
      })
  }

  render() {
    const { firstName, lastName, documentNumber, birthday, zip, state, city, address, number, addressDetails, neighborhood, foneMobile, foneHome, foneCompany, email, password } = this.state
    return (
      <div className="scrollBar">
        <Header />
        <main className="content">
          <button id="toTopButton" className="mr-4">
            <i className="fas fa-angle-up"></i>
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
          <h1 className="page-header mt-5 ml-4 mr-5">Cadastro de Alunos</h1>
          <div className="mb-2 mt-1">
            <form method="POST" id="formRegister" onSubmit={this.handleSubmit}>
              <fieldset>
                <div className="mt-2 ml-4 mr-4 mb-4">
                  <div className="block p-3">
                    <h5>Dados Pessoais</h5>
                    <div className="form-row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="firstName" className="required">Nome</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} minLength={2} maxLength={45} required />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="lastName" className="required">Sobrenome</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} minLength={2} maxLength={45} required />
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="documentNumber" className="required">CPF</label>
                        <input type="text" className="form-control" id="documentNumber" name="documentNumber" value={documentNumber} onChange={this.handleChange} placeholder="Apenas números" maxLength={11} required />
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="birthday" className="required">Data de Nascimento</label>
                        <input type="date" className="form-control" id="birthday" name="birthday" value={birthday} onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>

                  <div className="block p-3 mt-3">
                    <h5>Endereço</h5>
                    <div className="form-row">
                      <div className="form-group col-md-2">
                        <label htmlFor="zip" className="required">CEP</label>
                        <input type="text" className="form-control" id="zip" name="zip" value={zip} onChange={this.handleChange} maxLength={8} required />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="state" className="required">Estado</label>
                        <select name="state" id="state" className="form-control" value={state} onChange={this.handleChange} required>
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
                        <input type="text" id="city" className="form-control" name="city" value={city} onChange={this.handleChange} maxLength={45} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label htmlFor="address" className="required">Rua</label>
                        <input type="text" className="form-control" id="address" name="address" value={address} onChange={this.handleChange} placeholder="Ex.: Avenida Paulista" maxLength={150} required />
                      </div>

                      <div className="form-group col-md-1">
                        <label htmlFor="number" className="required">Número</label>
                        <input type="number" className="form-control" id="number" name="number" value={number} onChange={this.handleChange} maxLength={5} required />
                      </div>

                      <div className="form-group col-md-3">
                        <label htmlFor="addressDetails">Complemento</label>
                        <input type="text" className="form-control" id="addressDetails" name="addressDetails" value={addressDetails} onChange={this.handleChange} maxLength={45} placeholder="Casa, Apartamento, Bloco..." />
                      </div>

                      <div className="form-group col-md-3">
                        <label htmlFor="neighborhood" className="required">Bairro</label>
                        <input type="text" className="form-control" id="neighborhood" name="neighborhood" value={neighborhood} onChange={this.handleChange} maxLength={45} required />
                      </div>
                    </div>
                  </div>

                  <div className="block p-3 mt-3">
                    <h5>Telefone</h5>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="foneHome" className="required">Celular</label>
                        <input type="text" className="form-control" id="foneMobile" name="foneMobile" value={foneMobile} onChange={this.handleChange} maxLength={11} placeholder="Celular com DDD" required />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="foneHome">Residencial</label>
                        <input type="text" className="form-control" id="foneHome" name="foneHome" value={foneHome} onChange={this.handleChange} maxLength={10} placeholder="Telefone com DDD" />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="foneCompany">Comercial</label>
                        <input type="text" className="form-control" id="foneCompany" name="foneCompany" value={foneCompany} onChange={this.handleChange} maxLength={11} placeholder="Telefone com DDD" />
                      </div>
                    </div>
                  </div>
                  <div className="block p-3 mt-3">
                    <h5>Login</h5>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="email" className="required">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.handleChange} placeholder="Email que será utilizado para login" maxLength={100} required />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="password" className="required">Senha</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.handleChange} placeholder="Utilize uma senha forte" minLength={6} maxLength={32} required />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="password_confirm" className="required">Confirmar Senha</label>
                        <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Digite a senha novamente" minLength={6} maxLength={32} required />
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="legend">Campos <span style={{ color: 'red' }}>*</span> são obrigatórios</h6>
                <div className="form-group mt-2 text-center m-4 mt-4">
                  <button type="submit" className="btn btn-block btn-primary" id="btn-cadastrar">Cadastrar</button>
                </div>
              </fieldset>
            </form>
          </div>
        </main>
        <footer>
          <FooterInstitucional />
          <FooterSocial />
        </footer>
      </div>
    )
  }
}

export default withRouter(StudentSignUp);
