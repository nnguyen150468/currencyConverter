let user; let goal; let amount; //decalre variables

/*functions to get the user's currency and the desired currency as well as amount*/
function getUser(){
    user = prompt("What is your currency? VND, USD, EUR, KRW, IDR");
    if ((user.toUpperCase()!=="VND") && (user.toUpperCase!=="USD") && (user.toUpperCase()!=="EUR") && (user.toUpperCase()!=="KRW") && (user.toUpperCase()!=="IDR")){
        getUser();
    } 
}

function getGoal(){
    goal = prompt("What do you want to convert to? VND, USD, EUR, KRW, IDR");
    if ((goal.toUpperCase()!=="VND") && (goal.toUpperCase()!=="USD") && (goal.toUpperCase()!=="EUR") && (goal.toUpperCase()!=="KRW") && (goal.toUpperCase()!=="IDR")){
        getGoal();
    }    
}

function getAmount(){
    amount = prompt("Your amount?");
    if ((amount < 0) || isNaN(amount)) {
        getAmount();
    }
}

getUser(); getGoal(); getAmount();

//exchange rates
const VND = {
    VND: 1,
    USD: 0.000043,
    KRW: 0.052,
    EUR: 0.000039,
    IDR: 0.61
  };
  
const USD = {
    VND: 23208,
    USD: 1,
    KRW: 1192,
    EUR: 0.90,
    IDR: 14230,
 };
  
const KRW = {
    VND: 19.47,
    USD: 0.00084,
    KRW: 1,
    EUR: 0.00075,
    IDR: 11.94
  };

const EUR = {
    VND: 25869.92,
    USD: 1.11,
    KRW: 1327.55,
    EUR: 1,
    IDR: 15865.47
};

const IDR = {
    VND: 1.63,
    USD: 0.00007,
    KRW: 0.084,
    EUR: 0.000063,
    IDR: 1
};

//functions to convert currencies, style the currencies, validate the input
function vndToGoal() {
      let rate = VND[goal];
      let result = amount * rate;
      console.log("VND",new Intl.NumberFormat({ style: 'currency', 
        currency: user }).format(amount),"=",goal,new Intl.NumberFormat({ style: 'currency', 
        currency: goal }).format(result));
  }

function usdToGoal() {
    let rate = USD[goal];
    let result = amount * rate;
    console.log("USD",new Intl.NumberFormat({ style: 'currency', 
        currency: user }).format(amount),"=",goal,new Intl.NumberFormat({ style: 'currency', 
        currency: goal }).format(result));
}

function krwToGoal() {
    let rate = KRW[goal];
    let result = amount * rate;
    console.log("KRW",new Intl.NumberFormat({ style: 'currency', 
        currency: user }).format(amount),"=",goal,new Intl.NumberFormat({ style: 'currency', 
        currency: goal }).format(result));
}

function eurToGoal() {
    let rate = EUR[goal];
    let result = amount * rate;
    console.log("EUR",new Intl.NumberFormat({ style: 'currency', 
        currency: user }).format(amount),"=",goal,new Intl.NumberFormat({ style: 'currency', 
        currency: goal }).format(result));
}

function idrToGoal() {
    let rate = IDR[goal];
    let result = amount * rate;
    console.log("IDR",new Intl.NumberFormat({ style: 'currency', 
        currency: user }).format(amount),"=",goal,new Intl.NumberFormat({ style: 'currency', 
        currency: goal }).format(result));
}

//run the cases
switch (user) {
    case 'VND':
        vndToGoal();
        break;
    case 'USD':
        usdToGoal();
        break;
    case 'KRW':
        krwToGoal();
        break;
    case 'EUR':
        eurToGoal();
        break;
    case 'IDR':
        idrToGoal();
        break;
}