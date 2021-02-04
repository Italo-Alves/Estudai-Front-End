import React, { useRef } from 'react'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import Input from './Input'
import AsyncSelect from './Select'
import { stateOptions } from './dataSelect'

interface FormData {
  name: string
  email: string
  password: number
  birthday: Date
  address: {
    zip: number
    state: string
    city: string
    street: string
    number: number
    neighborhood: string
    details: string
  }
}

const filterStates = (inputValue: string) => {
  return stateOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  )
}

const loadOptions = (
  inputValue: string,
  callback: (arg0: { value: string; label: string }[]) => void
) => {
  setTimeout(() => {
    callback(filterStates(inputValue))
  }, 1000)
}

const FormSignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(4, 'O nome deve conter mais de 4 letras')
          .max(50, 'O nome deve conter no máximo 50 letras')
          .required('Informe o nome!')
          .notOneOf(['admin', 'administrador'], 'Esse nome não é permitido'),
        surname: Yup.string().required('Informe o sobrenome!'),
        cpf: Yup.string().required('CPF é obrigatório'),
        birthday3: Yup.date()
          .typeError('Deve ser uma data')
          .required('Data de Nascimento é obrigatório')
          .test('age', 'Você deve ser maior de 18 anos', birthday3 => {
            const cutoff = new Date()
            cutoff.setFullYear(cutoff.getFullYear() - 18)
            return birthday3! <= cutoff
          }),
        address: Yup.object().shape({
          zip: Yup.string().required('O CEP é obrigatório'),
          state: Yup.string().required('O Estado é obrigatório'),
          city: Yup.string().required('A cidade é obrigatório'),
          street: Yup.string().required('A rua é obrigatória'),
          number: Yup.string().required('O número é obrigatório'),
          neighborhood: Yup.string().required('O bairro é obrigatório'),
          details: Yup.mixed().notRequired()
        }),
        email: Yup.string()
          .email('Informe um email válido!')
          .required('O email é obrigatório'),
        passworda: Yup.string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Informe a senha!'),
        passwordConfirm: Yup.string().oneOf(
          [Yup.ref('passworda')],
          'As senhas não correspondem'
        )
      })
      await schema.validate(data, {
        abortEarly: false
      })
      console.log(data)
      formRef.current?.setErrors({})
      reset()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path!] = error.message
        })
        formRef.current?.setErrors(errorMessages)
      }
    }
  }

  return (
    <Form
      id="formSignUp"
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="form-group col-12 col-md-6">
        <Input className="form-control" name="name" mask="" label="Nome" />
        <Input
          className="form-control"
          name="surname"
          mask=""
          label="Sobrenome"
        />
        <Input
          className="form-control"
          name="cpf"
          mask="999.999.999-99"
          maskPlaceholder=""
          label="CPF"
        />
        <Input
          name="birthday3"
          mask="99/99/9999"
          maskPlaceholder="dd/mm/aaaa"
          className="form-control"
          label="Data de Nascimento"
        />

        <Scope path="address">
          <Input
            name="zip"
            mask="99999-999"
            className="form-control"
            label="CEP"
          />
          <AsyncSelect
            name="state"
            loadOptions={loadOptions}
            defaultOptions={stateOptions}
            loadingMessage={() => 'Carregando'}
            noOptionsMessage={() => 'Sem opções'}
            placeholder="Selecionar"
            className="select"
            label="Estado"
          />
          <Input name="city" mask="" className="form-control" label="Cidade" />
          <Input name="street" mask="" className="form-control" label="Rua" />
          <Input
            name="number"
            mask="9999"
            maskPlaceholder=""
            className="form-control"
            label="Número"
          />
          <Input
            name="neighborhood"
            mask=""
            className="form-control"
            label="Bairro"
          />
          <Input
            name="details"
            mask=""
            className="form-control"
            label="Complemento"
          />
        </Scope>

        <Input
          className="form-control"
          type="email"
          name="email"
          label="Email"
          alwaysShowMask
        />
        <Input
          type="password"
          className="form-control"
          mask=""
          label="Senha"
          name="passworda"
        />
        <Input
          type="password"
          className="form-control"
          mask=""
          label="Confirma Senha"
          name="passwordConfirm"
        />
      </div>

      <div className="form-group mt-2 text-center m-4 mt-4">
        <button
          type="submit"
          className="btn btn-block btn-primary"
          id="btn-cadastrar"
        >
          Cadastrar
        </button>
      </div>
    </Form>
  )
}

export default FormSignUp
