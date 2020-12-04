let name = 'Alexander'
let accountNumber = '4329129'
let loanAmount = 90000
let downPayment = 200000
let loanTerm = 30 // in years
let interestRate = 3.5
let M = monthlyPayment(loanAmount, loanTerm, interestRate)

console.log(`The borrower's name is ${name} with the account number of ${accountNumber}`)
console.log(`The total price of the house is $${loanAmount + downPayment}`)
console.log(`You have already put down a down payment of $${downPayment}`)
console.log(`With a loan amount of $${loanAmount}, a loan term of ${loanTerm * 12} months or ${loanTerm} years, and an interest rate of ${interestRate}%`)
console.log(`Your monthly payment comes out to $${M.toFixed(2)} per month`)

function monthlyPayment (loan, terms, interest) {
    let interestRatePerMonth = (interest / 100) / 12 
    let numPayments = terms * 12 // converts loan term from years to number of months 
    return loan * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, numPayments)) / (Math.pow(1 + interestRatePerMonth, numPayments) - 1)
}


