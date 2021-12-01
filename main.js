function calculate(){

  let option = document.getElementById("options").value;
  let future_value = document.getElementById("future_value").valueAsNumber;
  let present_value = document.getElementById("present_value").valueAsNumber;
  let interest_period = (document.getElementById("interest_period").valueAsNumber)/100;
  let total_periods = document.getElementById("total_periods").valueAsNumber;
  
  switch (option){
    case "1":
      if (isNaN(present_value) || isNaN(interest_period) || isNaN(total_periods)){
        alert("Debe ingresar los datos de: valor presente, interes del periodo, total periodos")
      } else {
        let result = futureValue(present_value, interest_period, total_periods);
        document.getElementById("result").innerHTML = result
      }
      break;
    case "2":
      if (isNaN(future_value) || isNaN(interest_period) || isNaN(total_periods)){
        alert("Debe ingresar los datos de: valor futuro, interes del periodo, total periodos")
      } else {
        let result = presentValue(future_value, interest_period, total_periods);
        document.getElementById("result").innerHTML = result 
      }
      break;
    case "3":
       if (isNaN(present_value) || isNaN(future_value) || isNaN(total_periods)){
        alert("Debe ingresar los datos de: valor futuro, valor presente, total periodos")
      } else {
        let result = interestPeriod(future_value, present_value, total_periods);
        document.getElementById("result").innerHTML = result 
      }
      break;
    case "4":
       if (isNaN(present_value) || isNaN(future_value) || isNaN(interest_period)){
        alert("Debe ingresar los datos de: valor futuro, valor presente, interes del periodo")
      } else {
        let result = totalPeriods(future_value, present_value, interest_period);
        document.getElementById("result").innerHTML = result 
      }
      break;
  }
}

function futureValue(present_value, interest_period, total_periods){
  let value = present_value * Math.pow(1+interest_period, total_periods);
  return value.toFixed(1)
}

function presentValue(future_value, interest_period, total_periods){
  let value = future_value / Math.pow(1+interest_period, total_periods);
  return value.toFixed(0)
}

function interestPeriod(future_value, present_value, total_periods){
  let value =  (Math.pow((future_value/present_value),1/total_periods))-1;
  return value.toFixed(2)
}

function totalPeriods(future_value, present_value, interest_period){
  let value = Math.log(future_value/present_value) / Math.log(1+interest_period); 
  return value.toFixed(0)
}

function clear_calculator(){
  document.getElementById("future_value").value = "";
  document.getElementById("present_value").value = "";
  document.getElementById("interest_period").value = "";
  document.getElementById("total_periods").value = "";
}

