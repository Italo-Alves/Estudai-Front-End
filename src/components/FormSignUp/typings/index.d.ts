import * as Yup from 'yup'

// declare module 'yup' {
//   class MixedSchema<TType = any, TContext = AnyObject, TOut = TType> extends Yup.BaseSchema<TType, TContext, TOut> {
//     equalTo(ref: any, message: string)
//   }
// }

// declare const Mixed: typeof MixedSchema
// export default Mixed

declare module 'yup' {
  class BaseSchema extends Yup.MixedSchema{
    equalTo(ref: any, message: string): this;
  }
}
