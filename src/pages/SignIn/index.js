/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../services/auth';
import api from '../../services/api';
import { loginSucess, showError } from './script';

import PageHeader from '../../components/PageHeaderBootstrap';
import PageFooterSiteBootStrap from '../../components/FooterSiteBootstrap';
import PageFooterSocialBootstrap from '../../components/FooterSocialBootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';

import './styles.css';
import './script.jsx';

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignIn = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        console.log(this.state);

        try {
            const response = await api.post('/student/login', { email, password });
            console.log(response);
            login(response.data.token);
            this.props.history.push("/courses");
            loginSucess("Login feito com sucesso");

        } catch (err) {
            showError("Houve um problema com o login, verifique suas credenciais.")
        }
    }

    render() {
        return (
            <div className="scrollBar">
                <PageHeader />
                <main className="content">
                    <button id="toTopButton" className="mr-4">
                        <i className="fas fa-angle-up"></i>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                    <h1 className="page-header mt-5 mr-5 ml-5 mb-0">Login</h1>
                    <div className="mt-4 mb-4">
                        <form method="POST" onSubmit={this.handleSignIn}>
                            <div className="accounts login d-flex flex-column align-items-center">
                                <div className="col-12 col-md-6 col-lg-5">
                                    <div className="card">
                                        <div className="d-flex flex-column pt-4 pt-md-5 pr-4 pr-md-5 pl-4 pl-md-5 pb-0">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" name="email" onChange={this.handleChange} />
                                            </div>

                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Senha" name="password" onChange={this.handleChange} />
                                            </div>

                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block" id="btnLogar">Entrar</button>
                                            </div>
                                        </div>

                                        <div className="mt-0 pl-4 pl-md-5 pr-4 pr-md-5 pb-4 pb-md-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <Link to="/signup/student">Quer ser nosso aluno? Clique aqui para se cadastrar como aluno.</Link>
                                                </div>

                                                <div className="col-12">
                                                    <Link to="/signup/teacher">É professor? Clique aqui para se cadastrar como professor.</Link>
                                                </div>

                                                <div className="col-12">
                                                    <Link to="/signup/forgot/password">Esqueceu a senha?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
}

export default withRouter(SignIn);