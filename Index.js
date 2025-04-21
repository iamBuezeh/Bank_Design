
var acct1 = {
    owner: 'promise ajax',
    movement: [200, 450, -850, 230, 654, -321, -66],
    interestRate: 1.5,
    pin: 1234
}

var acct2 = {
    owner: 'ikenna ola',
    movement: [250, 70, 550, 150, -50],
    interestRate: 1.5,
    pin: 1234
}

var acct3 = {
    owner: 'john obi',
    movement: [400, 350, 100, 357, -200 ],
    interestRate: 1.5,
    pin: 1234
}

var acct4 = {
    owner: 'mike ali',
    movement: [250, 500, 570, -320, 500, -310, -60],
    interestRate: 1.5,
    pin: 1234
}


var accounts = [acct1, acct2, acct3, acct4];

// header classes
const Welcome_comment = document.querySelector('.Welcome_comment')
const nav_cont = document.querySelector('.nav_cont')
const userName = document.querySelector('.userName');
const userPassword = document.querySelector('.userPassword');
const login_button = document.querySelector('.login_button')
const app = document.querySelector('.body_containner')
const transferAccount = document.querySelector('.transferAccount');
const transferAmount = document.querySelector('.transferAmount');
const loanAmount = document.querySelector('.loanAmount');
const history = document.querySelector('.history')
const transaction_deposit = document.querySelector('.transaction_deposit')
const transaction_withdraw = document.querySelector('.transaction_withdraw')
const balanceAmount = document.querySelector('.balanceAmount')
const transfer_button = document.querySelector('.transfer_button')
const loan_button = document.querySelector('.loan_button')
const income = document.querySelector('.income')
const outcome = document.querySelector('.outcome')










//running display code
// app.style.display = "none"
// Welcome_comment.style.display = "none"
var loggedUser;

login_button.addEventListener('click', function () {
    loggedUser = findUser(userName.value)
    if (loggedUser && loggedUser.pin == userPassword.value) {
        console.log(loggedUser)
        app.style.display = "block"
         


        Welcome_comment.innerHTML = 'welcome back! ' + loggedUser.owner
        Welcome_comment.style.display = "block"
        displayTransaction(loggedUser.movement)
        balanceAmount.innerHTML = '$' + moves(loggedUser.movement) 
        income.innerHTML = 'Money-In: $' + moneyin(loggedUser.movement)
        outcome.innerHTML = 'Money-Out: $' + moneyout(loggedUser.movement)

        userName.value = ' ';
        userPassword.value = ' ';
        
    } else {

        
        app.style.display = "none"
        alert("incorrect username or password")


        income.innerHTML = "Money-In: $0"
        outcome.innerHTML = "Money-Out: $0"
        

        
    
    }

})
 


accounts.forEach((users) => {
    users.username = username(users.owner)
})


function username(owner) {
    const user = owner.split(' ').map((ele) => ele[0]).join('').toLowerCase();
    return user;
}




function findUser(user) {
    const list = accounts.find((ele) => {
        return ele.username == user;
    })
    return list;
}

loan_button.addEventListener('click', function(){

    loggedUser.movement.push(+loanAmount.value)
    balanceAmount.innerHTML = '$' + moves(loggedUser.movement)
    displayTransaction(loggedUser.movement)
    income.innerHTML = 'Money-In: $' + moneyin(loggedUser.movement)
    loanAmount.value = '';
    console.log(loggedUser.movement)

})






function moves(movement){
    var user = movement.reduce((acc,cur) => {
        return acc + cur;
    })
    balanceAmount.innerHTML = '$' +user
    return user;
}



transfer_button.addEventListener('click', function() {
 var trfuser;
 trfuser = findUser(transferAccount.value)
 console.log( trfuser);



 if (transferAmount.value <= moves(loggedUser.movement)) {
    
    
    trfuser.movement.push(transferAmount.value)
    loggedUser.movement.push(-transferAmount.value)
    displayTransaction(loggedUser.movement)
    balanceAmount.innerHTML = '$' + moves(loggedUser.movement) 
    outcome.innerHTML = 'Money-Out: $' + moneyout(loggedUser.movement)
    transferAmount.value = '';
    transferAccount.value = '';



 } else {
   
    alert("invalid amount")
   
}
   
})




console.log( moneyin(acct1.movement));

function moneyin(movement){
    const user = movement.filter((ele) =>  ele > 1).reduce((acc,ur) =>{
        return acc + ur;
    })

    return user;
   
}


function moneyout(movement){
    const user = movement.filter((ele) =>  ele < 1).reduce((acc,ur) =>{
        return acc + ur;
    })

    return user;
   
}





// displayTransaction(loggedUser.movement)

function displayTransaction(acc) {
    var num = 0;
    history.innerHTML= '';
    acc.forEach((mov) => {
        num++;
        var type = mov > 0 ? 'deposit' : 'withdrawal'
        
        let html = ` <div class="transaction_deposit">
                        <div class="badge ${type}">${num}  ${type}</div>
                        <div class="transaction_amount">$${mov}</div>
                    </div>`
        history.insertAdjacentHTML('afterBegin', html)
        
    })
    
}









































































