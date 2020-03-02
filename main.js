//let user = prompt("What do you want to convert to?\nA. VND to USD\nB. USD to VND");

let user = prompt("What is your currency?");

let goal = prompt("What do you want to convert to?");

const exchangeRate = 23208;

//currency Format
function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/*
//VND to USD
function vndToUSD() {
    let amountVND = prompt("Enter VND amount:");
    if(isNaN(amountVND)) {
        let amountVND = prompt("Please enter a valid VND amount.");
        let result = currencyFormat((amountVND/exchangeRate));
        console.log("VND",amountVND," = $",result);
    } else {
        let result = currencyFormat((amountVND/exchangeRate));
        console.log("VND",amountVND," = $",result);
    } 
}


//USD to VND

function usdToVND() {
    let amountUSD = prompt("Enter USD amount: \n");
    if(isNaN(amountUSD)) {
        let amountUSD = prompt("Please enter a valid USD amount.");
        let result = currencyFormat(amountUSD * exchangeRate);
        console.log("$",amountUSD," = VND",result);
    } else {
        let result = currencyFormat(amountUSD * exchangeRate);
        console.log("$",amountUSD," = VND",result);
    }
}
*/

function vndToUSD() {
    let amountVND = prompt("Enter VND amount: \n");
    if(isNaN(amountVND)===false && (amountVND>0)){
        let result = currencyFormat(amountVND / exchangeRate);
        console.log("VND",amountVND," = USD",result);
    } else {
        let amountVND = prompt("Please enter a valid VND amount.");
        let result = currencyFormat(amountUSD / exchangeRate);
        console.log("VND",amountUSD," = USD",result);
    }
}  


//USD to VND - new 
function usdToVND() {
    let amountUSD = prompt("Enter USD amount: \n");
    if(isNaN(amountUSD)===false && (amountUSD>0)){
        let result = currencyFormat(amountUSD * exchangeRate);
        console.log("$",amountUSD," = VND",result);
    } else {
        let amountUSD = prompt("Please enter a valid USD amount.");
        let result = currencyFormat(amountUSD * exchangeRate);
        console.log("$",amountUSD," = VND",result);
    }
}    

//Ask what currency user wants to convert to
if ((user==="VND" || user==="vnd") && (goal==="USD" || goal==="usd")){
    vndToUSD();
} else if ((user==="USD" || user==="usd") && (goal==="VND" || goal==="vnd")){
    usdToVND();
}

/*if (user ==="A"){
  vndToUSD();
} else if (user ==="B"){
    usdToVND();
} */

/*
let userCurrency = prompt("Your currency (USD, VND, EUR, KRW, IDR):");

let outputCurrency = prompt("What do you want to convert to (USD, VND, EUR, KRW, IDR)?");

let exchangeRate = [ {currency: 'USD', rate: 23235.50}, 
{currency: 'EUR', rate: 25707.18},  {currency: 'KRW', rate: 19.52}, 
{currency: 'IDR', rate: 1.63} ];

//let userAmount = prompt("Enter your amount:");

if (userCurrency===exchangeRate[j]["currency"]){
    for {
        let k=0;
        if (outputCurrency===exchangeRate[k]["currency"]){
            if (userCurrency ==="VND" || outputCurrency==="VND"){
                if (userCurrency ==="VND"){

                }
            } else:
            xchangeRate = exchangeRate[j]/exchangeRate[k];

        } 
    }
} */