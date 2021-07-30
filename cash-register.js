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
  let drawerTotal;
  let status = "";
  let change = [];

  //get drawerTotal
  for(let x=0; x<cid.length; x++){
    drawerTotal += (cid[x][1]*100);
  }
  //First check
  if(changeSum > drawerTotal){
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  else if(changeSum == drawerTotal){
    status = "CLOSED";
    change = cid;
  }
  else if(changeSum < drawerTotal){
    let newCid = cid.filter(elem => elem[1] !== 0).reverse();
    let currency = elem[0];
    for(let x=0; x < newCid.length; x++){
      //go to the first one, take money out as needed, go to the next one when empty
      while(changeSum >= newCid[x][1] && changeSum > 0){

      }
    }
  }

  return {"status": status, "change": change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
