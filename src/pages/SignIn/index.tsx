import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FooterTop from '../../components/Footers/FooterTop'
import FooterBack from '../../components/Footers/FooterBack'
import Header from '../../components/Header'
import ButtonTop from '../../components/ButtonTop'

import { login } from '../../services/auth'
import { loginSucess, showError } from './script'
import api from '../../services/api'
import { History, LocationState } from 'history'

import { Container } from './styles'

interface Props {
  email: string
  password: string
}

interface PropsHistory {
  history: History<LocationState>
}

const SignIn: React.FC<PropsHistory> = (props: PropsHistory) => {
  const [data, setData] = useState<Props>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await api.post('/student/login', data)
      login(response.data.token)
      props.history.push('/courses')
      loginSucess('Login feito com sucesso')
    } catch (error) {
      showError(
        `Houve um problema com o login, verifique suas credenciais.
        Erro: ${error.message}`
      )
    }
  }

  return (
    <Container>
      <Header />
      <div style={{ marginTop: '65px' }}></div>
      <main className="content">
        <h1 className="page-header mt-4 mr-5 ml-5 mb-0">Login</h1>
        <div className="mt-4 mb-4">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="accounts login d-flex flex-column align-items-center">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="card">
                  <div className="d-flex flex-column pt-4 pt-md-5 pr-4 pr-md-5 pl-4 pl-md-5 pb-0">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        id="btnLogar"
                      >
                        Entrar
                      </button>
                    </div>
                  </div>

                  <div className="mt-0 pl-4 pl-md-5 pr-4 pr-md-5 pb-4 pb-md-5">
                    <div className="row">
                      <div className="col-12">
                        <Link to="/signup/student">
                          Quer ser nosso aluno? Clique aqui para se cadastrar
                          como aluno.
                        </Link>
                      </div>

                      <div className="col-12">
                        <Link to="/signup/teacher">
                          É professor? Clique aqui para se cadastrar como
                          professor.
                        </Link>
                      </div>

                      <div className="col-12">
                        <Link to="/signup/forgot/password">
                          Esqueceu a senha?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <ButtonTop />
      <footer>
        <FooterTop />
        <FooterBack />
      </footer>
    </Container>
  )
}

export default SignIn
