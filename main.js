let future_value = 110.4;
let present_value = 100;
let interest_period = 0.01;
let total_periods /*= 10*/;
let option = 4;

switch (option){
  case 1:
    futureValue();
    break;
  case 2:
    presentValue();
    break;
  case 3:
    interestPeriod();
    break;
  case 4:
    totalPeriods();
    break;
}

function futureValue(/*present_value, interest_period, total_periods*/){
  let result = present_value * Math.pow(1+interest_period, total_periods);
  return console.log(result)
}

function presentValue(/*future_value, interest_period, total_periods*/){
  let result = future_value / Math.pow(1+interest_period, total_periods);
  return console.log(result)
}

function interestPeriod(){
  let result =  (Math.pow((future_value/present_value),1/total_periods))-1;
  return console.log(result)
}

function totalPeriods(){
  let result = Math.log(future_value/present_value) / Math.log(1+interest_period); 
  return console.log(result)
}
