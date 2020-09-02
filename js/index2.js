function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency",
  });
  return formatter.format(value);
}

// get amount
function getAmount() {
  let amount = document.getElementById("amount").value;
  return amount;
}

// exchange rate
let vndRate = { VND: 1, USD: 23208, EUR: 27643, KRW: 19.571 };
let exchangeRate, result;

function calculate() {
  // get amount
  let amount = getAmount();

  if (isNaN(parseInt(amount))) {
    alert("Please input valid amount!");
    return;
  }

  let fromCurrency = getSelectFromCurrency();
  let toCurrency = getSelectToCurrency();

  if (vndRate[fromCurrency] && vndRate[toCurrency]) {
    result = ((amount * vndRate[fromCurrency]) / vndRate[toCurrency]).toFixed(
      2
    );
  } else {
    alert("Please input valid currency!");
    return;
  }

  document.getElementById("result").innerHTML =
    formatCurrency(fromCurrency, amount) +
    " exchanged for " +
    formatCurrency(toCurrency, result);

  // console.log(formatCurrency(fromCurrency, amount) + " exchanged for " + formatCurrency(toCurrency, result));
}

function swap() {
  // get amount
  let amount = getAmount();

  let fromCurrency = getSelectToCurrency();
  let toCurrency = getSelectFromCurrency();
  document.getElementById("fromCurrency").value = fromCurrency;
  document.toCurrency.choice.value = toCurrency;

  if (vndRate[fromCurrency] && vndRate[toCurrency]) {
    result = ((amount * vndRate[fromCurrency]) / vndRate[toCurrency]).toFixed(
      2
    );
  }

  document.getElementById("result").innerHTML =
    formatCurrency(fromCurrency, amount) +
    " exchanged for " +
    formatCurrency(toCurrency, result);
}

// from currency
function getSelectFromCurrency() {
  var selectedFromCurrency = document.getElementById("fromCurrency").value;
  return selectedFromCurrency;
}

// to currency
function getSelectToCurrency() {
  var selectedToCurrency = document.querySelector(
    'input[name="choice"]:checked'
  ).value;
  return selectedToCurrency;
}
