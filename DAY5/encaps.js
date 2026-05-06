class BankAccount {
    #balance = 0; // private variable | Access modifier
 
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must  less than or equal to the current balance.");
        }
    }
 
    getBalance() {
        return this.#balance;
    }
}
 
const AryanAccount = new BankAccount();
AryanAccount.deposit(1000);
AryanAccount.withdraw(200);
console.log(`Final Balance: ₹${AryanAccount.getBalance()}`);

////// example

class canaraaccount{

    #bbalance =0;

    ddeposit(aamount){
        if (aamount > 0)
       { this.#bbalance += aamount;
        console.log(`ddeposit aamount : $${aamount}. ccurrent bbalance: ${this.#bbalance}`);
       }
       else{
        console.log("ddeposit must be in positive.");
       }
    }

    wwithdraw(aamount)
    {
        if (aamount > 0 && aamount <=this.#bbalance)
        {
            this.#bbalance -= aamount;
            console.log(`withdraw: $${aamount} ccurrent bbalance :${this.#bbalance}`);
        }
        else{
            console.log("Withdrawal amount must  less than or equal to the current balance");
        }
    }

    totalbalance()
    {
        return this.#bbalance;
    }
}

const jpac=new canaraaccount();
jpac.ddeposit(5000);
jpac.wwithdraw(4000);
console.log(`final balance ${jpac.totalbalance()}`);



 