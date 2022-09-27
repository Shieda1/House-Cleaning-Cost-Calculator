// https://www.omnicalculator.com/everyday-life/cleaning-cost

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const housecleaningcostRadio = document.getElementById('housecleaningcostRadio');
const priceperhourRadio = document.getElementById('priceperhourRadio');
const ofhoursRadio = document.getElementById('ofhoursRadio');

let housecleaningcost;
let priceperhour = v1;
let ofhours = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

housecleaningcostRadio.addEventListener('click', function() {
  variable1.textContent = 'Price per hour';
  variable2.textContent = '# of hours';
  priceperhour = v1;
  ofhours = v2;
  result.textContent = '';
});

priceperhourRadio.addEventListener('click', function() {
  variable1.textContent = 'House cleaning cost';
  variable2.textContent = '# of hours';
  housecleaningcost = v1;
  ofhours = v2;
  result.textContent = '';
});

ofhoursRadio.addEventListener('click', function() {
  variable1.textContent = 'House cleaning cost';
  variable2.textContent = 'Price per hour';
  housecleaningcost = v1;
  priceperhour = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(housecleaningcostRadio.checked)
    result.textContent = `House cleaning cost = ${computehousecleaningcost().toFixed(2)}`;

  else if(priceperhourRadio.checked)
    result.textContent = `Price per hour = ${computepriceperhour().toFixed(2)}`;

  else if(ofhoursRadio.checked)
    result.textContent = `# of hours = ${computeofhours().toFixed(2)}`;
})

// calculation

function computehousecleaningcost() {
  return Number(priceperhour.value) * Number(ofhours.value);
}

function computepriceperhour() {
  return Number(housecleaningcost.value) / Number(ofhours.value);
}

function computeofhours() {
  return Number(housecleaningcost.value) / Number(priceperhour.value);
}