var totalPriceInput = document.getElementById("total-price");
var vatPrice = document.getElementById("vat-price");
var priceWithoutVAT = document.getElementById("price-without-vat");
var submitButton = document.getElementById("submit");
var resetButton = document.getElementById("reset");
function calculateVAT() {
  const vatPercent = document.getElementById("vat-percent").value;
  const totalPrice = parseFloat(totalPriceInput.value);
  if (!totalPrice) {
    alert("Please enter a valid total price");
    return;
  }
  const vatRate = parseFloat(vatPercent);
  const vat = totalPrice * vatRate;
  const priceWithoutVat = totalPrice - vat;
  vatPrice.value = vat.toFixed(2);
  priceWithoutVAT.value = priceWithoutVat.toFixed(2);
}
submitButton.addEventListener("click", calculateVAT);
resetButton.addEventListener("click", function () {
    totalPriceInput.value = '';
    vatPrice.value = '';
    priceWithoutVAT.value = '';
    document.getElementById("vat-percent").value = 0.06;
});
