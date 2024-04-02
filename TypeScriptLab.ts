//^ 1-	Create array that accept number only
let ARR1: number[];

//^ 2-	Create array that accept string and number only and print all items
let ARR2: (string | number)[];
ARR2 = [1, 2, 3, "a", "b", "c"];
console.log(...ARR2);

//^ 3-	Create a variable that accept number and Boolean only
let var3: number | boolean;

//^ 4-	Create function with two parameters try to call it without any parameter “handling”
function NullableParams(a?: number, b?: number): any {
  if (a !== undefined && b !== undefined) return a + b;
  else if (a !== undefined) return a;
  else {
    return;
  }
}
NullableParams();
//---------------------------------------------------------------------------------

//^ 5-	Create class Employee implement IEmployee using this object as implementation
interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

class Employee implements IEmployee {
  id: number;
  name: string;
  private _username: string;
  email: string;
  public address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

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

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }
}

const employee = new Employee();
console.log(employee.username);
console.log(employee.address);
//---------------------------------------------------------------------------------

//^ 6-	Create class manager inherit from employee class and Create a function to view employee address
class EMPLOYEE {
  private id: number;
  protected name: string;
  public address: string;

  constructor(a: string) {
    this.address = a;
  }

  display(): string {
    return this.address;
  }
}
let emp = new EMPLOYEE("Glim");
emp.display();

class MANAGER extends EMPLOYEE {
  private salary: number;

  constructor(s: number, name: string) {
    super(name);
    this.salary = s;
  }

  display(): string {
    return this.address;
  }
}
//---------------------------------------------------------------------------------

//^ 7-	Implement the following diagram
interface IAccount {
  Date_of_Opening: Date;
  addCustomer: () => string;
  removeCustomer: () => string;
}

class Saving_Account implements IAccount {
  Min_Balance: number;
  Date_of_Opening: Date;

  addCustomer(): string {
    return "Customer Added to saving account";
  }

  removeCustomer(): string {
    return "Customer Removed from saving account";
  }

  constructor(d: Date, b: number) {
    this.Date_of_Opening = d;
    this.Min_Balance = b;
  }
}

class Current_Account implements IAccount {
  Interest_Rate: number;
  Date_of_Opening: Date;

  addCustomer(): string {
    return "Customer added to current account";
  }

  removeCustomer(): string {
    return "Customer removed from current account";
  }

  constructor(d: Date, i: number) {
    this.Date_of_Opening = d;
    this.Interest_Rate = i;
  }
}

class AccountMixin {
  addSavingAccount(customer: Saving_Account): string {
    return customer.addCustomer();
  }

  removeSavingAccount(customer: Saving_Account): string {
    return customer.removeCustomer();
  }

  addCurrentAccount(customer: Current_Account): string {
    return customer.addCustomer();
  }

  removeCurrentAccount(customer: Current_Account): string {
    return customer.removeCustomer();
  }
}

class Account extends AccountMixin {
  private Acc_no: number;
  protected balance: number;
  debit: number;
  credit: number;

  debitAmount(): number {
    return this.debit;
  }

  creditAmount(): number {
    return this.credit;
  }

  getBalance(): number {
    return this.balance;
  }

  constructor(dbt: number, crd: number) {
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
