"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
}
function Log2(target, propName) {
    console.log(target);
    console.log(propName);
}
function Log3(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "componentName", null);
__decorate([
    Log3
], Component.prototype, "logName", null);
Component = __decorate([
    Log
], Component);
function ComponentFunction(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
let Component_1 = class Component_1 {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Bind
], Component_1.prototype, "logName", null);
Component_1 = __decorate([
    ComponentFunction({
        selector: '#card',
        template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Card Component</span>
      </div>
    </div>`
    })
], Component_1);
const card = new Component_1('Card Component');
const btn = document.querySelector('#btn');
btn.addEventListener('click', card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: 'required' });
}
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
const form = new Form('hello@mail.ru');
if (validate(form)) {
    console.log("valid: ", form);
}
else {
    console.log('Validation error');
}
//# sourceMappingURL=decorators.js.map