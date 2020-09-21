var currency__one = document.getElementById("currency__one");
var amount__one = document.getElementById("amount__one");

var currency__two = document.getElementById("currency__two");
var amount__two = document.getElementById("amount__two");

var rateEle = document.getElementById("rate");
var swap = document.getElementById("swap");

function calculate() {
  var fromCurrency = currency__one.value;
  var toCurrency = currency__two.value;
  //   console.log(fromCurrency, toCurrency);

  fetch(
    `https://v6.exchangerate-api.com/v6/a3d2f817922c6a34fdf03c9e/latest/${fromCurrency}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var rate = data.conversion_rates[toCurrency];
      //   console.log(rate);
      rateEle.innerText = `1 ${fromCurrency} = ${rate} ${toCurrency}`;

      amount__two.value = (amount__one.value * rate).toFixed(2);
    });
}

currency__one.addEventListener("change", calculate);
amount__one.addEventListener("input", calculate);
currency__two.addEventListener("change", calculate);
amount__two.addEventListener("input", calculate);

swap.addEventListener('click', () => {
    var temp = currency__one.value;
    currency__one.value = currency__two.value;
    currency__two.value = temp;
    calculate();
  });

calculate();
