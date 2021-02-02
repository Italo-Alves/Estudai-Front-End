import React, { useRef } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import Input from './Input'

const MyForm = () => {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),
        passworda: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .max(16, 'No máximo 16 caracteres')
          .required('A senha é obrigatória'),
        birthday3: Yup.date()
          .typeError('Deve ser uma data')
          .required('Data de Nascimento é obrigatório')
          .test('age', 'Você deve ser maior de 18 anos', birthday3 => {
            const cutoff = new Date()
            cutoff.setFullYear(cutoff.getFullYear() - 18)
            return birthday3 <= cutoff
          }),
        address: Yup.object().shape({
          zip: Yup.string().required('O CEP é obrigatório'),
          state: Yup.string().required('O Estado é obrigatório'),
          city: Yup.string().required('A cidade é obrigatório'),
          street: Yup.string().required('A rua é obrigatória'),
          number: Yup.number()
            .typeError('Deve ser um número')
            .positive('Deve ser um número maior que zero')
            .required('O número é obrigatório'),
          neighborhood: Yup.string().required('O bairro é obrigatório'),
          details: Yup.mixed().notRequired()
        })
      })

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)

      formRef.current.setErrors({})

      {document.getElementById("formSignUp").reset()}
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        formRef.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <Form
      id="formSignUp"
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <div className="form-group col-12 col-md-6">
        <Input className="form-control" name="name" mask="" label="Nome" />
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
          name="birthday3"
          type="date"
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
          <Input name="state" className="form-control" label="Estado" />
          <Input name="city" className="form-control" label="Cidade" />
          <Input name="street" className="form-control" label="Rua" />
          <Input
            name="number"
            mask="9999"
            className="form-control"
            label="Número"
          />
          <Input name="neighborhood" className="form-control" label="Bairro" />
          <Input name="details" className="form-control" label="Complemento" />
        </Scope>
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

export default MyForm
