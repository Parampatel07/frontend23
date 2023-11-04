function generateTable() {
     document.getElementById("data").innerHTML = '';
     var number1 = parseInt(document.getElementById("firstNumber").value);
     var number2 = parseInt(document.getElementById("secondNumber").value);
     console.log(`The value of number1 is ${number1} and number2 ${number2}`);
     var flash = 0;
     var temp = '';
     var answer = 0;
     var count = 0;
     for (flash = number1; flash <= number2; flash++) {
          for (count = 1; count <= 10; count++) {
               answer = number1 * count;
               temp += (` ${number1} * ${count} = ${answer} <br>`);
          }
          document.getElementById("data").innerHTML += `
          <div class="col-3 mt-3">
               <div class="card">
                    <div class="card-body text-center">
                    ${temp}
                    </div>
               </div>
          </div>`;
          number1 = number1 + 1;
          temp = '';
     }
}
function clearData() {
     document.getElementById("data").innerHTML = '';
     document.getElementById("firstNumber").value = '';
     document.getElementById("secondNumber").value = '';
}