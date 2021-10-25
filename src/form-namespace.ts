namespace Form_1 {
  export type FormType = 'inline' | 'block'
  export type FormState = 'active' | 'disables'

  export interface FormInfo {
    type: FormType
    state: FormState
  }
}