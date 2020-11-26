const numNumber = document.querySelector('#numNumber');
const txtNumber = document.querySelector('#txtNumber')
const rngNumbers = document.querySelector('#rngNumbers')

preventFormSubmit();
start();

rngNumbers.addEventListener('input', printNumber);
rngNumbers.addEventListener('change', defineText);


function start() {
  rngNumbers.value = 0;
  numNumber.value = 0;
  txtNumber.value = 'Zero';
}

function preventFormSubmit () {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  function handleFormSubmit (event) {
    event.preventDefault();
  }
}

function printNumber(event) {
  let changingNumber = event.target.value; 
  numNumber.value = changingNumber;
}

function defineText(event) {
  let changedNumber = event.target.value;
  let uniExtensive = ['Zero','Um','Dois','Tres','Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove','Dez', 'Onze', 'Doze', 'Treze', 'Catorze', 'Quinze', 'Desesseis', 'Desessete', 'Desoito', 'Desenove']
  let dezExtensive = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
  let cemExtensive = ['Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seiscentos', 'Setecentos', 'Oitocentos', 'Novecentos']
  
  if (changedNumber > 99) {
    changedNumber.toString()
    if (changedNumber === '100') {
      printText(changedNumber);
    } else {
      printText(`${cemExtensive[changedNumber[0]-1]} e ${dealDezena(changedNumber[1] + changedNumber[2])}`);
    }
  } else {
    printText(dealDezena(changedNumber));
  }    
  function dealDezena(num) {
    num = parseFloat(num);
    if (num > 20) {
      num = num.toString()
      let txt = num[1] !== '0' ? ' e ' + uniExtensive[num[1]] : '';
      return dezExtensive[num[0]-2] + txt;
    } else {
      return uniExtensive[num];
    }
  } 
}

function printText(txt) {
  txtNumber.value = txt;
}
