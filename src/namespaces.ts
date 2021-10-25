/// <reference path="form-namespace.ts"/>
namespace Form_1 {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) { }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  const myForm = new MyForm('val@mail.com')

  console.log(myForm)
}