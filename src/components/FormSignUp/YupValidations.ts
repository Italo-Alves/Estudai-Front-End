import * as Yup from 'yup'

const equalTo = (ref: any, message: string) => {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: message || `${ref.path} não coincidem ${ref}`,
    params: {
      reference: ref.path
    },
    test: function (value: any) {
      return value === this.resolve(ref)
    }
  })
}
Yup.addMethod<Yup.BaseSchema>(Yup.string, 'equalTo', equalTo)
