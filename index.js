

const greet = document.getElementById('greet');
const myAge = document.getElementById('myAge');
const myMoney = document.getElementById('myMoney');

setTimeout(() => {
    greet.textContent = `Hello, Ali`;
    myAge.textContent = `You are 24 yrs old`;
    myMoney.textContent = `You have $0 in your bank account`;
}, 2000);
