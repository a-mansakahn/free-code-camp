function checkCashRegister(price, cash, cid) {

  const CURRENCY_UNIT = {
    "PENNY" : 1,
    "NICKEL" : 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "FIFTY": 5000,
    "ONE HUNDRED": 10000
  };
  //variables
  let changeSum = cash*100 - price*100;
  let totalChange = changeSum;
  let drawerTotal = 0; //the total amount of money in the drawer as a whole number
  let status = "";
  let change = [];

  //get drawerTotal
  for(let x=0; x<cid.length; x++){
    drawerTotal += cid[x][1]*100;
  }

  //First check
  if(changeSum > drawerTotal){
    return {"status": "INSUFFICIENT_FUNDS", "change": []};
  }

  let newCid = cid.filter(elem => elem[1] !== 0).reverse();
  //console.log(newCid)
  for(let x=0; x < newCid.length; x++){
    //go to the first one, take money out as needed, go to the next one when empty
    let currency = newCid[x][0];
    let currAmount = newCid[x][1]*100;
    let amount = 0;
    //console.log(currency, currAmount, amount, changeSum)
    //Whats the difference between CURRENCY_UNIT[currency] and newCid[x][1]?
    while(changeSum >= CURRENCY_UNIT[currency] && currAmount > 0){
      //changed changeSum > 0 to currAmount > 0
      amount += CURRENCY_UNIT[currency];
      changeSum -= CURRENCY_UNIT[currency];
      currAmount -= CURRENCY_UNIT[currency];
      //console.log("amount: ", amount, " changeSum: ", changeSum, " currAmount: ", currAmount)
    }
    //console.log(amount)
    if(amount !== 0){
      change.push([currency, amount/100])
    }
    status = "OPEN";
  }
  if(changeSum > 0){
    return {"status": "INSUFFICIENT_FUNDS", "change": []}
  }
  if(changeSum == 0 && totalChange == drawerTotal){
    return {"status": "CLOSED", "change": cid};
  }

  return {"status": status, "change": change};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
