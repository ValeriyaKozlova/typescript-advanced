"use strict";
var Form_1;
(function (Form_1) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    const myForm = new MyForm('val@mail.com');
    console.log(myForm);
})(Form_1 || (Form_1 = {}));
//# sourceMappingURL=namespaces.js.map