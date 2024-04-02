//^ 1-	Create array that accept number only
let ARR1;
//^ 2-	Create array that accept string and number only and print all items
let ARR2;
ARR2 = [1, 2, 3, "a", "b", "c"];
console.log(...ARR2);
//^ 3-	Create a variable that accept number and Boolean only
let var3;
//^ 4-	Create function with two parameters try to call it without any parameter “handling”
function NullableParams(a, b) {
  if (a !== undefined && b !== undefined) return a + b;
  else if (a !== undefined) return a;
  else {
    return;
  }
}
NullableParams();
class Employee {
  constructor() {
    this.id = 1;
    this.name = "Leanne Graham";
    this._username = "Bret";
    this.email = "Sincere@april.biz";
    this.address = {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    };
  }
  get username() {
    return this._username;
  }
  set username(username) {
    this._username = username;
  }
}
const employee = new Employee();
console.log(employee.username);
console.log(employee.address);
//---------------------------------------------------------------------------------
//^ 6-	Create class manager inherit from employee class and Create a function to view employee address
class EMPLOYEE {
  constructor(a) {
    this.address = a;
  }
  display() {
    return this.address;
  }
}
let emp = new EMPLOYEE("Glim");
emp.display();
class MANAGER extends EMPLOYEE {
  constructor(s, name) {
    super(name);
    this.salary = s;
  }
  display() {
    return this.address;
  }
}
class Saving_Account {
  addCustomer() {
    return "Customer Added to saving account";
  }
  removeCustomer() {
    return "Customer Removed from saving account";
  }
  constructor(d, b) {
    this.Date_of_Opening = d;
    this.Min_Balance = b;
  }
}
class Current_Account {
  addCustomer() {
    return "Customer added to current account";
  }
  removeCustomer() {
    return "Customer removed from current account";
  }
  constructor(d, i) {
    this.Date_of_Opening = d;
    this.Interest_Rate = i;
  }
}
class AccountMixin {
  addSavingAccount(customer) {
    return customer.addCustomer();
  }
  removeSavingAccount(customer) {
    return customer.removeCustomer();
  }
  addCurrentAccount(customer) {
    return customer.addCustomer();
  }
  removeCurrentAccount(customer) {
    return customer.removeCustomer();
  }
}
class Account extends AccountMixin {
  debitAmount() {
    return this.debit;
  }
  creditAmount() {
    return this.credit;
  }
  getBalance() {
    return this.balance;
  }
  constructor(dbt, crd) {
    super();
    this.debit = dbt;
    this.credit = crd;
  }
}
const account = new Account(100, 200);
console.log(account.addSavingAccount(new Saving_Account(new Date(), 1000)));
console.log(account.removeSavingAccount(new Saving_Account(new Date(), 1000)));
console.log(account.addCurrentAccount(new Current_Account(new Date(), 0.1)));
console.log(account.removeCurrentAccount(new Current_Account(new Date(), 0.1)));
