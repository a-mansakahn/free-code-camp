function checkCashRegister(price, cash, cid) {

  const CURRENCY_UNIT = {
    PENNY : 1,
    NICKEL : 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    FIFTY: 5000,
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

  //Annoying bit
  let newCid = cid.filter(elem => elem[1] !== 0).reverse();

  for(let x=0; x<newCid.length; x++){
    if(changeSum <= newCid[x][1]*100){

    }
  }

  
  return {"status": status, "change": change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
